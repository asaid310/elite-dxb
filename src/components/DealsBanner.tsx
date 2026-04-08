import { Clock, Zap } from "lucide-react";

const DealsBanner = () => {
  return (
    <section id="sale" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-[2px]">
          <div className="rounded-3xl bg-background p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-4">
                <Zap className="w-4 h-4" />
                Flash Sale
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Extra <span className="text-gradient">70% OFF</span>
                <br />
                This Weekend Only
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md">
                Use code <span className="font-bold text-accent">DRIP70</span> at checkout. Limited stock — once it's gone, it's gone. ⏳
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Ends in</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: "02", label: "Days" },
                  { value: "14", label: "Hrs" },
                  { value: "38", label: "Min" },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-4xl font-heading font-bold text-foreground bg-muted rounded-xl px-4 py-3 animate-pulse-glow">
                      {t.value}
                    </span>
                    <span className="text-xs text-muted-foreground mt-2">{t.label}</span>
                  </div>
                ))}
              </div>
              <a
                href="#trending"
                className="mt-4 px-8 py-4 rounded-full bg-gradient-hero text-primary-foreground font-heading font-semibold glow-primary hover:scale-105 transition-transform"
              >
                Grab the Deal →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsBanner;
