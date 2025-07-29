import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Wifi, Car, Home, DollarSign, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingRentalButton from "./FloatingRentalButton";

interface AreaPageTemplateProps {
  areaName: string;
  description: string;
  priceRanges: Array<{
    type: string;
    range: string;
  }>;
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
}

const AreaPageTemplate = ({
  areaName,
  description,
  priceRanges,
  neighborhoods,
  pros,
  cons,
  cryptoFriendliness,
  bestFor,
  internetWorkspace,
  transportAccess,
  rentalTypes,
  cryptoUsageTips
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
      <section className="bg-gradient-to-br from-rentmint-primary/5 to-rentmint-accent/5 py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-rentmint-primary mb-4 leading-tight">
            Renting in {areaName}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <Badge 
            className={`mt-6 px-4 py-2 text-sm font-medium ${getCryptoRatingColor(cryptoFriendliness)}`}
          >
            Crypto-Friendliness: {cryptoFriendliness}
          </Badge>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Average Rental Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary">Average Rental Prices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {priceRanges.map((price, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium">{price.type}</span>
                    <span className="text-rentmint-accent font-semibold">{price.range} USDT</span>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground mt-4">
                  *Prices updated monthly. Actual rates may vary based on location and amenities.
                </p>
              </CardContent>
            </Card>

            {/* Popular Neighborhoods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary">Popular Neighborhoods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rentmint-accent rounded-full"></div>
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Pros & Cons */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12">
            
            {/* Pros */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Why Choose {areaName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Best For Section */}
          <div className="mt-8 sm:mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Best for...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {bestFor.map((item, index) => (
                    <Badge key={index} variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent border-rentmint-accent/20">
                      ✅ {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* New Information Sections */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12">
            
            {/* Internet & Workspace Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary flex items-center gap-2">
                  <Wifi className="w-5 h-5" />
                  Internet & Workspace Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Average Internet Speed</p>
                  <p className="text-rentmint-accent font-semibold">{internetWorkspace.averageSpeed}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground mb-2">Coworking Spaces</p>
                  <ul className="space-y-1">
                    {internetWorkspace.coworkingSpaces.map((space, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-rentmint-accent rounded-full"></div>
                        {space}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">{internetWorkspace.notes}</p>
              </CardContent>
            </Card>

            {/* Transport & Accessibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Transport & Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Scooter Needed</p>
                    <p className="text-sm">{transportAccess.scooterNeeded ? "✅ Yes" : "❌ No"}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Walkability</p>
                    <p className="text-sm">{transportAccess.walkability}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Nearest Beach</p>
                  <p className="text-sm">{transportAccess.nearestBeach}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Airport Distance</p>
                  <p className="text-sm">{transportAccess.nearestAirport}</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Additional Info Sections */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6 sm:mt-8">
            
            {/* Types of Available Rentals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Types of Available Rentals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm text-muted-foreground mb-2">Common Types</p>
                  <ul className="space-y-1">
                    {rentalTypes.common.map((type, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-rentmint-accent rounded-full"></div>
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Usually Furnished</p>
                    <p className="text-sm">{rentalTypes.furnished ? "✅ Yes" : "❌ No"}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Short-term Friendly</p>
                    <p className="text-sm">{rentalTypes.shortTermFriendly ? "✅ Yes" : "❌ No"}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">{rentalTypes.notes}</p>
              </CardContent>
            </Card>

            {/* Crypto Usage Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-rentmint-primary flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Crypto Usage Tips in This Area
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Landlord Familiarity</p>
                  <p className="text-sm">{cryptoUsageTips.landlordFamiliarity}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Payment Ease</p>
                  <p className="text-sm">{cryptoUsageTips.paymentEase}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Local Agents/Support</p>
                  <p className="text-sm">{cryptoUsageTips.localAgents}</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="bg-gradient-to-r from-rentmint-primary/5 to-rentmint-accent/5 border-rentmint-primary/20">
              <CardContent className="py-6 sm:py-8 px-4 sm:px-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-rentmint-primary mb-4">
                  Ready to Find Your Perfect Rental in {areaName}?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm sm:text-base">
                  Submit your preferences and we'll connect you with crypto-friendly landlords in {areaName}.
                </p>
                <Button 
                  size="lg"
                  className="bg-rentmint-accent hover:bg-rentmint-accent/90 text-white px-6 sm:px-8"
                  onClick={() => {
                    // Trigger the floating button's sheet
                    const floatingButton = document.querySelector('[data-testid="floating-rental-trigger"]') as HTMLButtonElement;
                    if (floatingButton) {
                      floatingButton.click();
                    }
                  }}
                >
                  Find Rentals in {areaName}
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