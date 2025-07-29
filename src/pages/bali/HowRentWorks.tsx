import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Coins, Shield, Zap } from "lucide-react";

const HowRentWorks = () => {
  useEffect(() => {
    document.title = "How Crypto Rental Payments Work | RentMint Bali";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how crypto rental payments work with RentMint in Bali. Simple stablecoin transactions, no exchange rate surprises, instant confirmations.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn how crypto rental payments work with RentMint in Bali. Simple stablecoin transactions, no exchange rate surprises, instant confirmations.';
      document.head.appendChild(meta);
    }
  }, []);

  const benefits = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "No exchange rate surprises",
      description: "Transparent real-time FX conversion from local currency to USDT/USDC"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Choose your preferred chain",
      description: "Support for Arbitrum, Base, Solana, Tron, BSC and more blockchains"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Anonymous renting & instant confirmations", 
      description: "On-chain verification with immediate payment receipts"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rentmint-accent/2 to-transparent" aria-hidden="true"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rentmint-primary mb-6">
              How Crypto Rentals Work with RentMint
            </h1>
            
            {/* Summary Text */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
              Renting with stablecoins is simple. You receive an invoice in local currency, it's converted to USDT/USDC at real-time FX, and you pay directly using your preferred blockchain. Payments are confirmed on-chain, and receipts are instant.
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-rentmint-accent hover:bg-rentmint-accent/90 text-rentmint-accent-foreground font-semibold text-lg px-8 py-3 h-auto"
              asChild
            >
              <a 
                href="https://rentmint.io#how-it-works" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Full Process →
              </a>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-rentmint-subtle py-16 md:py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                      {benefit.icon}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Check className="w-5 h-5 text-rentmint-accent flex-shrink-0" />
                      <h3 className="font-semibold text-lg text-rentmint-primary">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowRentWorks;