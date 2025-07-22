import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">Collect Rent in</span>
              <br />
              <span className="text-foreground">USDC or USDT</span>
              <span className="text-muted-foreground"> — </span>
              <br />
              <span className="text-rentmint-accent">No Banks, No</span>
              <br />
              <span className="text-rentmint-accent">Delays.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Send invoices in local currency. Get paid in stablecoins across chains. No KYC/AML.
            </p>

            {/* Call-to-action */}
            <Button 
              size="lg" 
              className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground h-12 px-6 text-base font-medium rounded-lg group"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust indicators */}
            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rentmint-accent" />
                  <span className="text-muted-foreground">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rentmint-accent" />
                  <span className="text-muted-foreground">Safe multisig secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rentmint-accent" />
                  <span className="text-muted-foreground">Multi-chain support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Live Dashboard */}
          <div className="lg:pl-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Live Rent Dashboard (Beta)</h3>
                <span className="bg-rentmint-accent/10 text-rentmint-accent px-3 py-1 rounded-full text-sm font-medium">
                  Live
                </span>
              </div>

              {/* Rent Entries */}
              <div className="space-y-4 mb-6">
                {/* Entry 1 */}
                <div className="flex items-center justify-between p-4 bg-rentmint-subtle/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🏢</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Orchid Villa 2B</div>
                      <div className="text-sm text-muted-foreground">Tenant: Sarah Lee</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">1,200 USDT</div>
                    <div className="flex items-center gap-1">
                      <span className="bg-rentmint-accent text-rentmint-accent-foreground px-2 py-0.5 rounded text-xs font-medium">
                        Paid ✓
                      </span>
                    </div>
                  </div>
                </div>

                {/* Entry 2 */}
                <div className="flex items-center justify-between p-4 bg-rentmint-subtle/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 text-sm">🏠</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Marina Heights 3A</div>
                      <div className="text-sm text-muted-foreground">Currency: MYR • Chain: Polygon</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">2,000 USDT</div>
                    <div className="flex items-center gap-1">
                      <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs font-medium">
                        Due Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">This Month</span>
                  <span className="text-2xl font-bold text-foreground">3,200 USDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;