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
            Founded on the belief that everyone deserves access to pure, natural nutrition no compromises.
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
                <div className="w-72 md:w-80 rounded-2xl overflow-hidden border border-[#f5e3b1]/20 shadow-2xl">
                  <img
                    src="/images/harsh-founder-paris.jpg"
                    alt="Harsh Sanmukh, Founder of HNM Food Group"
                    className="w-full h-auto object-cover"
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
              <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">A Message from Our Founder</p>
              <h2 className="font-serif text-3xl text-white mb-6">Harsh Sanmukh</h2>
              <div className="space-y-5 text-white/65 text-[16px] leading-relaxed">
                <p>
                  I often sat with my grandmother and mother, watching them prepare wholesome meals using simple
                  grains, millets and pulses. Their kitchen was filled with real ingredients, warm aromas and stories
                  of tradition and care. Those everyday conversations made me realise how food brings people closer.
                </p>
                <p>
                  Inspired by their knowledge, I began experimenting in my own kitchen, bringing those time-honoured
                  ingredients together in a modern, convenient form for today's busy life. Today, Gyda Gofal, Welsh
                  for "with care", is the result of that journey: real ingredients, prepared with the same values my
                  family taught me.
                </p>
                <p className="text-[#f5e3b1] italic font-medium">
                  "Simple conversations. Real change."
                </p>
                <p>
                  <strong className="text-white">
                    From my family's kitchen to yours, this is where our journey begins.
                  </strong>
                </p>
              </div>
              <p className="text-white/50 text-[14px] mt-6 italic">— Harsh Sanmukh, Founder, HNM Food Group Ltd</p>
            </div>
          </div>

          {/* Friends / The Name */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <h3 className="font-serif text-3xl text-white mb-5">Why the Name HNM?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-white/65 text-[16px] leading-relaxed">
                <p>
                  HNM stands for Harsh, Naveen and Muni, three friends whose conversations about food, tradition and
                  the opportunity to do something meaningful were the original spark for this company.
                </p>
                <p>
                  The name is a reminder of where we began: not in a boardroom, but in simple, honest conversations
                  about making something worth caring about.
                </p>
              </div>
              <figure>
                <img
                  src="/images/hnm-friends.jpg"
                  alt="Harish, Naveen and Muni, the people behind HNM Food Group"
                  className="w-full rounded-xl shadow-xl border border-white/10"
                />
                <figcaption className="text-white/35 text-[12px] mt-2 text-center italic">Harish, Naveen and Muni</figcaption>
              </figure>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl text-white mb-3">Our Mission</h4>
              <p className="text-white/60 leading-relaxed">
                To bring food traditions rooted in generations of knowledge into modern kitchens, through thoughtfully
                developed products that are honest about what they are and how they are made.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h4 className="font-serif text-2xl text-white mb-3">Our Vision</h4>
              <p className="text-white/60 leading-relaxed">
                To build a food company in Wales that takes tradition seriously and translates it into products people
                can trust, whatever their background or morning routine.
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
                  { label: "Company No.", value: "17007002 · Registered in England and Wales" },
                  { label: "Registered Office", value: "Welsh ICE, Tŷ Merlin, Caerphilly Business Park, Van Road, Caerphilly CF83 3GS" },
                  { label: "First Product", value: "Gyda Gofal · 315g Powdered Breakfast Blend" },
                  { label: "Markets", value: "Retail & Airline Catering" },
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
              Experience the difference that pure, natural nutrition can make in your family's life. From our family
              to yours, we're committed to bringing you the very best in healthy, delicious food products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
                Register Interest <ArrowRight size={16} />
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
