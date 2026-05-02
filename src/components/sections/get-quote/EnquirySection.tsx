import { FileSignature } from "lucide-react";
import GetQuoteForm from "@/components/sections/get-quote/GetQuoteForm";

const EnquirySection = () => {
  return (
    <section className="w-full bg-[#F2F9FF] py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex flex-col items-center gap-3 text-[#345C7E]">
            <FileSignature className="w-8 h-8" />
            <h2 className="text-2xl font-semibold">Enquire Now</h2>
          </div>
          <p className="mt-4 text-[#345C7E] font-black">
            <span className="hidden md:inline">
              For any information please Call us at +91 98404 78347 | +91 63744 10703
            </span>
            <span className="md:hidden">
              For any information please Call us at
              <br />
              +91 98404 78347 | +91 63744 10703
            </span>
          </p>
        </div>

        <div className="max-w-[760px] mx-auto">
          <GetQuoteForm />
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
