import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">About Us</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">About HNM Food Groups</h1>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto">
            Founded on the belief that everyone deserves access to pure, organic nutrition no compromises.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f5e3b1]/20 shadow-2xl">
                  <img
                    src="/images/harsh-sanmukh-new.jpeg"
                    alt="Harsh Sanmukh, Founder & CEO of HNM Food Groups"
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/harsh-sanmukh-167b86292"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-full text-[13px] font-semibold shadow-lg hover:bg-[#005885] transition-colors whitespace-nowrap"
                >
                  <Linkedin size={14} /> Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">A Message from Our Founder & CEO</p>
              <h2 className="font-serif text-3xl text-white mb-6">Harsh Sanmukh</h2>
              <div className="space-y-5 text-white/65 text-[16px] leading-relaxed">
                <p>
                  "My journey with HNM Food Group began from a deep concern about the state of food in our markets
                  today. I was troubled by the abundance of unhealthy products filled with preservatives, artificial
                  agents to improve shelf life, synthetic colours, and artificial flavours designed to enhance taste
                  at the cost of our health."
                </p>
                <p className="text-[#f5e3b1] italic font-medium">
                  "Food is a basic necessity of human life. No matter how much money you earn, if you don't eat
                  good food, all of it is waste."
                </p>
                <p>
                  This led me to a simple but profound realisation:{" "}
                  <strong className="text-white">
                    'Eat good food to stay healthy, or else you will end up eating medicine like food to stay healthy.'
                  </strong>{" "}
                  This philosophy became the bedrock of HNM Food Groups.
                </p>
              </div>
              <p className="text-right text-white/50 text-[14px] mt-6 italic">: Harsh Sanmukh, Founder & CEO</p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <h3 className="font-serif text-3xl text-white mb-5">Our Promise</h3>
            <div className="space-y-4 text-white/65 text-[16px] leading-relaxed">
              <p>
                Every product we create must pass one simple test:{" "}
                <em className="text-[#f5e3b1] font-semibold">"Would I give this to my own family?"</em>{" "}
                If the answer is not a resounding yes, it doesn't leave our kitchen. This personal standard
                ensures that every item bearing the HNM Food Groups name meets the highest standards of quality and purity.
              </p>
              <p>
                My vision is ambitious yet simple:{" "}
                <strong className="text-[#f5e3b1]">
                  My aspiration is to create products so pure and wholesome that the whole family can enjoy them with confidence.
                </strong>{" "}
                This means no harmful preservatives, no artificial colours, no synthetic flavours just 100% organic
                goodness that nature intended.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl text-white mb-3">Our Mission</h4>
              <p className="text-white/60 leading-relaxed">
                To provide families with access to pure, organic, and nutritious food products that support healthy
                living without compromising on taste or convenience.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl text-white mb-3">Our Vision</h4>
              <p className="text-white/60 leading-relaxed">
                To become the leading provider of organic food products in the UK, setting new standards for quality,
                health, and sustainability in the food industry.
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Who We Are</p>
                <h2 className="font-serif text-4xl text-white mb-6">HNM Food Group Ltd</h2>
                <p className="text-white/65 text-[16px] leading-relaxed mb-5">
                  HNM Food Groups is a UK-based food innovation company focused on product R&D for a new line of
                  clean-label breakfast cereals and culturally inspired convenience foods.
                </p>
                <p className="text-white/65 text-[16px] leading-relaxed mb-5">
                  Our formulations are developed using naturally sourced, additive-free ingredients crafted to meet
                  modern nutritional standards and evolving consumer preferences across the UK market.
                </p>
                <p className="text-white/65 text-[16px] leading-relaxed mb-8">
                  Our work spans product development, retail market research, regulatory compliance, and early-stage
                  go-to-market planning for both retail and airline catering segments.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold text-[13px] tracking-[0.5px] uppercase hover:gap-3 transition-all">
                  Get in Touch <ArrowRight size={15} />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Registered Name", value: "HNM Food Group Ltd" },
                  { label: "Registered Office", value: "14 Museum Place, Cardiff, Wales, CF10 3BH" },
                  { label: "Focus", value: "Clean-Label Breakfast Cereals" },
                  { label: "Markets", value: "Retail & Airline Catering" },
                  { label: "Standards", value: "UK & EU Standards (Pending)" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
                    <p className="text-white/40 text-[11px] font-semibold tracking-wide uppercase mb-1">{label}</p>
                    <p className="text-white font-semibold text-[14px]">{value}</p>
                  </div>
                ))}
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/17007002"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#f5e3b1]/60 hover:text-[#f5e3b1] text-[12px] transition-colors mt-2"
                >
                  View on Companies House ↗
                </a>
              </div>
            </div>
          </div>

          {/* Join Our Journey */}
          <div className="mt-16 bg-[#f5e3b1]/5 border border-[#f5e3b1]/15 rounded-2xl px-8 py-12 text-center">
            <h3 className="font-serif text-3xl text-white mb-4">Join Our Journey</h3>
            <p className="text-white/60 max-w-[520px] mx-auto text-[15px] mb-8">
              Experience the difference that pure, organic nutrition can make in your family's life. From our family
              to yours, we're committed to bringing you the very best in healthy, delicious food products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
                Shop Our Products <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/company/hnm-food-groups/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#0077b5]/60 text-white px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-colors"
              >
                <Linkedin size={16} /> Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
