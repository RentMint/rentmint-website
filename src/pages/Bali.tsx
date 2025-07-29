import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BaliHero from "@/components/bali/BaliHero";
import DirectorySection from "@/components/bali/DirectorySection";
import ResourcesSection from "@/components/bali/ResourcesSection";
import LeadGenerationForm from "@/components/bali/LeadGenerationForm";

const Bali = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BaliHero />
        <DirectorySection />
        <ResourcesSection />
        <LeadGenerationForm />
        
        {/* Mini Footer Navigation */}
        <section className="py-12 px-4 bg-muted/50 border-t">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/bali/pricing-guide" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                Pricing Guide
              </a>
              <a href="/bali/faqs" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                FAQs
              </a>
              <a href="/bali/how-it-works" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                How It Works
              </a>
              <a href="/bali/legal-info" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                Legal Info
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bali;