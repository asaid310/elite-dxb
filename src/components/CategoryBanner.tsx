import { ImageIcon } from "lucide-react";

const categories = [
  { title: "Sneakers", subtitle: "From $29", gradient: "from-pink-500/30 to-transparent" },
  { title: "Streetwear", subtitle: "From $19", gradient: "from-cyan-500/30 to-transparent" },
  { title: "Accessories", subtitle: "From $9", gradient: "from-yellow-500/30 to-transparent" },
];

const CategoryBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={`#${cat.title.toLowerCase()}`}
              className="group relative h-72 rounded-2xl overflow-hidden border border-dashed border-border/50 shadow-card bg-muted/10 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2 text-muted-foreground z-10">
                <ImageIcon className="w-12 h-12" />
                <span className="text-sm font-medium">Category Image</span>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-30`} />
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-2xl font-heading font-bold text-foreground">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
