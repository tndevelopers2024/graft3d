import Image from "next/image";
import { Phone, Mail, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  return (
    <section
      className="w-full py-12 lg:py-20 bg-cover bg-repeat"
      style={{
        backgroundImage: "url('/images/polycarbonate-pc/Frame-186381.png')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Polycarbonate <span className="text-[#3E3E3E]">(PC)</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 mt-6">
            <Button asChild className="rounded-full px-6 py-5">
              <a
                href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09"
              >
                <Video className="w-4 h-4 mr-2" />
                Meet Us Live Online
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full px-6 py-5 bg-white text-primary border border-primary hover:bg-blue-50"
            >
              <a href="/get-quote">
                Get a Quote Now
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-primary font-bold text-base">Call us now</p>
                <p className="text-gray-700 text-sm font-medium">
                  <a href="tel:+916374410703" className="hover:underline">
                    +91 63744 10703
                  </a>{" "}
                  |{" "}
                  <a href="tel:+919840478347" className="hover:underline">
                    +91 98404 78347
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-primary font-bold text-base">Email Us at</p>
                <a
                  href="mailto:sales@graft3d.com"
                  className="text-gray-700 text-sm font-medium hover:underline"
                >
                  sales@graft3d.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
          <Image
            src="/images/polycarbonate-pc/PC_highres-5733_with_shadow-copy.png"
            alt="Polycarbonate PC"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
