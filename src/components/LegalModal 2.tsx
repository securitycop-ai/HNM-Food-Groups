import { X, Shield, FileText, AlertTriangle, Scale } from "lucide-react";

export type LegalPage = "privacy" | "terms" | "food-safety" | "allergens" | null;

const CONTACT = {
  email: "harsh@hnmfoodgroup.com",
  phone: "+44 7393 066783",
  address: "14 Museum Place, Cardiff, Wales, CF10 3BH",
};

const Privacy = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <Shield className="h-6 w-6 text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">Privacy Policy & GDPR Compliance</h2>
    </div>
    <div className="space-y-5 text-[14px] leading-relaxed text-white/70">
      <section><h3 className="font-bold text-white text-[15px] mb-2">1. Data Controller</h3>
        <p>HNM Food Group Ltd, founded by Harsh Sanmukh, registered at {CONTACT.address}, is the data controller for your personal information.</p>
        <p className="mt-1"><strong className="text-white/90">Contact:</strong> {CONTACT.email} | {CONTACT.phone}</p>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">2. Information We Collect</h3>
        <ul className="list-disc pl-5 space-y-1"><li><strong className="text-white/90">Contact Information:</strong> Name, email address, phone number</li><li><strong className="text-white/90">Communication Data:</strong> Messages, enquiries, and correspondence</li><li><strong className="text-white/90">Technical Data:</strong> IP address, browser type, device information</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">3. Legal Basis for Processing</h3>
        <ul className="list-disc pl-5 space-y-1"><li><strong className="text-white/90">Consent:</strong> When you provide explicit consent for marketing communications</li><li><strong className="text-white/90">Legitimate Interest:</strong> To respond to your enquiries and provide customer service</li><li><strong className="text-white/90">Contract:</strong> To fulfill orders and provide our products/services</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">4. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Respond to your enquiries and provide customer support</li><li>Process orders and deliver our organic food products</li><li>Send marketing communications (only with your consent)</li><li>Improve our website and services</li><li>Comply with legal obligations</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">5. Your GDPR Rights</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Access, rectification, erasure of your personal data</li><li>Restrict or object to processing</li><li>Data portability</li><li>Withdraw consent at any time</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">6. Contact & Complaints</h3>
        <p>For privacy concerns or to exercise your rights, contact us at <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a>. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO).</p>
      </section>
      <p className="text-white/35 text-[12px] pt-4">Last updated: May 2026</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <FileText className="h-6 w-6 text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">Terms of Service</h2>
    </div>
    <div className="space-y-5 text-[14px] leading-relaxed text-white/70">
      <section><h3 className="font-bold text-white text-[15px] mb-2">1. Company Information</h3>
        <p><strong className="text-white/90">HNM Food Group Ltd</strong></p>
        <p>Founder & CEO: Harsh Sanmukh</p>
        <p>Registered Office: {CONTACT.address}</p>
        <p>Email: {CONTACT.email} | Phone: {CONTACT.phone}</p>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">2. Acceptance of Terms</h3>
        <p>By accessing our website or purchasing our products, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">3. Products & Services</h3>
        <p>HNM Food Groups specialises in organic millet breakfast cereals and clean-label convenience foods. All products are made with natural, organic ingredients with no preservatives, artificial flavours, or colours.</p>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">4. Quality Guarantee</h3>
        <p>Our founder's personal commitment: every product passes the test <em className="text-[#f5e3b1]">"Would I give this to my own family?"</em> We strive to create products so pure and healthy that even a newborn baby can have them.</p>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">5. Orders & Delivery</h3>
        <ul className="list-disc pl-5 space-y-1"><li>All orders are subject to availability and acceptance</li><li>Prices are subject to change without notice</li><li>We deliver across the UK</li><li>Returns accepted for damaged or defective items within 48 hours of delivery</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">6. Governing Law</h3>
        <p>These terms are governed by the laws of England and Wales.</p>
      </section>
      <p className="text-white/35 text-[12px] pt-4">Last updated: May 2026</p>
    </div>
  </div>
);

