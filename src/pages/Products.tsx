import { Leaf, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Our Product</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-4">Gyda Gofal</h1>
          <p className="text-[#f5e3b1]/70 font-serif italic text-xl mb-6">With Care &mdash; Welsh for the way we make it.</p>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto mb-6">
            A 315g powdered breakfast blend developed in Wales, rooted in South Indian food traditions and made for modern mornings.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-4 py-2">
            <MapPin size={13} className="text-[#f5e3b1]" />
            <span className="text-[#f5e3b1] text-[12px] font-semibold tracking-[1px]">Crafted in Wales · United Kingdom</span>
          </div>
        </div>
      </section>

      {/* Pack + Details */}
      <section className="py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20">
            {/* Pack image */}
            <div className="flex items-center justify-center order-1">
              <img
                src="/images/gyda-gofal-pack-front.jpg"
                alt="Gyda Gofal by HNM Food Group 315g pack"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-2">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-3 py-1.5">
                  <Leaf size={11} className="text-[#f5e3b1]" />
                  <span className="text-[#f5e3b1] text-[11px] font-semibold tracking-[1px] uppercase">Flagship Product</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-3 py-1.5">
                  <MapPin size={11} className="text-[#f5e3b1]" />
                  <span className="text-[#f5e3b1] text-[11px] font-semibold tracking-[1px] uppercase">Made with Dates Powder</span>
                </div>
              </div>

              <h2 className="font-serif text-4xl text-white mb-2">Gyda Gofal</h2>
              <p className="text-[#f5e3b1]/70 font-serif italic text-lg mb-6">With Care · Made with Dates Powder</p>

              <p className="text-white/65 text-[16px] leading-relaxed mb-8">
                A thoughtfully developed combination of grains, millets, pulses, legumes, rice, seeds and dates. Each ingredient brings its own character, carefully balanced so they work together in one convenient breakfast blend. Add, stir, enjoy.
              </p>

              {/* How to enjoy */}
              <div className="bg-white/5 border border-[#f5e3b1]/20 rounded-xl p-6 mb-8">
                <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase mb-3">How to Enjoy</p>
                <p className="text-white/80 text-[15px]">
                  Add <strong className="text-white">21g</strong> of Gyda Gofal to a cup, pour in <strong className="text-white">200ml</strong> of hot milk or hot water, stir well and enjoy.
                </p>
              </div>

              {/* Product claims */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "No artificial colours",
                  "No artificial preservatives",
                  "No refined sugar",
                  "No synthetic fortification",
                  "No nuts",
                  "315g pouch",
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-white/65 text-[13px]">
                    <ShieldCheck size={12} className="text-[#f5e3b1] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-6 py-3 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
                Register Interest <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Pack front and back */}
          <div className="border-t border-white/10 pt-16 mb-16">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-6 text-center">The Pack</p>
            <img
              src="/images/gyda-gofal-pack.jpg"
              alt="Gyda Gofal pack front and back showing ingredients and story"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl block"
            />
          </div>

          {/* Ingredients */}
          <div className="border-t border-white/10 pt-16 mb-16">
            <div className="max-w-[800px] mx-auto">
              <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4 text-center">Ingredients</p>
              <h2 className="font-serif text-3xl text-white text-center mb-8">Five Ingredient Families. One Blend.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { family: "Grains", items: "White sorghum, maize (corn), emmer wheat, pearl millet, black rice, barley" },
                  { family: "Pulses & Legumes", items: "Green gram, black gram, black chickpeas, roasted Bengal gram, soybean" },
                  { family: "Rice", items: "Rice" },
                  { family: "Seeds & Spice", items: "Cardamom" },
                  { family: "Dates", items: "Dates powder" },
                ].map(({ family, items }) => (
                  <div key={family} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[1.5px] uppercase mb-2">{family}</p>
                    <p className="text-white/60 text-[13px] leading-relaxed">{items}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/15 rounded-xl p-5 text-[14px] text-white/55 leading-relaxed">
                <strong className="text-white/80">Allergy advice:</strong> For allergens, including cereals containing gluten, see ingredients in <strong className="text-white/80">bold</strong>. Contains cereals containing gluten (<strong className="text-white/80">wheat, barley</strong>) and <strong className="text-white/80">soya</strong>.
              </div>
            </div>
          </div>

          {/* Ingredient bowl photo */}
          <div className="border-t border-white/10 pt-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img
                src="/images/hero-bowl.jpg"
                alt="Bowl of Gyda Gofal powdered breakfast blend with dates and grains"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div>
                <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Our Development Standard</p>
                <h2 className="font-serif text-3xl text-white mb-6">We Develop Before We Claim.</h2>
                <div className="space-y-4 text-white/65 text-[15px] leading-relaxed">
                  <p>
                    We want the finished product to speak through evidence, not exaggerated marketing language. That is why we only say what the finished product can stand behind.
                  </p>
                  <p>
                    HNM's development work covers ingredient selection, formulation, processing, milling, blending, preparation performance, sensory characteristics, food safety, allergen management, packaging, shelf-life and commercial manufacturing.
                  </p>
                  <p>
                    We worked with Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre for specialist food-development support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#f5e3b1]/5 border border-[#f5e3b1]/15 rounded-2xl px-8 py-12 text-center">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">Launching Q4 2026</p>
            <h3 className="font-serif text-3xl text-white mb-4">Be First to Know When Gyda Gofal Is Available.</h3>
            <p className="text-white/60 max-w-[500px] mx-auto text-[15px] mb-8">
              Register your interest now and we'll be in touch as soon as Gyda Gofal is ready to order.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-6 py-3 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
              Register Interest <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
