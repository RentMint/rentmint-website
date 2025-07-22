import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="bg-background py-16 md:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden"
      aria-label="Hero section with crypto rent collection introduction"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rentmint-accent/5 via-transparent to-rentmint-primary/5" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rentmint-accent/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rentmint-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Headline - Main H1 for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Collect Rent in USDC or USDT</span>
              <br />
              <span className="bg-gradient-to-r from-rentmint-accent to-emerald-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
                — No Banks, No Delays.
              </span>
            </h1>
            
            {/* Subheadline with target keywords */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md font-medium">
              Send invoices in local currency. Get paid in stablecoins across chains. No KYC/AML.
            </p>

            {/* Call-to-action */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rentmint-primary to-rentmint-primary/90 hover:from-rentmint-primary/90 hover:to-rentmint-primary text-rentmint-primary-foreground h-12 px-8 text-base font-semibold rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Get early access to RentMint crypto rent collection platform"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>

            {/* Trust indicators */}
            <div className="pt-4 space-y-3">
              <ul className="flex flex-wrap gap-4 md:gap-6" role="list">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rentmint-accent" aria-hidden="true" />
                  <span className="text-sm md:text-base font-medium text-muted-foreground">No setup fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rentmint-accent" aria-hidden="true" />
                  <span className="text-sm md:text-base font-medium text-muted-foreground">Safe multisig secured</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rentmint-accent" aria-hidden="true" />
                  <span className="text-sm md:text-base font-medium text-muted-foreground">Multi-chain support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Premium Live Dashboard */}
          <div className="lg:pl-4 mt-8 lg:mt-0">
            <div 
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-5 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
              role="img"
              aria-label="Live rent dashboard showing USDT payments from tenants"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
                  Live Rent Dashboard 
                  <span className="text-xs text-muted-foreground">(Beta)</span>
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rentmint-accent rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="bg-gradient-to-r from-rentmint-accent/20 to-green-500/20 text-rentmint-accent px-2 py-1 rounded-full text-xs font-medium border border-rentmint-accent/20">
                    Live
                  </span>
                </div>
              </div>

              {/* Rent Entries */}
              <div className="space-y-3 mb-5" role="list">
                {/* Entry 1 */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-100/50 dark:border-green-800/30 hover:shadow-md transition-all duration-300 group/item" role="listitem">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                      <span className="text-white text-xs">🏢</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Orchid Villa 2B</div>
                      <div className="text-xs text-muted-foreground">Tenant: Sarah Lee</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground text-sm">
                      <AnimatedCounter value={1200} /> USDT
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="bg-gradient-to-r from-rentmint-accent to-green-500 text-white px-2 py-0.5 rounded text-xs font-medium shadow-sm">
                        Paid ✓
                      </span>
                    </div>
                  </div>
                </div>

                {/* Entry 2 */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl border border-orange-100/50 dark:border-orange-800/30 hover:shadow-md transition-all duration-300 group/item" role="listitem">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                      <span className="text-white text-xs">🏠</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Marina Heights 3A</div>
                      <div className="text-xs text-muted-foreground">Currency: MYR • Chain: Polygon</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground text-sm">
                      <AnimatedCounter value={2000} /> USDT
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-0.5 rounded text-xs font-medium shadow-sm">
                        Due Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total with animated counter */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground flex items-center gap-1">
                    This Month
                    <TrendingUp className="h-3 w-3 text-rentmint-accent" aria-hidden="true" />
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-rentmint-accent to-green-500 bg-clip-text text-transparent">
                    <AnimatedCounter value={3200} /> USDT
                  </span>
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-rentmint-accent/20 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-green-500/30 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;