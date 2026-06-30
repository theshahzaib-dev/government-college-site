import PageHero from "@/components/global/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  // Static placeholders for the gallery
  const galleryItems = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    category: i % 2 === 0 ? "Campus Life" : "Academic",
    title: `Gallery Image ${i + 1}`,
  }));

  return (
    <div>
      <PageHero
        title="Photo Gallery"
        subtitle="Glimpses of academic rigor, cultural functions, and sports at the college."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter UI Placeholder */}
        <div className="flex justify-center flex-wrap gap-3 mt-8 mb-12">
          {["All", "Campus Life", "Academic", "Sports", "Convocation"].map(
            (filter, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  i === 0
                    ? "bg-brand-primary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
                }`}
              >
                {filter}
              </button>
            ),
          )}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-slate-200 rounded-xl overflow-hidden border border-slate-100"
            >
              {/* Visual Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                [Image: {item.title}]
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
