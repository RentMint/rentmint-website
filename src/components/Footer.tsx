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

  const footerLinks = [
    { name: "Contact", href: "[YOUR_GOOGLE_FORM_CONTACT_URL]", icon: Mail },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Telegram", href: "#", icon: MessageCircle },
    { name: "YouTube", href: "#", icon: Youtube },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/20 py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Content Section */}
        <div className="text-center space-y-8">
          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Stop chasing late rent. With RentMint, busy landlords invoice in local currency and get stablecoins, instantly and automatically.
            </p>
          </div>

          {/* Blockchain Partners */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground font-medium tracking-wide">Powered by</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {blockchainLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center w-20 h-12 bg-gradient-to-br from-background to-muted/20 border border-border/40 rounded-xl hover:border-border/60 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                    {logo.placeholder}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("#") ? "_self" : "_blank"}
                    rel={link.href.startsWith("#") ? "" : "noopener noreferrer"}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Center - Copyright */}
            <div className="order-last md:order-none">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} RentMint. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;