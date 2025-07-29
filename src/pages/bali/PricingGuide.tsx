import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, TrendingUp, Home, MapPin, Coins, Clock, Shield, Info, DollarSign, Wallet, AlertTriangle, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BaliPricingGuide = () => {
  useEffect(() => {
    document.title = "Bali Rental Pricing Guide (USDT/USDC) | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete Bali rental pricing guide for crypto tenants. Monthly rates in USDT/USDC, crypto-friendliness ratings, and market insights for digital nomads.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Complete Bali rental pricing guide for crypto tenants. Monthly rates in USDT/USDC, crypto-friendliness ratings, and market insights for digital nomads.';
      document.head.appendChild(meta);
    }
  }, []);

  const rentalData = [
    {
      area: "Ubud",
      type: "Studio/Apartment",
      price: "300–500",
      cryptoFriendliness: "Medium",
      features: ["WiFi included", "Shared pool", "Local artistic community"]
    },
    {
      area: "Ubud",
      type: "1BR Villa (furnished)",
      price: "450–650",
      cryptoFriendliness: "High",
      features: ["Private garden", "Yoga space", "Quiet retreat setting"]
    },
    {
      area: "Ubud",
      type: "Luxury Villa (2BR+)",
      price: "700–1100",
      cryptoFriendliness: "High",
      features: ["Private pool", "Full kitchen", "Concierge services"]
    },
    {
      area: "Canggu",
      type: "Shared Coliving",
      price: "350–550",
      cryptoFriendliness: "High",
      features: ["Coworking space", "Surfboard storage", "Community events"]
    },
    {
      area: "Canggu",
      type: "1BR Apartment",
      price: "500–800", 
      cryptoFriendliness: "High",
      features: ["Beach access", "Scooter parking", "Modern furnishing"]
    },
    {
      area: "Canggu",
      type: "2BR Villa (private pool)",
      price: "800–1200",
      cryptoFriendliness: "High",
      features: ["Private pool", "Garden space", "Near surf spots"]
    },
    {
      area: "Seminyak",
      type: "1BR Luxury Apartment",
      price: "700–1000",
      cryptoFriendliness: "High",
      features: ["Central location", "Rooftop pool", "24/7 security"]
    },
    {
      area: "Seminyak",
      type: "2BR Villa (private)",
      price: "900–1400",
      cryptoFriendliness: "High",
      features: ["Private pool", "Chef service available", "Walking to beach"]
    },
    {
      area: "Seminyak",
      type: "Luxury Villa (3BR+)",
      price: "1400–2500",
      cryptoFriendliness: "High",
      features: ["Premium location", "Full staff", "Private chef option"]
    },
    {
      area: "Sanur",
      type: "Shared Coliving Room",
      price: "250–400",
      cryptoFriendliness: "Medium",
      features: ["Peaceful area", "Family-friendly", "Good internet"]
    },
    {
      area: "Sanur",
      type: "1BR Apartment",
      price: "400–600",
      cryptoFriendliness: "Medium",
      features: ["Beachfront", "Quiet nights", "Great for families"]
    },
    {
      area: "Sanur",
      type: "2BR Villa",
      price: "600–900",
      cryptoFriendliness: "Medium",
      features: ["Traditional style", "Garden setting", "Close to beach"]
    }
  ];

  const rentalTerms = [
    {
      title: "Common rental terms",
      value: "3–6 months (minimum)",
      icon: <Clock className="w-5 h-5" />,
      note: "Most landlords prefer 6+ month stays for crypto tenants"
    },
    {
      title: "Security deposits",
      value: "1-2 months rent",
      icon: <Shield className="w-5 h-5" />,
      note: "Usually refundable, often held in USDT/USDC escrow"
    },
    {
      title: "Utility costs",
      value: "$50-150/month",
      icon: <DollarSign className="w-5 h-5" />,
      note: "Electricity, water, internet. AC usage affects costs significantly"
    },
    {
      title: "Service fees",
      value: "0-15% of rent",
      icon: <Wallet className="w-5 h-5" />,
      note: "Some platforms charge fees, direct landlord deals often fee-free"
    },
    {
      title: "Crypto payment timing",
      value: "Monthly in advance",
      icon: <Coins className="w-5 h-5" />,
      note: "USDT/USDC preferred, some accept monthly or quarterly prepayment"
    },
    {
      title: "Long-term discounts",
      value: "10-20% for 12+ months",
      icon: <TrendingUp className="w-5 h-5" />,
      note: "Significant savings available for annual crypto prepayment"
    }
  ];

  const priceFactors = [
    {
      factor: "Peak Season (Jul-Aug, Dec-Jan)",
      impact: "+20-40%",
      description: "Tourist high season significantly increases prices"
    },
    {
      factor: "Proximity to Beach/Center",
      impact: "+30-50%",
      description: "Walking distance to main attractions commands premium"
    },
    {
      factor: "Property Age & Condition",
      impact: "±25%",
      description: "New, well-maintained properties cost more than older ones"
    },
    {
      factor: "Private Pool",
      impact: "+$200-400",
      description: "Private pools add significant monthly cost"
    },
    {
      factor: "Crypto Payment Discount",
      impact: "-5-15%",
      description: "Many landlords offer discounts for stablecoin payments"
    }
  ];

  const areaObservations = [
    {
      area: "Canggu",
      icon: <TrendingUp className="w-5 h-5" />,
      observation: "Prices spiked 15-25% in 2024 due to growing nomad community. Highest crypto adoption among landlords.",
      emoji: "🏄",
      cryptoRating: "Excellent",
      avgInternet: "50-100 Mbps"
    },
    {
      area: "Ubud", 
      icon: <Home className="w-5 h-5" />,
      observation: "Best value for money with cultural immersion. Growing acceptance of crypto payments among wellness-focused properties.",
      emoji: "🧘",
      cryptoRating: "Very Good", 
      avgInternet: "25-75 Mbps"
    },
    {
      area: "Seminyak",
      icon: <Coins className="w-5 h-5" />,
      observation: "Premium pricing but highest service quality. Luxury property managers actively embrace stablecoin payments.",
      emoji: "🏖️",
      cryptoRating: "Excellent",
      avgInternet: "75-150 Mbps"
    },
    {
      area: "Sanur",
      icon: <Shield className="w-5 h-5" />,
      observation: "Most affordable, family-friendly option. Slower crypto adoption but growing interest from local agents.",
      emoji: "👨‍👩‍👧‍👦",
      cryptoRating: "Good",
      avgInternet: "30-60 Mbps"
    }
  ];

  const quickTips = [
    {
      title: "Best Time to Find Deals",
      tip: "March-May and September-November offer 20-30% savings vs peak season",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Crypto Payment Advantage", 
      tip: "Mention USDT/USDC upfront - many landlords prefer crypto and offer discounts",
      icon: <Coins className="w-5 h-5" />
    },
    {
      title: "Negotiation Strategy",
      tip: "Offer 3-6 month prepayment in stablecoins for 10-15% discount",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Hidden Costs to Ask About",
      tip: "Electricity (can be $100+/month with AC), cleaning fees, internet upgrades",
      icon: <AlertTriangle className="w-5 h-5" />
    }
  ];

  const getCryptoFriendlinessBadge = (level: string) => {
    switch (level) {
      case "High":
        return <Badge className="bg-rentmint-accent/10 text-rentmint-accent border-rentmint-accent/20">High</Badge>;
      case "Medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "Low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
            <span className="text-foreground">Pricing Guide</span>
          </div>
        </div>
      </nav>
      <main>
        {/* Page Header */}
        <section className="bg-background py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last Updated: {currentDate}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rentmint-primary mb-6">
              Bali Rental Pricing Guide (USDT/USDC)
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-8">
              Know what your stablecoins are worth in Bali. Updated monthly with real-world crypto-aligned rental estimates.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="bg-rentmint-accent/5 py-12 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-rentmint-primary mb-8 text-center">
              💡 Insider Tips for Crypto Tenants
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                      {tip.icon}
                    </div>
                    <h3 className="font-semibold text-rentmint-primary mb-2 text-sm">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tip.tip}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exchange Rate Reference */}
        <section className="bg-rentmint-subtle py-8 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="w-5 h-5 text-rentmint-accent" />
                  <h3 className="font-semibold text-rentmint-primary">Exchange Rate Reference</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Current Reference:</strong> 1 USDT ≈ 15,929 IDR | 1 USDC ≈ 15,925 IDR
                </p>
                <p className="text-sm text-muted-foreground">
                  <Info className="w-4 h-4 inline mr-1" />
                  FX rates are locked at time of invoice. Example: IDR 9,000,000 = 565 USDT @ rate of 15,929.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rental Price Table */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Monthly Rental Rates by Area & Property Type
            </h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-rentmint-subtle">
                      <TableHead className="font-semibold text-rentmint-primary">Area</TableHead>
                      <TableHead className="font-semibold text-rentmint-primary">Property Type</TableHead>
                      <TableHead className="font-semibold text-rentmint-primary">Monthly Rent (USDT)</TableHead>
                      <TableHead className="font-semibold text-rentmint-primary">Crypto-Friendliness</TableHead>
                      <TableHead className="font-semibold text-rentmint-primary">Key Features</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalData.map((rental, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <Link to={`/bali/${rental.area.toLowerCase()}`} className="hover:text-rentmint-accent transition-colors">
                              {rental.area}
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>{rental.type}</TableCell>
                        <TableCell className="font-semibold text-rentmint-accent">
                          ${rental.price}
                        </TableCell>
                        <TableCell>
                          {getCryptoFriendlinessBadge(rental.cryptoFriendliness)}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {rental.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {rental.features.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{rental.features.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Notes */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>• Prices reflect typical monthly rates for 3–6 month stays during low-mid season.</p>
              <p>• Rates are updated monthly based on direct feedback and market monitoring.</p>
              <p>• All prices exclude utilities unless otherwise noted. Click area names to view detailed guides.</p>
            </div>
          </div>
        </section>

        {/* Price Factors */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Factors Affecting Rental Prices
            </h2>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {priceFactors.map((factor, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-rentmint-primary mb-2">
                          {factor.factor}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {factor.description}
                        </p>
                      </div>
                      <Badge variant={factor.impact.includes('+') ? 'destructive' : factor.impact.includes('-') ? 'default' : 'secondary'} className="flex-shrink-0">
                        {factor.impact}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Terms */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Rental Terms & Payment Practices
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentalTerms.map((term, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="text-rentmint-accent mt-0.5 flex-shrink-0">
                        {term.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-rentmint-primary mb-1">
                          {term.title}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-2">
                          {term.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {term.note}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Area-Specific Observations */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Area-Specific Market Insights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {areaObservations.map((obs, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <span className="text-2xl">{obs.emoji}</span>
                      <Link to={`/bali/${obs.area.toLowerCase()}`} className="hover:text-rentmint-accent transition-colors">
                        {obs.area}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge className="bg-rentmint-accent/10 text-rentmint-accent">
                        Crypto: {obs.cryptoRating}
                      </Badge>
                      <span className="text-muted-foreground">
                        📶 {obs.avgInternet}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {obs.observation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Crypto-Friendly Directory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find verified landlords and companies accepting USDT/USDC
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali#directory">
                      Browse Directory <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Coins className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    How Crypto Payments Work
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step guide to paying rent with stablecoins
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali/how-rent-works">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Area Guides
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed guides for each rental area in Bali
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali">
                      View All Areas <ArrowRight className="w-4 h-4 ml-2" />
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

export default BaliPricingGuide;