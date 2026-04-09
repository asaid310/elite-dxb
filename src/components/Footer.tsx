import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">Elite-dxb</h3>
            <p className="text-sm text-muted-foreground">
              Branded fashion for less. Real drip, real savings. 💧
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {[
            { title: "Shop", links: ["Sneakers", "Clothes", "Accessories", "New Drops", "Sale"] },
            { title: "Help", links: ["Sizing Guide", "Shipping", "Returns", "FAQ", "Contact"] },
            { title: "Company", links: ["About Us", "Reviews", "Blog"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 DRIP.DEALS — All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Best Deals on Branded Fashion 💧</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
