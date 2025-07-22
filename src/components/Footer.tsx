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
    <footer className="bg-background border-t border-border/50 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blockchain Partners Section */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground mb-6 font-medium">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {blockchainLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center w-16 h-10 bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {logo.placeholder}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mb-8"></div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-8">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("#") ? "_self" : "_blank"}
                  rel={link.href.startsWith("#") ? "" : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-6">
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <div className="w-px h-4 bg-border/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RentMint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;