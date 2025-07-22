import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyLandlordsLoveSection from "@/components/WhyLandlordsLoveSection";
import WhyTenantsLoveSection from "@/components/WhyTenantsLoveSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyLandlordsLoveSection />
      <WhyTenantsLoveSection />
    </div>
  );
};

export default Index;
