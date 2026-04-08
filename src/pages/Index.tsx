import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBanner from "@/components/CategoryBanner";
import TrendingSection from "@/components/TrendingSection";
import DealsBanner from "@/components/DealsBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryBanner />
      <TrendingSection />
      <DealsBanner />
      <Footer />
    </div>
  );
};

export default Index;
