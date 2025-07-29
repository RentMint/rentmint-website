import { Button } from "@/components/ui/button";

const BaliHero = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-rentmint-primary">
          Crypto-Friendly Rentals in Bali
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          Connect easily with trusted landlords and property managers accepting USDT/USDC.
        </p>
        <Button 
          size="lg" 
          className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-white shadow-lg"
          onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Browse Directory
        </Button>
      </div>
    </section>
  );
};

export default BaliHero;