import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">Collect Rent in</span>
              <br />
              <span className="text-rentmint-accent">USDC</span> <span className="text-foreground">or</span>
              <br />
              <span className="text-rentmint-accent">USDT</span>
              <br />
              <span className="text-muted-foreground font-normal">— No Banks, No Delays.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Instant global rent payments. Full privacy. No KYC required.
            </p>

            {/* Call-to-action */}
            <Button 
              size="lg" 
              className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground h-12 px-8 text-base font-medium rounded-lg"
            >
              Get Early Access
            </Button>
            
            {/* Real-world example */}
            <p className="text-base text-muted-foreground">
              Easily collect ₹50,000 or $2,000 in USDT from any tenant, anywhere.
            </p>
          </div>

          {/* Right Content - Payment Interface */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating USDC coin */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-bold text-sm">USDC</span>
              </div>

              {/* Main payment card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl max-w-sm w-full">
                <div className="space-y-6">
                  {/* Payment header */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Payment</span>
                    <div className="w-3 h-3 bg-rentmint-accent rounded-full"></div>
                  </div>
                  
                  {/* Amount */}
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">$2,000</div>
                    <div className="text-sm text-muted-foreground">Monthly Rent</div>
                  </div>
                  
                  {/* Payment method */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rentmint-accent rounded-full flex items-center justify-center">
                      <span className="text-xs text-rentmint-accent-foreground font-bold">U</span>
                    </div>
                    <span className="text-base font-medium text-foreground">USDT</span>
                  </div>
                </div>
              </div>

              {/* Success indicator */}
              <div className="mt-4 bg-rentmint-accent/10 border border-rentmint-accent/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                  <span className="text-sm text-rentmint-accent font-medium">Instant Transfer</span>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full opacity-20" viewBox="0 0 300 300">
                  <path
                    d="M20 150 Q150 50 280 150"
                    stroke="hsl(var(--rentmint-accent))"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4,4"
                  />
                  <path
                    d="M20 180 Q150 220 280 150"
                    stroke="hsl(var(--rentmint-primary))"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;