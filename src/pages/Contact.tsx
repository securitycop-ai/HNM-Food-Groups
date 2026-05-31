import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-24 px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Get in Touch</h1>
          <p className="text-white/60 text-lg max-w-[480px] mx-auto">
            Whether you're interested in retail partnerships, product enquiries, or airline catering — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Phone, title: "Phone", label: "Call us", value: "+44 7393 066783", href: "tel:+447393066783" },
              { icon: Mail, title: "Email", label: "General enquiries", value: "harsh@hnmfoodgroup.com", href: "mailto:harsh@hnmfoodgroup.com" },
              { icon: MapPin, title: "Registered Office", label: "HNM Food Group Ltd", value: "14 Museum Place, Cardiff, Wales, CF10 3BH", href: null },
              { icon: Clock, title: "Office Hours", label: "Monday – Friday", value: "9:00 AM – 6:00 PM", href: null },
            ].map(({ icon: Icon, title, label, value, href }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#f5e3b1]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#f5e3b1]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#f5e3b1]" />
                </div>
                <h3 className="font-sans font-bold text-white text-[15px] mb-3">{title}</h3>
                <p className="text-white/40 text-[12px] uppercase tracking-wide mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-white/80 hover:text-[#f5e3b1] text-[15px] transition-colors">{value}</a>
                ) : (
                  <p className="text-white/80 text-[15px]">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#f5e3b1]/5 border border-[#f5e3b1]/15 rounded-2xl px-8 py-10 text-center">
            <h3 className="font-serif text-3xl text-white mb-4">Retail & Trade Partnerships</h3>
            <p className="text-white/60 max-w-[500px] mx-auto text-[15px] mb-6">
              Interested in stocking HNM products or exploring distribution opportunities? Contact us directly by phone or email and our team will be happy to discuss how we can work together.
            </p>
            <a href="mailto:harsh@hnmfoodgroup.com"
              className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
              Email Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
