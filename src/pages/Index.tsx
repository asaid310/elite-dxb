import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBanner from "@/components/CategoryBanner";
import TrendingSection from "@/components/TrendingSection";
import BrandsSection from "@/components/BrandsSection";
import DealsBanner from "@/components/DealsBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryBanner />
      <TrendingSection />
      <BrandsSection />
      <DealsBanner />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
