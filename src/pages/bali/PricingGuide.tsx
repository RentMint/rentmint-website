import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, TrendingUp, Home, MapPin, Coins, Clock, Shield, Info } from "lucide-react";

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
      type: "1BR Villa (furnished)",
      price: "450–650",
      cryptoFriendliness: "High"
    },
    {
      area: "Ubud", 
      type: "Studio/Apartment",
      price: "300–500",
      cryptoFriendliness: "Medium"
    },
    {
      area: "Canggu",
      type: "1BR Apartment",
      price: "500–800", 
      cryptoFriendliness: "High"
    },
    {
      area: "Canggu",
      type: "2BR Villa (private pool)",
      price: "800–1200",
      cryptoFriendliness: "High"
    },
    {
      area: "Seminyak",
      type: "1BR Luxury Apartment",
      price: "700–1000",
      cryptoFriendliness: "High"
    },
    {
      area: "Seminyak",
      type: "2BR Villa (private)",
      price: "900–1400",
      cryptoFriendliness: "High"
    },
    {
      area: "Sanur",
      type: "Shared Coliving Room",
      price: "250–400",
      cryptoFriendliness: "Medium"
    },
    {
      area: "Sanur",
      type: "1BR Apartment",
      price: "400–600",
      cryptoFriendliness: "Medium"
    }
  ];

  const rentalTerms = [
    {
      title: "Common rental terms",
      value: "3–6 months"
    },
    {
      title: "Deposits",
      value: "Usually 1 month, often refundable"
    },
    {
      title: "Discounts",
      value: "Available for 12-month prepay"
    },
    {
      title: "Crypto prepay accepted?",
      value: "Yes, by many independent landlords"
    }
  ];

  const areaObservations = [
    {
      area: "Canggu",
      icon: <TrendingUp className="w-5 h-5" />,
      observation: "Prices spiked 10–15% in 2024 Q2",
      emoji: "🏄"
    },
    {
      area: "Ubud", 
      icon: <Home className="w-5 h-5" />,
      observation: "Cheaper villas, crypto-friendly wellness hubs",
      emoji: "🧘"
    },
    {
      area: "Seminyak",
      icon: <Coins className="w-5 h-5" />,
      observation: "High-end, but many landlords open to stablecoin payments",
      emoji: "🏖️"
    },
    {
      area: "Sanur",
      icon: <Shield className="w-5 h-5" />,
      observation: "Family-friendly, growing crypto acceptance among local agents",
      emoji: "👨‍👩‍👧‍👦"
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
      <main className="pt-20">
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
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Know what your stablecoins are worth in Bali. Updated monthly with real-world crypto-aligned rental estimates.
            </p>
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
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalData.map((rental, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            {rental.area}
                          </div>
                        </TableCell>
                        <TableCell>{rental.type}</TableCell>
                        <TableCell className="font-semibold text-rentmint-accent">
                          ${rental.price}
                        </TableCell>
                        <TableCell>
                          {getCryptoFriendlinessBadge(rental.cryptoFriendliness)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Notes */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>• Prices reflect typical monthly rates for 3–6 month stays.</p>
              <p>• Rates are updated monthly based on direct feedback and market monitoring.</p>
              <p>• All prices exclude utilities unless otherwise noted.</p>
            </div>
          </div>
        </section>

        {/* Rental Terms */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Rental Term Practices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {rentalTerms.map((term, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-rentmint-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-rentmint-primary mb-1">
                          {term.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {term.value}
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
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Area-Specific Market Insights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areaObservations.map((obs, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{obs.emoji}</span>
                      {obs.area}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-start gap-2">
                      <div className="text-rentmint-accent mt-0.5">
                        {obs.icon}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {obs.observation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BaliPricingGuide;