import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed K.", text: "Quality is insane for the price. Got my Golden Goose and they look 🔥", rating: 5 },
  { name: "Sara M.", text: "Fast shipping to Dubai, only took 4 days! Will order again 100%", rating: 5 },
  { name: "Khalid R.", text: "Best place for branded fashion in the GCC. COD option is a lifesaver", rating: 5 },
  { name: "Fatima A.", text: "My Chrome Hearts hoodie is amazing quality. Already ordered more!", rating: 5 },
  { name: "Omar H.", text: "Third order and never disappointed. Packaging is always clean too", rating: 5 },
  { name: "Noura S.", text: "Paid with Apple Pay, got it in 3 days. Easiest shopping experience ever", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground text-sm">600+ positive reviews · 400+ returning customers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/50 p-5">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-3">"{review.text}"</p>
              <p className="text-xs text-muted-foreground font-medium">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
