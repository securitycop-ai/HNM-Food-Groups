import { X, Shield, FileText, AlertTriangle, Scale, Clock } from "lucide-react";
import React from "react";

export type LegalPage = "privacy" | "terms" | "food-safety" | "allergens" | null;

const CONTACT = {
  email: "harsh@hnmfoodgroup.com",
  phone: "+44 7393 066783",
  address: "14 Museum Place, Cardiff, Wales, CF10 3BH",
  company: "HNM Food Group Ltd",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-2">
    <h3 className="font-bold text-white text-[15px]">{title}</h3>
    <div className="text-white/65 text-[13.5px] leading-relaxed space-y-2">{children}</div>
  </section>
);

const Privacy = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <Shield size={22} className="text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">Privacy Policy</h2>
    </div>
    <p className="text-white/45 text-[12px] uppercase tracking-wide">Last updated: June 2026</p>

    <div className="space-y-5 text-[13.5px] leading-relaxed">
      <Section title="1. Who We Are">
        <p><strong className="text-white/90">{CONTACT.company}</strong> is the data controller for any personal information processed in connection with this website.</p>
        <p>Registered office: {CONTACT.address}</p>
        <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a> &nbsp;|&nbsp; Phone: {CONTACT.phone}</p>
      </Section>

      <Section title="2. What Data We Collect and How">
        <p>This website <strong className="text-white/90">does not collect any data through forms, databases, or tracking systems.</strong></p>
        <p>The only way we receive personal information is when you choose to contact us directly by email at {CONTACT.email}. In that case, we receive whatever information you include in your message, typically your name and email address.</p>
        <p>We do not use Google Analytics, advertising pixels, voice agents, or any third-party tracking scripts. No third-party data-collection widgets are embedded on this site.</p>
      </Section>

      <Section title="3. Cookies">
        <p>This site uses only a single essential cookie to remember your cookie consent preference (stored locally in your browser). No tracking or advertising cookies are used.</p>
        <p>You can accept or decline this cookie using the banner displayed on your first visit.</p>
      </Section>

      <Section title="4. How We Use Your Information">
        <p>If you email us, we use your contact details solely to respond to your enquiry. We do not add you to any mailing list without your explicit consent, and we do not share your details with third parties.</p>
      </Section>

      <Section title="5. Legal Basis for Processing">
        <p>When you email us, we process your personal data on the basis of <strong className="text-white/90">legitimate interest</strong>, specifically, to respond to your message. You are not required to contact us and can withdraw at any time by emailing us to request deletion of your correspondence.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>Email correspondence is retained for as long as necessary to manage the enquiry, and no longer than 3 years unless a legal obligation requires otherwise.</p>
      </Section>

      <Section title="7. Your Rights Under UK GDPR">
        <p>You have the right to: access your personal data, request correction or erasure, restrict or object to processing, and lodge a complaint with the <strong className="text-white/90">UK Information Commissioner's Office (ICO)</strong> at ico.org.uk.</p>
        <p>To exercise any of these rights, email us at <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a>.</p>
      </Section>

      <Section title="8. Third-Party Links">
        <p>Our website contains links to third-party sites (e.g., LinkedIn, Companies House). We are not responsible for the privacy practices of those sites.</p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. The date at the top of this page will always reflect the most recent version.</p>
      </Section>
    </div>
  </div>
);

const ComingSoon = ({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string; size?: number }>; title: string }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <Icon size={22} className="text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
    </div>
    <div className="flex flex-col items-center justify-center py-16 text-center space-y-5">
      <div className="w-16 h-16 rounded-full bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 flex items-center justify-center">
        <Clock size={28} className="text-[#f5e3b1]" />
      </div>
      <div>
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">Coming Soon</p>
        <h3 className="font-serif text-2xl text-white mb-3">Expected Q4 2026</h3>
        <p className="text-white/55 text-[15px] max-w-[340px] leading-relaxed">
          We are currently working on this documentation. It will be available by Q4 2026.
        </p>
      </div>
      <div className="bg-[#f5e3b1]/5 border border-[#f5e3b1]/15 rounded-xl px-6 py-4 mt-4">
        <p className="text-white/50 text-[13px]">For any queries in the meantime, please contact us at</p>
        <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] text-[14px] font-semibold hover:underline">{CONTACT.email}</a>
      </div>
    </div>
  </div>
);

export default function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  if (!page) return null;

  const content = {
    privacy:       <Privacy />,
    terms:         <ComingSoon icon={FileText}      title="Terms of Service" />,
    "food-safety": <ComingSoon icon={Scale}         title="Food Safety & Regulations" />,
    allergens:     <ComingSoon icon={AlertTriangle} title="Allergen Information" />,
  }[page];

  return (
    <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#1a0800] border border-[#f5e3b1]/15 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase">HNM Food Group Ltd</p>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1 rounded">
            <X size={18} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">{content}</div>
      </div>
    </div>
  );
}
