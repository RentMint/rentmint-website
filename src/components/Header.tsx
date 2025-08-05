
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isOnBaliPages = location.pathname.startsWith('/bali');
  const linkPrefix = isOnBaliPages ? '/' : '';

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
              href={`${linkPrefix}#hero`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              Home
            </a>
            <a 
              href={`${linkPrefix}#how-it-works`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              How It Works
            </a>
            <a 
              href={`${linkPrefix}#for-landlords`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              For Landlords
            </a>
            <a 
              href={`${linkPrefix}#for-tenants`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              For Tenants
            </a>
            <a 
              href={`${linkPrefix}#faq`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            asChild
            className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-rentmint-primary-foreground font-medium tracking-wide"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSctad-5lRzxUgJbiAqUYC5qmYoEVMD1xaci-fD1CKNmIfGgNA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Early Access
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
