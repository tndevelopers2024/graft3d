"use client";
import { ArrowRight, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
    const [file, setFile] = useState<File | null>(null);
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9+]/g, "");
        setPhone(val);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(form);
        if (file) {
            formData.set("file", file); // Ensure the file state is appended if they selected via middle block
        } else {
            formData.delete("file");
        }

        try {
            const res = await fetch("/api/polymer-part-contact", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: "success", message: data.message });
                form.reset();
                setFile(null);
                setPhone("");
            } else {
                setStatus({ type: "error", message: data.message });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-[#166AAF1A] py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                    {/* Left Column */}
                    <div className="flex flex-col pr-0 lg:col-span-5 lg:pr-8">
                        <h2 className="mb-4 text-[2rem] leading-tight font-bold whitespace-pre-line text-[#166AAF] lg:text-[2.5rem]">
                            {"Bring Us Your Most\nDifficult Polymer Part"}
                        </h2>
                        <p className="mb-8 text-[1.125rem] font-normal text-[#1E1E1E] lg:text-[1.25rem]">
                            We&apos;ll help you make it better, faster and
                            stronger.
                        </p>

                        <div className="mb-12 flex flex-col gap-6">
                            {[
                                {
                                    icon: "contact-icon-1.svg",
                                    text: "Material & design feasibility review",
                                },
                                {
                                    icon: "contact-icon-2.svg",
                                    text: "Sample printing & performance\nvalidation",
                                },
                                {
                                    icon: "contact-icon-3.svg",
                                    text: "Optimized solution for production",
                                },
                                {
                                    icon: "contact-icon-4.svg",
                                    text: "Expert support from concept to\npart",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#374151] bg-[#1F2937]">
                                        <Image
                                            src={`/images/310-for-medical-use/${item.icon}`}
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <span className="text-[1rem] font-semibold whitespace-pre-line text-[#1E1E1E] lg:text-[1.125rem]">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/310-for-medical-use/phone-icon.png"
                                    alt="Phone"
                                    width={48}
                                    height={48}
                                    className="shrink-0"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[1.25rem] font-semibold text-black">
                                        Call us now
                                    </span>
                                    <div className="text-[1rem] font-bold text-black">
                                        <a
                                            href="tel:+919840478347"
                                            className="transition-colors hover:text-[#166AAF]"
                                        >
                                            +91 98404 78347
                                        </a>
                                        <span className="mx-2">|</span>
                                        <a
                                            href="tel:+916374406179"
                                            className="transition-colors hover:text-[#166AAF]"
                                        >
                                            +91 63744 10703
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/310-for-medical-use/mail-icon.png"
                                    alt="Email"
                                    width={48}
                                    height={48}
                                    className="shrink-0"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[1.25rem] font-semibold text-black">
                                        Email us
                                    </span>
                                    <div className="text-[1rem] font-bold text-black">
                                        <a
                                            href="mailto:sm@graft3d.com"
                                            className="transition-colors hover:text-[#166AAF]"
                                        >
                                            sm@graft3d.com
                                        </a>
                                        <span className="mx-2">|</span>
                                        <a
                                            href="mailto:sales@graft3d.com"
                                            className="transition-colors hover:text-[#166AAF]"
                                        >
                                            sales@graft3d.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column (Upload Box) */}
                    <div className="flex items-center justify-center lg:col-span-3 lg:justify-end lg:pr-4">
                        <label className="group flex aspect-square w-full max-w-70 cursor-pointer items-center justify-center rounded-xl border border-[#374151] bg-[#166AAF] p-6 shadow-lg transition-all hover:brightness-110 lg:aspect-auto lg:h-87.5">
                            <input
                                type="file"
                                className="hidden"
                                accept=".step,.stl"
                                onChange={handleFileChange}
                            />
                            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#6B7280] bg-[#0A0A0ACC] backdrop-blur-xs transition-colors group-hover:bg-[#0A0A0AE6]">
                                <Upload className="mb-4 h-8 w-8 text-white" />
                                <span className="text-[1rem] font-semibold text-white">
                                    Upload CAD
                                </span>
                                <span className="mt-1 text-[0.875rem] font-normal text-[#6B7280]">
                                    (.STEP / .STL)
                                </span>
                            </div>
                        </label>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="rounded-xl border border-[#1F2937] bg-[#0A0A0A] p-6 shadow-xl lg:col-span-4 lg:p-8">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Name"
                                    className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="requiredMaterial"
                                    placeholder="Required Material"
                                    className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                />
                                <div className="relative">
                                    <select
                                        name="application"
                                        className="w-full cursor-pointer appearance-none rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                                        defaultValue=""
                                    >
                                        <option value="" disabled hidden>
                                            Application
                                        </option>
                                        <option value="medical">Medical</option>
                                        <option value="dental">Dental</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1.5L6 6.5L11 1.5"
                                                stroke="#6B7280"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-white placeholder-[#6B7280] transition-colors focus:border-[#166AAF] focus:outline-none"
                            />

                            <label className="group relative block w-full cursor-pointer">
                                <input
                                    type="file"
                                    name="file"
                                    className="hidden"
                                    accept=".step,.stl"
                                    onChange={handleFileChange}
                                />
                                <div className="flex w-full items-center justify-between rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 transition-colors group-hover:border-[#166AAF]">
                                    <span
                                        className={`truncate ${file ? "text-white" : "text-[#6B7280]"}`}
                                    >
                                        {file ? file.name : "Upload CAD File"}
                                    </span>
                                    <div className="ml-2 shrink-0 rounded-sm bg-[#374151] px-4 py-1.5 text-sm text-white transition-colors group-hover:bg-[#4B5563]">
                                        Choose File
                                    </div>
                                </div>
                            </label>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#166AAF] py-3.5 text-[1.125rem] font-bold text-white transition-colors hover:bg-[#125A9C] disabled:cursor-not-allowed disabled:bg-gray-600"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Get My Application Evaluated"}
                                {!isSubmitting && (
                                    <ArrowRight className="h-5 w-5" />
                                )}
                            </button>

                            {status && (
                                <div
                                    className={`rounded p-2 text-center text-sm ${status.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <p className="mt-2 text-center text-[0.75rem] font-normal text-[#6B7280]">
                                We respect your privacy. Your information is
                                secure.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
