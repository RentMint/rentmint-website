import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-rentmint-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-rentmint-primary rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-rentmint-accent rounded-full animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-12">
            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              <span className="text-foreground">Collect Rent in</span>
              <br />
              <span className="bg-gradient-to-r from-rentmint-accent to-rentmint-primary bg-clip-text text-transparent">
                USDC or USDT
              </span>
              <br />
              <span className="text-muted-foreground text-5xl md:text-6xl lg:text-7xl">
                — No Banks, No Delays.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-lg font-light">
              Instant global rent payments. Full privacy. No KYC required.
            </p>

            {/* Call-to-action */}
            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground h-16 px-12 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Early Access
              </Button>
              
              {/* Real-world example */}
              <p className="text-lg text-muted-foreground font-medium">
                Easily collect ₹50,000 or $2,000 in USDT from any tenant, anywhere.
              </p>
            </div>
          </div>

          {/* Right Content - Animation Space */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Floating payment cards animation */}
              <div className="relative h-96 w-full">
                {/* Main payment card */}
                <div className="absolute top-8 left-8 bg-card border border-border rounded-2xl p-8 shadow-2xl animate-float">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">Payment</span>
                      <div className="w-3 h-3 bg-rentmint-accent rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-foreground">$2,000</div>
                      <div className="text-sm text-muted-foreground">Monthly Rent</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-rentmint-accent rounded-full flex items-center justify-center">
                        <span className="text-xs text-rentmint-accent-foreground font-bold">U</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">USDT</span>
                    </div>
                  </div>
                </div>

                {/* Floating USDC coin */}
                <div className="absolute top-4 right-12 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white font-bold text-sm">USDC</span>
                </div>

                {/* Floating USDT coin */}
                <div className="absolute bottom-16 right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-500">
                  <span className="text-white font-bold text-xs">USDT</span>
                </div>

                {/* Success indicator */}
                <div className="absolute bottom-8 left-12 bg-rentmint-accent/10 border border-rentmint-accent/20 rounded-xl p-4 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-rentmint-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-rentmint-accent font-medium">Instant Transfer</span>
                  </div>
                </div>

                {/* Global connectivity lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                    <path
                      d="M50 200 Q200 100 350 200"
                      stroke="hsl(var(--rentmint-accent))"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-dash"
                    />
                    <path
                      d="M50 250 Q200 300 350 200"
                      stroke="hsl(var(--rentmint-primary))"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-dash animation-delay-1000"
                    />
                  </svg>
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