import { Star } from "lucide-react";

const reviews = [
  { name: "Rashid T.", text: "The quality blew my mind for this price. My friends thought these were retail 🔥", rating: 5 },
  { name: "Lina H.", text: "Ordered on Sunday, got it by Wednesday. Super fast and well packaged!", rating: 5 },
  { name: "Youssef B.", text: "COD made it so easy to trust. Now I'm a repeat buyer, 4th order already", rating: 5 },
  { name: "Mariam J.", text: "Everything fits perfectly and the material feels premium. 10/10 would recommend", rating: 5 },
  { name: "Hassan D.", text: "Been shopping here for months now. Never had a single issue with any order", rating: 5 },
  { name: "Dana W.", text: "Apple Pay checkout took 30 seconds. Got my stuff crazy fast too 🚀", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Hear It From Our Community</h2>
          <p className="text-muted-foreground text-sm">Hundreds of 5-star ratings · Trusted by repeat buyers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/50 p-5">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
