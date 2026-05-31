import { Play } from "lucide-react";

const videos = [
  {
    id: "bg-video",
    title: "Pure Goodness for All",
    description: "Our brand story — the HNM mission, from grain to bowl.",
    src: "/hnm-brand-video.mp4",
    poster: "/images/hnm-cereal-bowl.jpg",
    tag: "Brand Film",
  },
  {
    id: "cereal-video",
    title: "Organic Millet Cereal",
    description: "A closer look at our flagship product — naturally sourced, clean-label, and crafted for your family.",
    src: "/hnm-cereal-video.mp4",
    poster: "/images/hnm-cereal-hero.jpg",
    tag: "Product",
  },
  {
    id: "ad-video",
    title: "HNM Advertisement",
    description: "Watch our launch advertisement — pure ingredients, real nutrition, honest food.",
    src: "/hnm-advertisement.mp4",
    poster: "/images/hnm-family-cereal.jpg",
    tag: "Advertisement",
  },
];

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

      <section className="py-8 px-8 border-t border-white/10 pb-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#f5e3b1]/30 transition-colors group">
              <div className="relative aspect-video bg-black/30">
                <video
                  controls
                  playsInline
                  poster={video.poster}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show placeholder if video not yet available
                    const parent = (e.target as HTMLVideoElement).parentElement;
                    if (parent) {
                      (e.target as HTMLVideoElement).style.display = "none";
                    }
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                {/* Overlay placeholder shown when video unavailable */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#f5e3b1]/20 border border-[#f5e3b1]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-[#f5e3b1] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-[#f5e3b1]/10 text-[#f5e3b1] mb-3 inline-block">
                  {video.tag}
                </span>
                <h3 className="font-serif text-[18px] text-white mt-2 mb-2">{video.title}</h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
