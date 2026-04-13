import { useState } from "react";
import { CreditCard, Truck, ShieldCheck, Smartphone } from "lucide-react";

const tabs = [
  {
    id: "payment",
    icon: CreditCard,
    label: "Payment",
    title: "We Accept All Major Payments",
    description: "Shop with confidence — pay using Apple Pay, Ziina, or Cash on Delivery (COD). Whatever works for you, works for us. 💳",
  },
  {
    id: "shipping",
    icon: Truck,
    label: "Shipping",
    title: "Fast 7–12 Day Delivery",
    description: "Get your order delivered to your door in just 7–12 business days across the GCC. Free shipping on all orders! 🚚",
  },
  {
    id: "trust",
    icon: ShieldCheck,
    label: "Trust",
    title: "Loved by Hundreds of Buyers",
    description: "Our growing community of loyal customers keeps coming back. With countless 5-star ratings and repeat orders, your satisfaction speaks for itself. ⭐",
  },
  {
    id: "support",
    icon: Smartphone,
    label: "Support",
    title: "24/7 WhatsApp Support",
    description: "Got questions? We're always one message away. Reach out to us anytime on WhatsApp and we'll get back to you within minutes. 💬",
  },
];

const TrustBanner = () => {
  const [active, setActive] = useState("payment");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-14 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" key={current.id}>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 text-primary mb-5">
            <current.icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
            {current.title}
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
