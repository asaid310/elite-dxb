import sneakersImg from "@/assets/product-sneakers.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const categories = [
  { title: "Sneakers", subtitle: "From $29", image: sneakersImg, gradient: "from-pink-500/30 to-transparent" },
  { title: "Streetwear", subtitle: "From $19", image: hoodieImg, gradient: "from-cyan-500/30 to-transparent" },
  { title: "Accessories", subtitle: "From $9", image: accessoriesImg, gradient: "from-yellow-500/30 to-transparent" },
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
              className="group relative h-72 rounded-2xl overflow-hidden border border-border/50 shadow-card"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
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
