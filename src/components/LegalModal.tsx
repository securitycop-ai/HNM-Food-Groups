import { X, Shield, FileText, AlertTriangle, Scale, Clock } from "lucide-react";

export type LegalPage = "privacy" | "terms" | "food-safety" | "allergens" | null;

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
        <a href="mailto:harsh@hnmfoodgroup.com" className="text-[#f5e3b1] text-[14px] font-semibold hover:underline">harsh@hnmfoodgroup.com</a>
      </div>
    </div>
  </div>
);

import React from "react";

export default function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  if (!page) return null;

  const pages: Record<NonNullable<LegalPage>, { icon: React.ComponentType<{ className?: string; size?: number }>; title: string }> = {
    privacy:      { icon: Shield,        title: "Privacy Policy" },
    terms:        { icon: FileText,      title: "Terms of Service" },
    "food-safety":{ icon: Scale,         title: "Food Safety & Regulations" },
    allergens:    { icon: AlertTriangle, title: "Allergen Information" },
  };

  const { icon, title } = pages[page];

  return (
    <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#1a0800] border border-[#f5e3b1]/15 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase">HNM Food Group Ltd</p>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1 rounded">
            <X size={18} />
          </button>
        </div>
        <div className="p-8">
          <ComingSoon icon={icon} title={title} />
        </div>
      </div>
    </div>
  );
}
