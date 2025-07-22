import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-rentmint-primary">
                Rent collection
                <br />
                <span className="text-rentmint-accent">reimagined</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Instant rent payments with stablecoins (USDT/USDC). No banks, no waiting, no borders. 
                Complete privacy for landlords and tenants worldwide.
              </p>
            </div>

            {/* Real-world example */}
            <div className="bg-rentmint-subtle p-6 rounded-lg border border-border">
              <p className="text-lg text-rentmint-subtle-foreground">
                <span className="font-medium">Collect ₹50,000 or $2,000 in USDT</span> from any tenant, anywhere in the world. 
                Instantly.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground h-14 px-8 text-lg font-medium"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-lg font-medium border-border hover:bg-muted"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 space-y-3">
              <p className="text-sm text-muted-foreground">Trusted by forward-thinking landlords in</p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-muted-foreground text-sm font-medium">
                <span>🇮🇳 India</span>
                <span>🇹🇭 Thailand</span>
                <span>🇦🇪 UAE</span>
                <span>🇵🇭 Philippines</span>
                <span>🇲🇽 Mexico</span>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder for illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-rentmint-subtle rounded-2xl p-8 max-w-md w-full">
              <div className="space-y-6">
                {/* Payment interface mockup */}
                <div className="bg-background rounded-lg p-6 border border-border shadow-sm">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monthly Rent</span>
                      <span className="font-semibold text-rentmint-primary">$2,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Payment Method</span>
                      <span className="text-sm bg-rentmint-accent/10 text-rentmint-accent px-2 py-1 rounded-md font-medium">
                        USDT
                      </span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="bg-rentmint-accent text-rentmint-accent-foreground rounded-lg py-3 px-4 text-center font-medium">
                        ✓ Payment Received Instantly
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features preview */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                    <span className="text-rentmint-subtle-foreground">No KYC required</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                    <span className="text-rentmint-subtle-foreground">Complete privacy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                    <span className="text-rentmint-subtle-foreground">Instant receipts</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                    <span className="text-rentmint-subtle-foreground">Global access</span>
                  </div>
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