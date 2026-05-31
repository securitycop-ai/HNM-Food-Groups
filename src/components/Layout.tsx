import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Facebook, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, languages } from "@/context/LanguageContext";
import LegalModal, { type LegalPage } from "./LegalModal";
import CookieBanner from "./CookieBanner";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_home"),     path: "/" },
    { name: t("nav_products"), path: "/products" },
    { name: t("nav_whyus"),    path: "/why-us" },
    { name: t("nav_about"),    path: "/about" },
    { name: t("nav_blog"),     path: "/blog" },
    { name: t("nav_media"),    path: "/media" },
    { name: t("nav_contact"),  path: "/contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#1a0800]/95 backdrop-blur-md border-[#5a3010]/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-0"
          : "bg-transparent border-transparent py-2"
      )}>
        <div className="max-w-[1240px] mx-auto px-6 h-[76px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <img src="/hnm-logo.svg" alt="HNM Food Groups" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={cn("px-3 py-2 text-[12px] font-semibold tracking-[0.6px] uppercase transition-colors whitespace-nowrap rounded",
                  location.pathname === link.path ? "text-[#f5e3b1]" : "text-white/80 hover:text-[#f5e3b1]"
                )}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden xl:block relative flex-shrink-0">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-[#f5e3b1]/30 rounded-lg px-3 py-2 text-[13px] text-white/80 transition-colors"
            >
              <span className="text-[16px]">{current.flag}</span>
              <span className="font-semibold text-[11px] tracking-wide">{current.nativeLabel}</span>
              <ChevronDown size={12} className={cn("transition-transform", langOpen && "rotate-180")} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#1a0800] border border-[#f5e3b1]/15 rounded-xl shadow-2xl overflow-hidden z-[300] min-w-[140px]">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={cn("w-full flex items-center gap-3 px-4 py-3 text-[13px] hover:bg-white/5 transition-colors text-left",
                      lang === l.code ? "text-[#f5e3b1] bg-white/5" : "text-white/70"
                    )}>
                    <span className="text-[18px]">{l.flag}</span>
                    <span className="font-semibold">{l.nativeLabel}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="xl:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "transform rotate-45 translate-y-[6.5px]")}></span>
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "opacity-0")}></span>
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "transform -rotate-45 -translate-y-[6.5px]")}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[76px] bg-[#1a0800]/98 backdrop-blur-xl z-[199] flex flex-col px-8 py-8 overflow-y-auto transition-opacity duration-300 xl:hidden border-t border-white/10",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} onClick={closeMenu}
            className={cn("py-4 text-[15px] font-semibold tracking-[0.5px] uppercase border-b border-white/10",
              location.pathname === link.path ? "text-[#f5e3b1]" : "text-white/90"
            )}>
            {link.name}
          </Link>
        ))}
        {/* Mobile Language switcher */}
        <div className="pt-6">
          <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-3">Language</p>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((l) => (
              <button key={l.code} onClick={() => { setLang(l.code); closeMenu(); }}
                className={cn("flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors text-[13px] font-semibold",
                  lang === l.code ? "border-[#f5e3b1]/40 text-[#f5e3b1] bg-[#f5e3b1]/5" : "border-white/10 text-white/70 hover:border-white/20"
                )}>
                <span className="text-[18px]">{l.flag}</span> {l.nativeLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [legalPage, setLegalPage] = useState<LegalPage>(null);

  return (
    <>
      <footer className="bg-[#140600]/95 backdrop-blur-xl text-white/45 pt-12 sm:pt-20 px-4 sm:px-8 pb-0">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          {/* Brand */}
          <div>
            <Link to="/"><img src="/hnm-logo.svg" alt="HNM Food Groups" className="h-14 w-auto opacity-80 mb-5" /></Link>
            <p className="text-[14px] leading-[1.8] text-white/60 max-w-[280px]">{t("footer_tagline")}</p>
            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#f5e3b1] mb-3">{t("follow_us")}</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/hnm-food-groups/" target="_blank" rel="noreferrer" title="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-colors group">
                  <Linkedin size={16} className="text-white/50 group-hover:text-[#0077b5] transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/hnm-food-groups/" target="_blank" rel="noreferrer" title="Instagram">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/40 transition-colors group cursor-pointer">
                    <Instagram size={16} className="text-white/50 group-hover:text-pink-400 transition-colors" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/hnm-food-groups/" target="_blank" rel="noreferrer" title="X / Twitter">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors group cursor-pointer">
                    <Twitter size={16} className="text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/hnm-food-groups/" target="_blank" rel="noreferrer" title="Facebook">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877f2]/20 hover:border-[#1877f2]/40 transition-colors group cursor-pointer">
                    <Facebook size={16} className="text-white/50 group-hover:text-[#1877f2] transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_products")}</h5>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Multi Grain Cereal</Link></li>
              <li><Link to="/products" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Breakfast Range</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_company")}</h5>
            <ul className="space-y-3">
              <li><Link to="/about"   className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">About Us</Link></li>
              <li><Link to="/why-us"  className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Why Choose Us</Link></li>
              <li><Link to="/blog"    className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Blog</Link></li>
              <li><Link to="/media"   className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Media</Link></li>
              <li><Link to="/contact" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_contact")}</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-white/40 shrink-0 mt-0.5" />
                <a href="tel:+447393066783" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">+44 7393 066783</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-white/40 shrink-0 mt-0.5" />
                <a href="mailto:harsh@hnmfoodgroup.com" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors break-all">harsh@hnmfoodgroup.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-white/40 shrink-0 mt-0.5" />
                <span className="text-[14px] text-white/60">14 Museum Place, Cardiff, Wales, CF10 3BH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-launch disclaimer */}
        <div className="max-w-[1240px] mx-auto mt-10 sm:mt-16 border-t border-white/10 pt-8">
          <p className="text-[12px] text-white/30 leading-relaxed text-center max-w-[800px] mx-auto">
            <strong className="text-white/40">Pre-launch notice:</strong> HNM Food Group Ltd is a pre-launch food company. All product descriptions, nutritional claims, and formulation details reflect current development targets and are subject to change. Organic certification, nutritional analysis, and full regulatory compliance documentation are in progress. Final products may differ from descriptions shown.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1240px] mx-auto mt-6 border-t border-white/10 py-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[13px] text-white/40">{t("footer_copyright")}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {([
              ["privacy",     "Privacy Policy"],
              ["terms",       "Terms of Service"],
              ["food-safety", "Food Safety & Regulations"],
              ["allergens",   "Allergen Information"],
            ] as [LegalPage, string][]).map(([key, label]) => (
              <button key={key} onClick={() => setLegalPage(key)}
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col font-sans text-white overflow-x-hidden relative z-0">
    <div className="fixed inset-0 z-[-1]" style={{ background: "radial-gradient(ellipse at 20% 50%, #4a2200 0%, #2c1200 40%, #1a0800 100%)" }} />
    <Header />
    <main className="flex-grow z-10">{children}</main>
    <Footer />
    <CookieBanner />
  </div>
);
