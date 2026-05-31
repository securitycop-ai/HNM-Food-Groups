const Media = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-24 px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Media</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">See HNM in Action</h1>
          <p className="text-white/60 text-lg max-w-[520px] mx-auto">
            Brand films, product showcases, and our story — in motion.
          </p>
        </div>
      </section>

      {/* Featured video — large, with audio */}
      <section className="px-8 pb-16 border-t border-white/10 pt-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full bg-[#f5e3b1]/10 text-[#f5e3b1] border border-[#f5e3b1]/20">
              Brand Film
            </span>
            <span className="text-white/40 text-[13px]">HNM Food Groups</span>
          </div>
          <h2 className="font-serif text-3xl text-white mb-3">Pure Goodness for All</h2>
          <p className="text-white/55 text-[15px] mb-6 max-w-[600px]">
            Our brand advertisement — watch the HNM story, from naturally sourced ingredients to your family's breakfast table.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#f5e3b1]/15 shadow-2xl bg-black">
            <video
              controls
              playsInline
              poster="/images/hnm-cereal-bowl.jpg"
              className="w-full"
              style={{ maxHeight: "620px" }}
            >
              <source src="/hnm-brand-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Placeholder slots for future videos */}
      <section className="px-8 pb-24">
        <div className="max-w-[1240px] mx-auto">
          <h3 className="font-serif text-2xl text-white mb-8 border-t border-white/10 pt-12">More Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { tag: "Product", title: "Organic Millet Cereal", desc: "A closer look at our flagship product — naturally sourced, clean-label, and crafted for your family.", src: "/hnm-cereal-video.mp4", poster: "/images/hnm-cereal-hero.jpg" },
              { tag: "Advertisement", title: "HNM Advertisement", desc: "Our launch advertisement — pure ingredients, real nutrition, honest food.", src: "/hnm-advertisement.mp4", poster: "/images/hnm-family-cereal.jpg" },
            ].map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#f5e3b1]/30 transition-colors">
                <div className="relative aspect-video bg-black/40">
                  <video controls playsInline poster={v.poster} className="w-full h-full object-cover">
                    <source src={v.src} type="video/mp4" />
                  </video>
                  {/* Coming soon overlay if video missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a0800]/70 pointer-events-none"
                    id={`overlay-${v.title.replace(/\s/g,'-')}`}>
                    <p className="text-[#f5e3b1]/60 text-[11px] font-bold tracking-[2px] uppercase">Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-[#f5e3b1]/10 text-[#f5e3b1] mb-3 inline-block">{v.tag}</span>
                  <h3 className="font-serif text-[18px] text-white mt-2 mb-2">{v.title}</h3>
                  <p className="text-white/55 text-[13.5px] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
