import { Leaf, ShieldCheck, Zap, Heart, Globe, FlaskConical } from "lucide-react";

const WhyUs = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Why Choose HNM</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Commitment to Quality</h1>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto">
            Every decision we make from ingredient sourcing to formulation is guided by our commitment to clean, honest nutrition.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Ingredient Diversity", desc: "Grains, millets, pulses, legumes, rice, seeds and dates, bringing several ingredient families into one carefully developed blend." },
              { icon: ShieldCheck, title: "No Artificial Additives", desc: "No artificial colours, no artificial preservatives, no refined sugar, no synthetic fortification and no nuts." },
              { icon: Zap, title: "Rooted in Tradition", desc: "Inspired by traditional South Indian food knowledge and the ingredients used in family kitchens across generations." },
              { icon: Heart, title: "Made for Modern Mornings", desc: "A convenient powdered format: add 21g to 200ml of hot milk or water, stir and enjoy. Three steps. That's it." },
              { icon: Globe, title: "Built in Wales", desc: "Developed in Wales with support from Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre." },
              { icon: FlaskConical, title: "We Develop Before We Claim", desc: "Full nutrition and allergen details are on every pack. We only say what the finished product can stand behind." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#f5e3b1]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#f5e3b1]/10 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-[#f5e3b1]" />
                </div>
                <h3 className="font-sans font-bold text-white text-[16px] mb-3">{title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-white/10 pt-20">
            <div>
              <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Our Standards</p>
              <h2 className="font-serif text-4xl text-white mb-6">Regulatory Compliance Built In</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-6">
                All HNM products are developed with full awareness of UK and EU food safety regulations, nutritional labelling requirements, and allergen disclosure standards.
              </p>
              <p className="text-white/65 text-[16px] leading-relaxed">
                Our go-to-market planning covers both retail and airline catering segments, ensuring products meet the specific compliance requirements of each channel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "UK Food Safety", value: "Built In" },
                { label: "Clean Label", value: "Verified" },
                { label: "Allergen Info", value: "On Pack" },
                { label: "Nutritional Labels", value: "On Pack" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-[#f5e3b1] font-bold text-[18px] mb-1">{value}</p>
                  <p className="text-white/50 text-[13px]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
