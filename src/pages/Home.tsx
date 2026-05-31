import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, Zap, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="min-h-[92vh] flex items-center justify-center px-8 relative overflow-hidden">
        {/* Background video — muted, looping, no audio */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hnm-brand-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-[#1a0800]/75" />
        </div>
        <div className="max-w-[1240px] mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-4 py-2 mb-8">
            <Leaf size={14} className="text-[#f5e3b1]" />
            <span className="text-[#f5e3b1] text-[12px] font-semibold tracking-[1.5px] uppercase">{t("hero_badge")}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t("hero_title1")}<br />
            <span className="text-[#f5e3b1]">{t("hero_title2")}</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-[580px] mx-auto mb-10 leading-relaxed">
            {t("hero_sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
              {t("hero_cta1")} <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 border border-[#f5e3b1]/40 text-[#f5e3b1] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:border-[#f5e3b1] transition-colors">
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">{t("why_label")}</p>
            <h2 className="font-serif text-4xl text-white">{t("why_heading")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf,       tk: "feat1" },
              { icon: ShieldCheck, tk: "feat2" },
              { icon: Zap,        tk: "feat3" },
              { icon: Heart,      tk: "feat4" },
            ].map(({ icon: Icon, tk }) => (
              <div key={tk} className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-[#f5e3b1]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#f5e3b1]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#f5e3b1]" />
                </div>
                <h3 className="font-sans font-bold text-white text-[15px] mb-2">{t(`${tk}_title`)}</h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed">{t(`${tk}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">{t("product_label")}</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">{t("product_heading")}</h2>
              <p className="text-white/65 text-[16px] leading-relaxed mb-6">{t("product_desc")}</p>
              <ul className="space-y-3 mb-8">
                {["100% organic millet grains","No added sugar or artificial sweeteners","Gluten-conscious formulation","Rich in B vitamins and iron","Suitable for the whole family"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5e3b1] shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold text-[13px] tracking-[0.5px] uppercase hover:gap-3 transition-all">
                {t("product_view")} <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-[#f5e3b1]/5 border border-[#f5e3b1]/10 flex items-center justify-center">
                <img src="/images/hnm-cereal-pack.svg" alt="HNM Organic Millet Cereal" className="w-full h-full object-contain p-6" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#f5e3b1] text-[#1a0800] rounded-xl px-5 py-4 shadow-xl">
                <p className="font-bold text-[22px] leading-none">4.9</p>
                <p className="text-[11px] font-semibold tracking-wide">★★★★★</p>
                <p className="text-[11px] mt-1 opacity-70">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="font-serif text-4xl text-white mb-6">{t("cta_heading")}</h2>
          <p className="text-white/60 text-lg max-w-[480px] mx-auto mb-10">{t("cta_sub")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-10 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
            {t("cta_btn")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
