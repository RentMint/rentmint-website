import { Button } from "@/components/ui/button";

const BaliHero = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-rentmint-primary">
          Find Rental Homes in Bali from Trusted Local Hosts
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          A verified network of long-stay landlords, villa owners, and property managers offering clean, secure rentals for remote workers and digital nomads.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-white shadow-lg"
            onClick={() => {
              const button = document.querySelector('[data-testid="floating-rental-trigger"]') as HTMLButtonElement;
              button?.click();
            }}
          >
            Start Your Rental Request
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-rentmint-primary text-rentmint-primary hover:bg-rentmint-primary/10"
            onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Verified Hosts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BaliHero;