
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#hero" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              How It Works
            </a>
            <a 
              href="#for-landlords" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              For Landlords
            </a>
            <a 
              href="#for-tenants" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              For Tenants
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground font-medium tracking-wide">
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
