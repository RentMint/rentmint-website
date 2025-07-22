import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-rentmint-subtle via-background to-rentmint-subtle/50 py-16 md:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rentmint-accent/5 via-transparent to-rentmint-primary/5"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rentmint-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-rentmint-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="bg-gradient-to-r from-rentmint-primary to-rentmint-accent bg-clip-text text-transparent font-display">
            Get Early Access to RentMint
          </span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
          We'll contact you when we launch. No spam.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rentmint-primary to-rentmint-primary/90 hover:from-rentmint-primary/90 hover:to-rentmint-primary text-rentmint-primary-foreground h-12 px-8 text-base font-semibold rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px]"
            asChild
          >
            <a href="[YOUR_GOOGLE_FORM_SIGNUP_URL]" target="_blank" rel="noopener noreferrer">
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-rentmint-primary/20 text-rentmint-primary hover:bg-rentmint-primary hover:text-rentmint-primary-foreground h-12 px-8 text-base font-semibold rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px] bg-background/80 backdrop-blur-sm"
            asChild
          >
            <a href="[YOUR_GOOGLE_FORM_CONTACT_URL]" target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-4 left-1/4 w-3 h-3 bg-rentmint-accent/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-rentmint-primary/40 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-rentmint-accent/20 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default CTASection;