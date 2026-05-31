import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, Zap, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hnm-brand-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1a0800]/70" />
        </div>
        <div className="max-w-[1240px] mx-auto text-center z-10 pt-[76px] px-4">
          <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
            <Leaf size={12} className="text-[#f5e3b1] shrink-0" />
            <span className="text-[#f5e3b1] text-[10px] sm:text-[12px] font-semibold tracking-[1px] sm:tracking-[1.5px] uppercase">{t("hero_badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            {t("hero_title1")}<br />
            <span className="text-[#f5e3b1]">{t("hero_title2")}</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-[560px] mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            {t("hero_sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-[12px] sm:text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
              {t("hero_cta1")} <ArrowRight size={15} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 border border-[#f5e3b1]/40 text-[#f5e3b1] px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-[12px] sm:text-[13px] tracking-[0.8px] uppercase hover:border-[#f5e3b1] transition-colors">
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#f5e3b1] text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase mb-3">{t("why_label")}</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">{t("why_heading")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Leaf,        tk: "feat1" },
              { icon: ShieldCheck, tk: "feat2" },
              { icon: Zap,         tk: "feat3" },
              { icon: Heart,       tk: "feat4" },
            ].map(({ icon: Icon, tk }) => (
              <div key={tk} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-7 hover:border-[#f5e3b1]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#f5e3b1]/10 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon size={20} className="text-[#f5e3b1]" />
                </div>
                <h3 className="font-sans font-bold text-white text-[14px] sm:text-[15px] mb-2">{t(`${tk}_title`)}</h3>
                <p className="text-white/55 text-[13px] sm:text-[13.5px] leading-relaxed">{t(`${tk}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flagship Product ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Product image — Coming Soon masked */}
            <div className="relative flex items-center justify-center order-1 lg:order-1">
              <div className="w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-[#f5e3b1]/5 border border-[#f5e3b1]/10 shadow-2xl relative">
                <img
                  src="/images/hnm-cereal-box.svg"
                  alt="HNM Millet Cereal — Coming Soon"
                  className="w-full h-auto object-contain p-4 blur-sm opacity-60"
                />
                {/* Coming Soon overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a0800]/50 backdrop-blur-[2px]">
                  <p className="text-[#f5e3b1] text-[10px] font-bold tracking-[2.5px] uppercase mb-2">Coming Soon</p>
                  <p className="font-serif text-2xl sm:text-3xl text-white font-bold">Q4 2026</p>
                  <p className="text-white/50 text-[12px] mt-2">Product in Development</p>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="order-2 lg:order-2">
              <p className="text-[#f5e3b1] text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase mb-3 sm:mb-4">{t("product_label")}</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">{t("product_heading")}</h2>
              <p className="text-white/65 text-[15px] sm:text-[16px] leading-relaxed mb-5 sm:mb-6">{t("product_desc")}</p>
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {["Millet grains from organic farms (certification pending)","No added sugar in target formulation","Naturally millet-based (not tested for gluten)","Target formulation contains B vitamins and iron","Suitable for adults and children over 12 months"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-[13px] sm:text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5e3b1] shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold text-[12px] sm:text-[13px] tracking-[0.5px] uppercase hover:gap-3 transition-all">
                {t("product_view")} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4 sm:mb-6">{t("cta_heading")}</h2>
          <p className="text-white/60 text-base sm:text-lg max-w-[480px] mx-auto mb-8 sm:mb-10 px-4">{t("cta_sub")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 sm:px-10 py-3.5 sm:py-4 rounded font-bold text-[12px] sm:text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
            {t("cta_btn")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
