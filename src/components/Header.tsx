import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rentmint-primary rounded-lg flex items-center justify-center">
              <span className="text-rentmint-primary-foreground font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">RentMint</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              For Landlords
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              For Tenants
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground">
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;