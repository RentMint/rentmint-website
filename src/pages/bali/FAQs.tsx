import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle, Coins, Home, FileText, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BaliFAQs = () => {
  useEffect(() => {
    document.title = "Bali Rental FAQs | Crypto Payments & Living Guide | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Common questions about crypto rentals in Bali, visa requirements, living costs, and USDT/USDC payment processes for digital nomads.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Common questions about crypto rentals in Bali, visa requirements, living costs, and USDT/USDC payment processes for digital nomads.';
      document.head.appendChild(meta);
    }
  }, []);

  const faqCategories = [
    {
      title: "Crypto Payments",
      icon: <Coins className="w-5 h-5" />,
      questions: [
        {
          question: "Which cryptocurrencies are accepted for rent in Bali?",
          answer: "Most crypto-friendly landlords accept USDT and USDC (stablecoins) as they provide price stability. Some also accept BUSD, DAI, and occasionally Bitcoin or Ethereum, though these are less common due to volatility."
        },
        {
          question: "What blockchain networks are supported?",
          answer: "Popular networks include Ethereum, Arbitrum, Base, Polygon, Binance Smart Chain (BSC), Tron, and Solana. Landlords often prefer networks with lower gas fees like Arbitrum, BSC, or Tron for monthly payments."
        },
        {
          question: "Are there any transaction fees I should know about?",
          answer: "Yes, you'll pay network gas fees (typically $0.50-$5 depending on the network) plus any exchange fees if you need to convert other crypto to stablecoins. Some landlords absorb these fees, others pass them to tenants."
        },
        {
          question: "How do landlords handle crypto payments legally?",
          answer: "Most landlords treat crypto as foreign currency and report it to Indonesian tax authorities at market value. You'll typically receive proper rental receipts showing both crypto and IDR amounts."
        },
        {
          question: "What happens if crypto prices crash during my lease?",
          answer: "Since most payments are in stablecoins (USDT/USDC), your rent amount remains stable. However, if you pay in volatile crypto like Bitcoin, the USD value determines the amount due - price drops don't reduce your rent obligation."
        }
      ]
    },
    {
      title: "Visa & Legal",
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          question: "What visa do I need for long-term rental in Bali?",
          answer: "For stays over 30 days, you typically need a B213 Visit Visa (60 days, extendable to 180 days) or B211 Visa on Arrival (30 days, extendable to 60 days). For longer stays, consider the B213 Cultural/Social visa which can be extended up to 6 months."
        },
        {
          question: "Can I rent without a visa in advance?",
          answer: "Yes, you can enter on a visa on arrival and find accommodation, but having a longer-term visa before signing a lease gives you more negotiating power and access to better properties."
        },
        {
          question: "Do I need Indonesian ID or tax number to rent?",
          answer: "Not required for most private rentals. Some formal rental companies may ask for passport copy and visa documentation. Tax obligations depend on your residency status and income sources."
        },
        {
          question: "Are crypto payments legal in Indonesia?",
          answer: "Cryptocurrency ownership is legal, but crypto cannot be used as legal tender for payments. However, many landlords accept crypto as foreign assets and report the transactions properly to tax authorities."
        }
      ]
    },
    {
      title: "Rental Process",
      icon: <Home className="w-5 h-5" />,
      questions: [
        {
          question: "How do I find crypto-friendly landlords?",
          answer: "Use our verified directory, join digital nomad Facebook groups, check crypto-friendly rental platforms, or work with local agents familiar with international tenants. Many coworking spaces also have rental connections."
        },
        {
          question: "What's the typical rental process?",
          answer: "1) View property and negotiate terms, 2) Agree on crypto payment method and exchange rate, 3) Sign rental contract, 4) Pay deposit + first month in crypto, 5) Receive keys and payment receipts. Process usually takes 1-3 days."
        },
        {
          question: "How are disputes handled?",
          answer: "Most crypto rental agreements include arbitration clauses. Keep all transaction records on blockchain as proof of payment. Local mediation services can help resolve disputes, though having a local contact or agent is valuable."
        },
        {
          question: "Can I negotiate rent prices when paying in crypto?",
          answer: "Yes! Many landlords offer 5-15% discounts for crypto payments due to faster settlement and no currency conversion hassles. Longer-term leases (6+ months) often get better rates."
        },
        {
          question: "What about utilities and internet?",
          answer: "Some rentals include utilities, others don't. Expect $50-150/month extra for electricity (AC usage affects this greatly), water, and internet. High-speed internet upgrades may cost extra $20-50/month."
        }
      ]
    },
    {
      title: "Living in Bali", 
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: "What's the cost of living besides rent?",
          answer: "Budget $800-1500/month total including rent. Food costs $5-20/day depending on local vs Western food. Scooter rental is $60-80/month. Coworking spaces are $80-150/month."
        },
        {
          question: "Do I need a scooter to get around?",
          answer: "Highly recommended, especially outside central Canggu/Seminyak. Grab/Gojek work in main areas but become expensive for daily use. Many landlords can help arrange scooter rentals."
        },
        {
          question: "How reliable is internet for remote work?",
          answer: "Good in main areas (Canggu, Seminyak, Ubud central). Expect 25-100Mbps in most crypto-friendly properties. Always test internet before committing to a lease. Backup mobile data plans are essential."
        },
        {
          question: "What about healthcare and insurance?",
          answer: "International insurance is strongly recommended. Good private hospitals exist in Denpasar and main tourist areas. Budget travel insurance typically covers emergency care but not routine healthcare."
        },
        {
          question: "Is Bali safe for digital nomads?",
          answer: "Generally very safe. Main concerns are traffic accidents (drive carefully), occasional theft (don't flash valuables), and natural disasters (volcano, earthquakes). Stay informed and follow local advisories."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="pt-20 pb-4 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-rentmint-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/bali" className="hover:text-rentmint-primary transition-colors">Bali</Link>
            <span>/</span>
            <span className="text-foreground">FAQs</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Page Header */}
        <section className="bg-background py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rentmint-primary mb-6">
              Bali Rental FAQs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Common questions about crypto rentals, visas, and living in Bali as a digital nomad.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rentmint-accent/10 text-rentmint-accent">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold text-rentmint-primary">
                    {category.title}
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6 bg-card/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold text-rentmint-primary pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Still Have Questions?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Coins className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Crypto Payment Guide
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn the complete process of paying rent with stablecoins
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali/how-rent-works">
                      View Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Pricing Guide
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    See current rental rates in USDT/USDC across all areas
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali/pricing-guide">
                      View Prices <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Find Landlords
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse verified crypto-friendly property owners
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali#directory">
                      Browse Directory <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BaliFAQs;