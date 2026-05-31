import { Leaf, ShieldCheck, Zap, CheckCircle } from "lucide-react";

const Products = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Our Products</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6">Clean-Label Breakfast Cereals</h1>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto">
            A new line of naturally sourced, additive-free cereals designed for the UK market — nutritious, culturally inspired, and loved by families.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-24">
            <div className="relative order-2 lg:order-1 flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hnm-cereal-box-photo.png" alt="HNM Organic Millet Cereal Box" className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-3 py-1.5 mb-6">
                <Leaf size={12} className="text-[#f5e3b1]" />
                <span className="text-[#f5e3b1] text-[11px] font-semibold tracking-[1px] uppercase">Flagship Product</span>
              </div>
              <h2 className="font-serif text-4xl text-white mb-4">Organic Millet Cereal</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-8">
                Our hero product — a wholesome breakfast cereal made from premium organic millet grains. Developed using naturally sourced, additive-free ingredients to meet modern nutritional standards while delivering great taste.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "100% organic millet",
                  "No artificial additives",
                  "No preservatives",
                  "High in plant protein",
                  "Rich in B vitamins",
                  "Rich in iron & minerals",
                  "Gluten-conscious",
                  "Family friendly",
                ].map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-white/70 text-[13.5px]">
                    <CheckCircle size={14} className="text-[#f5e3b1] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                  <p className="text-[#f5e3b1] font-bold text-xl">4.9★</p>
                  <p className="text-white/50 text-[12px]">Rating</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                  <p className="text-[#f5e3b1] font-bold text-xl">UK</p>
                  <p className="text-white/50 text-[12px]">Market</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                  <p className="text-[#f5e3b1] font-bold text-xl">Clean</p>
                  <p className="text-white/50 text-[12px]">Label</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16">
            <h3 className="font-serif text-3xl text-white text-center mb-12">Nutritional Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "High Protein", desc: "Each serving delivers substantial plant-based protein to power your morning and keep you energised throughout the day." },
                { icon: Leaf, title: "Natural Ingredients", desc: "Sourced from certified organic farms. No fillers, no artificial colours, no synthetic preservatives — just real food." },
                { icon: ShieldCheck, title: "Regulatory Compliant", desc: "Formulated to meet UK and EU food safety and nutritional labelling standards for retail and airline catering." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-[#f5e3b1]/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#f5e3b1]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#f5e3b1]" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-[15px] mb-2">{title}</h4>
                  <p className="text-white/55 text-[13.5px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-[#f5e3b1]/5 border border-[#f5e3b1]/15 rounded-2xl px-8 py-10 text-center">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">In Development</p>
            <h3 className="font-serif text-3xl text-white mb-4">Expanding Our Breakfast Range</h3>
            <p className="text-white/60 max-w-[500px] mx-auto text-[15px]">
              We're developing new culturally inspired convenience foods for both retail and airline catering segments. Stay tuned for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
