import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
    return (
        <section className="w-full bg-gradient-to-b from-secondary to-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Error 404
                </p>
                <h1 className="mt-3 text-7xl sm:text-8xl lg:text-[140px] font-extrabold leading-none text-primary">
                    404
                </h1>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E]">
                    Page Not Found
                </h2>
                <p className="mt-4 max-w-xl text-[#434655] text-base lg:text-lg leading-relaxed">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been
                    moved. Let&apos;s get you back on track.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-white font-semibold shadow-sm hover:bg-primary/90 transition-colors"
                    >
                        <Home className="w-5 h-5" /> Back to Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[#1E1E1E] font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <Phone className="w-5 h-5" /> Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
