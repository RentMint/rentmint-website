import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BaliHero from "@/components/bali/BaliHero";
import DirectorySection from "@/components/bali/DirectorySection";
import ResourcesSection from "@/components/bali/ResourcesSection";
import FloatingRentalButton from "@/components/bali/FloatingRentalButton";

const Bali = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-24">
        <BaliHero />
        <DirectorySection />
        <ResourcesSection />
        
        {/* Mini Footer Navigation */}
        <section className="py-16 px-4 bg-muted/30 border-t">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-semibold text-rentmint-primary mb-2">
                Need More Information?
              </h3>
              <p className="text-muted-foreground">
                Explore our comprehensive guides and resources
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/bali/pricing-guide" className="text-sm font-medium text-muted-foreground hover:text-rentmint-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50">
                Pricing Guide
              </a>
              <a href="/bali/faqs" className="text-sm font-medium text-muted-foreground hover:text-rentmint-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50">
                FAQs
              </a>
              <a href="/bali/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-rentmint-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50">
                How It Works
              </a>
              <a href="/bali/legal-info" className="text-sm font-medium text-muted-foreground hover:text-rentmint-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50">
                Legal Info
              </a>
            </div>
          </div>
        </section>

        {/* Floating Rental Button */}
        <FloatingRentalButton />
      </main>
      <Footer />
    </div>
  );
};

export default Bali;