import { Leaf, ShieldCheck, Zap, Heart, Globe, FlaskConical } from "lucide-react";

const WhyUs = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-24 px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Why Choose HNM</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Commitment to Quality</h1>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto">
            Every decision we make — from ingredient sourcing to formulation — is guided by our commitment to clean, honest nutrition.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Natural & Organic", desc: "We source only naturally derived ingredients from trusted organic farms. No synthetic inputs, no shortcuts." },
              { icon: ShieldCheck, title: "No Preservatives", desc: "Our formulations are entirely free from synthetic preservatives, artificial colours, and chemical additives." },
              { icon: Zap, title: "High in Protein", desc: "Nutrient-dense formulations designed to deliver sustained energy and real nutritional value every morning." },
              { icon: Heart, title: "Family Focused", desc: "Created with every member of the family in mind — from young children to adults, our cereals are safe and delicious for all." },
              { icon: Globe, title: "Culturally Inspired", desc: "Drawing on global culinary traditions to create breakfast experiences that are both nutritious and culturally meaningful." },
              { icon: FlaskConical, title: "R&D Driven", desc: "Backed by rigorous product development and retail market research to meet evolving UK consumer preferences." },
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
                { label: "UK Food Safety", value: "Compliant" },
                { label: "Clean Label", value: "Certified" },
                { label: "Allergen Info", value: "Full Disclosure" },
                { label: "Nutritional Labels", value: "EU Standards" },
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
