import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Wifi, Car, Home, DollarSign, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingRentalButton from "./FloatingRentalButton";

interface AreaPageTemplateProps {
  areaName: string;
  description: string;
  knownFor: string[];
  priceRanges: Array<{
    type: string;
    range: string;
  }>;
  rentalStyles: string[];
  leaseDurations: string[];
  neighborhoods: string[];
  pros: string[];
  cons: string[];
  cryptoFriendliness: "High" | "Medium" | "Low";
  bestFor: string[];
  internetWorkspace: {
    averageSpeed: string;
    coworkingSpaces: string[];
    notes: string;
  };
  transportAccess: {
    scooterNeeded: boolean;
    nearestBeach: string;
    nearestAirport: string;
    walkability: string;
  };
  rentalTypes: {
    common: string[];
    furnished: boolean;
    shortTermFriendly: boolean;
    notes: string;
  };
  cryptoUsageTips: {
    landlordFamiliarity: string;
    paymentEase: string;
    localAgents: string;
  };
  localTips: {
    internetReliability: string;
    coworkingCafes: string[];
    cryptoFriendlySpots: string;
  };
}

const AreaPageTemplate = ({
  areaName,
  description,
  knownFor,
  priceRanges,
  rentalStyles,
  leaseDurations,
  neighborhoods,
  pros,
  cons,
  cryptoFriendliness,
  bestFor,
  internetWorkspace,
  transportAccess,
  rentalTypes,
  cryptoUsageTips,
  localTips
}: AreaPageTemplateProps) => {
  const getCryptoRatingColor = (rating: string) => {
    switch (rating) {
      case "High":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": `${areaName}, Bali`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": areaName,
            "addressRegion": "Bali",
            "addressCountry": "Indonesia"
          },
          "amenityFeature": knownFor.map(feature => ({
            "@type": "LocationFeatureSpecification",
            "name": feature
          }))
        })}
      </script>

      {/* Navigation */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 py-3">
          <Link 
            to="/bali" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-rentmint-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Bali Guide</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rentmint-primary/5 to-rentmint-accent/5 py-8 sm:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-rentmint-primary mb-4 leading-tight px-2">
            Long-Term Rentals in {areaName}, Bali
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            {description}
          </p>
          <Badge 
            className={`mt-4 sm:mt-6 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium ${getCryptoRatingColor(cryptoFriendliness)}`}
          >
            Payment Flexibility: {cryptoFriendliness}
          </Badge>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* What This Area is Known For */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-rentmint-primary mb-4 sm:mb-6">
              What {areaName} is Known For
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {knownFor.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-rentmint-primary/5 text-rentmint-primary border-rentmint-primary/20">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Rental Information */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-rentmint-primary">Rental Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Typical Rental Styles</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {rentalStyles.map((style, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-rentmint-accent rounded-full flex-shrink-0"></div>
                        {style}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Price Ranges (USDT/USDC)</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {priceRanges.map((price, index) => (
                      <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-muted/30 rounded-lg">
                        <span className="text-xs sm:text-sm font-medium">{price.type}</span>
                        <span className="text-xs sm:text-sm text-rentmint-accent font-semibold">{price.range}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Common Lease Durations</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {leaseDurations.map((duration, index) => (
                      <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                        {duration}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Neighborhoods */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-rentmint-primary">Popular Neighborhoods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-rentmint-accent rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12">
            
            {/* Pros */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2 text-base sm:text-lg">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Why Choose {areaName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
                  {pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2 text-base sm:text-lg">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
                  {cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Local Tips Section */}
          <div className="mt-6 sm:mt-8 lg:mt-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-rentmint-primary mb-4 sm:mb-6">
              Local Tips for {areaName}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm sm:text-base text-rentmint-primary">Internet Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{localTips.internetReliability}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm sm:text-base text-rentmint-primary">Coworking & Cafés</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {localTips.coworkingCafes.map((cafe, index) => (
                      <li key={index} className="text-xs sm:text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-rentmint-accent rounded-full flex-shrink-0"></div>
                        {cafe}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm sm:text-base text-rentmint-primary">Payment-Friendly Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{localTips.cryptoFriendlySpots}</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Best For Section */}
          <div className="mt-6 sm:mt-8 lg:mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-rentmint-primary flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Best for...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {bestFor.map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-rentmint-accent/10 text-rentmint-accent border-rentmint-accent/20">
                      ✅ {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12">
            
            {/* Internet & Workspace Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-rentmint-primary flex items-center gap-2">
                  <Wifi className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Internet & Workspace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-medium text-xs sm:text-sm text-muted-foreground">Average Speed</p>
                  <p className="text-sm sm:text-base text-rentmint-accent font-semibold">{internetWorkspace.averageSpeed}</p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm text-muted-foreground mb-2">Coworking Spaces</p>
                  <ul className="space-y-1">
                    {internetWorkspace.coworkingSpaces.map((space, index) => (
                      <li key={index} className="text-xs sm:text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-rentmint-accent rounded-full flex-shrink-0"></div>
                        {space}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground italic">{internetWorkspace.notes}</p>
              </CardContent>
            </Card>

            {/* Transport & Accessibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-rentmint-primary flex items-center gap-2">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Transport & Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <p className="font-medium text-xs sm:text-sm text-muted-foreground">Scooter Needed</p>
                    <p className="text-xs sm:text-sm">{transportAccess.scooterNeeded ? "✅ Yes" : "❌ No"}</p>
                  </div>
                  <div>
                    <p className="font-medium text-xs sm:text-sm text-muted-foreground">Walkability</p>
                    <p className="text-xs sm:text-sm">{transportAccess.walkability}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm text-muted-foreground">Nearest Beach</p>
                  <p className="text-xs sm:text-sm">{transportAccess.nearestBeach}</p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm text-muted-foreground">Airport Distance</p>
                  <p className="text-xs sm:text-sm">{transportAccess.nearestAirport}</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Looking in Area CTA Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <Card className="bg-gradient-to-r from-rentmint-primary/5 to-rentmint-accent/5 border-rentmint-primary/20">
              <CardContent className="py-6 sm:py-8 px-4 sm:px-6 text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-rentmint-primary mb-3 sm:mb-4">
                  Looking for Rentals in {areaName}?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
                  Submit your rental request and get matched with verified hosts in {areaName} within 24-48 hours.
                </p>
                <Button 
                  size="lg"
                  className="bg-rentmint-accent hover:bg-rentmint-accent/90 text-white px-4 sm:px-6 lg:px-8 text-sm sm:text-base"
                  onClick={() => {
                    const floatingButton = document.querySelector('[data-testid="floating-rental-trigger"]') as HTMLButtonElement;
                    if (floatingButton) {
                      floatingButton.click();
                    }
                  }}
                >
                  Submit Rental Request
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      <FloatingRentalButton />
    </div>
  );
};

export default AreaPageTemplate;