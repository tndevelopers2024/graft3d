"use client";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const AcademicLicensing = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        city: "",
        industry: "",
        existingBusiness: "",
        productCategory: "",
        budgetRange: "",
        phone: "",
        email: "",
    });

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/extended-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    company: formData.company,
                    industry: formData.industry,
                    existingBusiness: formData.existingBusiness,
                    productCategory: formData.productCategory,
                    budgetRange: formData.budgetRange,
                    subject: "Elucis Next - Academic Licensing Request",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    company: "",
                    city: "",
                    industry: "",
                    existingBusiness: "",
                    productCategory: "",
                    budgetRange: "",
                    phone: "",
                    email: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to send request.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("An error occurred while sending the request.");
        }
    };

    return (
        <section
            className="py-12 bg-linear-to-r from-[#0e3350] to-[#1f71b5] relative overflow-hidden"
            id="academic-licensing"
        >
            <div className="relative z-10 max-w-450 mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Academic Licensing Program
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Flexible licensing for institutions",
                                "Real-world academic access",
                                "Training and onboarding support",
                                "Priority academic support",
                                "Collaborative research partnerships",
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-4 text-lg font-medium"
                                >
                                    <CheckCircle2 className="w-6 h-6 " />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Form Card */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Company Name"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="City"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Industry/Business Type"
                                />
                                <input
                                    type="text"
                                    name="existingBusiness"
                                    value={formData.existingBusiness}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Existing business/services"
                                />
                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="productCategory"
                                    value={formData.productCategory}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Interested Product Category"
                                />
                                <input
                                    type="text"
                                    name="budgetRange"
                                    value={formData.budgetRange}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Investment Budget Range"
                                />
                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Phone Number"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-white border border-white focus:ring-2 focus:ring-[#60bfff] outline-none transition-all"
                                    placeholder="Email Address"
                                />
                            </div>

                            {status === "success" && (
                                <div className="text-green-300 font-medium text-center mt-2">
                                    Request submitted successfully! We&apos;ll
                                    get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="text-red-300 font-medium text-center mt-2">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-[#166AAF] text-white font-bold py-4 rounded-md shadow-lg hover:bg-white hover:text-[#166AAF] transition-colors text-lg mt-4 disabled:opacity-70 flex justify-center items-center"
                            >
                                {status === "loading"
                                    ? "Submitting..."
                                    : "Book Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicLicensing;
