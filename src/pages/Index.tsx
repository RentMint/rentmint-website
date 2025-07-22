import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyLandlordsLoveSection from "@/components/WhyLandlordsLoveSection";
import WhyTenantsLoveSection from "@/components/WhyTenantsLoveSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyLandlordsLoveSection />
      <WhyTenantsLoveSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