const FoodSafety = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <Scale className="h-6 w-6 text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">Food Safety & Regulations</h2>
    </div>
    <div className="space-y-5 text-[14px] leading-relaxed text-white/70">
      <section><h3 className="font-bold text-white text-[15px] mb-2">1. Food Safety Standards</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Food Safety Act 1990</li><li>Food Hygiene Regulations 2013</li><li>General Food Law Regulation (EC) 178/2002</li><li>Organic Products Regulations</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">2. Organic Certification</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Organic ingredient sourcing from certified farms</li><li>Processing without synthetic additives</li><li>Traceability throughout the supply chain</li><li>Regular inspections and audits</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">3. Manufacturing Standards</h3>
        <ul className="list-disc pl-5 space-y-1"><li>HACCP (Hazard Analysis Critical Control Points) systems</li><li>BRC (British Retail Consortium) food safety standards</li><li>Regular third-party audits</li><li>Comprehensive staff training programmes</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">4. Quality Control</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Microbiological safety testing</li><li>Pesticide residue checks</li><li>Nutritional content verification</li><li>Sensory evaluation on every batch</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">5. Contact</h3>
        <p>Food safety queries: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a> | {CONTACT.phone}</p>
      </section>
      <p className="text-white/35 text-[12px] pt-4">Last updated: May 2026</p>
    </div>
  </div>
);

const Allergens = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <AlertTriangle className="h-6 w-6 text-[#f5e3b1]" />
      <h2 className="text-2xl font-serif font-bold text-white">Allergen Information</h2>
    </div>
    <div className="space-y-5 text-[14px] leading-relaxed text-white/70">
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="font-semibold text-yellow-200">⚠️ Always check product labels for the most up-to-date allergen information before consumption.</p>
      </div>
      <section><h3 className="font-bold text-white text-[15px] mb-2">1. Common Allergens</h3>
        <p>Our products may contain or be produced in facilities that handle:</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <ul className="list-disc pl-5 space-y-1"><li>Gluten (wheat, barley, rye)</li><li>Tree nuts (almonds, hazelnuts)</li><li>Sesame seeds</li><li>Soya</li></ul>
          <ul className="list-disc pl-5 space-y-1"><li>Milk and dairy</li><li>Eggs</li><li>Mustard</li><li>Sulphites</li></ul>
        </div>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">2. Organic Millet Cereal</h3>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p><strong className="text-white/90">May contain traces of:</strong> Gluten, nuts, sesame</p>
          <p><strong className="text-white/90">Free from:</strong> Artificial preservatives, colours, flavours</p>
          <p><strong className="text-white/90">Suitable for:</strong> Vegetarians, vegans (check specific varieties)</p>
        </div>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">3. Cross-Contamination</h3>
        <ul className="list-disc pl-5 space-y-1"><li>Dedicated production lines where possible</li><li>Thorough cleaning between product runs</li><li>Staff training on allergen management</li><li>Regular testing for allergen residues</li></ul>
      </section>
      <section><h3 className="font-bold text-white text-[15px] mb-2">4. Contact for Allergen Queries</h3>
        <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a> | Phone: {CONTACT.phone}</p>
      </section>
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <p className="text-red-200 text-[13px]">Disclaimer: While we take every precaution, we cannot guarantee products are completely free from all allergens due to potential cross-contamination during manufacturing.</p>
      </div>
      <p className="text-white/35 text-[12px] pt-4">Last updated: May 2026</p>
    </div>
  </div>
);

export default function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  if (!page) return null;
  const content = { privacy: <Privacy />, terms: <Terms />, "food-safety": <FoodSafety />, allergens: <Allergens /> }[page];

  return (
    <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#1a0800] border border-[#f5e3b1]/15 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase">HNM Food Group Ltd — Legal</p>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1 rounded">
            <X size={18} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">{content}</div>
      </div>
    </div>
  );
}
