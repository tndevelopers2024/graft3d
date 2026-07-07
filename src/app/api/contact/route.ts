import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
    name: string;
    email: string;
    phone: string;
    city: string;
    message: string;
    subject: string;
};

type RateLimitBucket = {
    count: number;
    resetAt: number;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-() ]{6,25}$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 12;

const rateLimitStore = new Map<string, RateLimitBucket>();

function sanitizeString(value: unknown): string {
    if (typeof value !== "string") {
        return "";
    }
    return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getClientIp(req: NextRequest): string {
    const forwarded = req.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }

    const realIp = req.headers.get("x-real-ip");
    if (realIp) {
        return realIp.trim();
    }

    return "unknown";
}

function exceedsRateLimit(ip: string): boolean {
    const now = Date.now();
    const currentBucket = rateLimitStore.get(ip);

    if (!currentBucket || currentBucket.resetAt <= now) {
        rateLimitStore.set(ip, {
            count: 1,
            resetAt: now + RATE_LIMIT_WINDOW_MS,
        });
        return false;
    }

    currentBucket.count += 1;
    rateLimitStore.set(ip, currentBucket);
    return currentBucket.count > RATE_LIMIT_MAX_REQUESTS;
}

async function parseBody(req: NextRequest): Promise<Record<string, unknown>> {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
        return (await req.json()) as Record<string, unknown>;
    }

    if (
        contentType.includes("application/x-www-form-urlencoded") ||
        contentType.includes("multipart/form-data")
    ) {
        const formData = await req.formData();
        const entries = Array.from(formData.entries()).map(([key, value]) => [
            key,
            typeof value === "string" ? value : value.name,
        ]);
        return Object.fromEntries(entries);
    }

    return {};
}

function normalizePayload(
    rawBody: Record<string, unknown>,
): ContactPayload | { error: string } {
    const name = sanitizeString(rawBody.name) || "Website Visitor";
    const email = sanitizeString(rawBody.email);
    const phone = sanitizeString(rawBody.phone);
    const city = sanitizeString(rawBody.city);
    const message = sanitizeString(rawBody.message);
    const subject =
        sanitizeString(rawBody.subject) || `New Website Enquiry from ${name}`;
    const honeypot = sanitizeString(rawBody.honeypot);

    if (honeypot) {
        return {
            name,
            email,
            phone,
            city,
            message,
            subject,
        };
    }

    if (!message || message.length < 3) {
        return { error: "Please provide a valid message." };
    }

    if (!email && !phone) {
        return {
            error: "Please provide at least an email address or phone number.",
        };
    }

    if (email && !EMAIL_REGEX.test(email)) {
        return { error: "Please provide a valid email address." };
    }

    if (phone && !PHONE_REGEX.test(phone)) {
        return { error: "Please provide a valid phone number." };
    }

    if (subject.length > 150) {
        return { error: "Subject is too long." };
    }

    if (message.length > 8000) {
        return { error: "Message is too long." };
    }

    return {
        name: name.slice(0, 120),
        email: email.slice(0, 120),
        phone: phone.slice(0, 40),
        city: city.slice(0, 120),
        message,
        subject,
    };
}

function buildEmailHtml(payload: ContactPayload): string {
    const primaryColor = "#1e73be";
    const lightBgColor = "#F0F7FF";
    const textColor = "#1f2937";

    return `
    <div style="background-color: ${lightBgColor}; padding: 40px 10px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${textColor};">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <!-- Header -->
        <div style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Website Enquiry</h1>
        </div>

        <!-- Body -->
        <div style="padding: 40px 30px;">
          <p style="margin-top: 0; font-size: 16px; line-height: 1.5;">You have received a new enquiry through the <strong>Graft3D</strong> website. Here are the details:</p>
          
          <div style="margin-top: 30px; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse; background-color: #F9FAFB;">
              <tr>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; width: 120px; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(payload.name)}</td>
              </tr>
              <tr>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(payload.email || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(payload.phone || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">City</td>
                <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(payload.city || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 15px; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td>
                <td style="padding: 15px; color: ${textColor}; font-size: 15px; line-height: 1.6;">${escapeHtml(payload.message).replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <p style="font-size: 14px; color: #6B7280;">Please respond to this enquiry at your earliest convenience.</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #F3F4F6; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB;">
          <p style="margin: 0; font-size: 12px; color: #9CA3AF; line-height: 1.4;">
            &copy; ${new Date().getFullYear()} Graft3D Health Care Solutions Pvt. Ltd.<br>
            This is an automated message from the Graft3D website contact form.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
    try {
        const ip = getClientIp(req);
        if (exceedsRateLimit(ip)) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Too many requests. Please try again in a few minutes.",
                },
                { status: 429 },
            );
        }

        let rawBody: Record<string, unknown>;
        try {
            rawBody = await parseBody(req);
        } catch {
            return NextResponse.json(
                { success: false, message: "Invalid request payload." },
                { status: 400 },
            );
        }
        const payload = normalizePayload(rawBody);
        if ("error" in payload) {
            return NextResponse.json(
                { success: false, message: payload.error },
                { status: 400 },
            );
        }

        const emailUser = process.env.EMAIL_USER;
        const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

        if (!emailUser || !emailAppPassword) {
            console.error(
                "Missing email credentials: EMAIL_USER / EMAIL_APP_PASSWORD",
            );
            return NextResponse.json(
                { success: false, message: "Email service is not configured." },
                { status: 500 },
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailAppPassword,
            },
        });

        await transporter.sendMail({
            from: emailUser,
            to: emailUser,
            replyTo: payload.email || undefined,
            subject: payload.subject,
            html: buildEmailHtml(payload),
            text: [
                `Subject: ${payload.subject}`,
                `Name: ${payload.name}`,
                `Email: ${payload.email || "Not provided"}`,
                `Phone: ${payload.phone || "Not provided"}`,
                `City: ${payload.city || "Not provided"}`,
                "",
                "Message:",
                payload.message,
            ].join("\n"),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your request has been submitted successfully.",
            },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send your request. Please try again later.",
            },
            { status: 500 },
        );
    }
}
