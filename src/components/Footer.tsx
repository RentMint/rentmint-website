import { Github, Linkedin, Mail, MessageCircle, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const blockchainLogos = [
    { name: "Safe", placeholder: "SAFE" },
    { name: "Arbitrum", placeholder: "ARB" },
    { name: "Base", placeholder: "BASE" },
    { name: "Solana", placeholder: "SOL" },
    { name: "Tron", placeholder: "TRX" },
    { name: "BSC", placeholder: "BSC" },
  ];

  const socialLinks = [
    { name: "Contact", href: "[YOUR_GOOGLE_FORM_CONTACT_URL]", icon: Mail },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Telegram", href: "#", icon: MessageCircle },
    { name: "YouTube", href: "#", icon: Youtube },
  ];

  const companyLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Support", href: "#" },
  ];

  const productLinks = [
    { name: "For Landlords", href: "#landlords" },
    { name: "For Tenants", href: "#tenants" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero Tagline Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-4">
              Stop chasing late rent. With RentMint, busy landlords invoice in local currency and get stablecoins, instantly and automatically.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">RentMint</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The future of rent collection. Secure, instant, and borderless crypto payments for the modern rental market.
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Blockchain */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("#") ? "_self" : "_blank"}
                    rel={link.href.startsWith("#") ? "" : "noopener noreferrer"}
                    className="w-10 h-10 bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 group"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blockchain Partners */}
        <div className="border-t border-border/30 pt-12 mb-12">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">Powered by Leading Blockchains</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {blockchainLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="group relative"
                >
                  <div className="w-20 h-12 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:border-primary/30 group-hover:-translate-y-1">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {logo.placeholder}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RentMint. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Built with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>for the future of rent</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;