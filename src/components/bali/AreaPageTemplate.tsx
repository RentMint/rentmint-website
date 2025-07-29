import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
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
}

const AreaPageTemplate = ({
  areaName,
  description,
  priceRanges,
  neighborhoods,
  pros,
  cons,
  cryptoFriendliness
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rentmint-primary/5 to-rentmint-accent/5 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-rentmint-primary mb-4">
            Renting in {areaName}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            
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
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-rentmint-primary/5 to-rentmint-accent/5 border-rentmint-primary/20">
              <CardContent className="py-8">
                <h3 className="text-2xl font-display font-semibold text-rentmint-primary mb-4">
                  Ready to Find Your Perfect Rental in {areaName}?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Submit your preferences and we'll connect you with crypto-friendly landlords in {areaName}.
                </p>
                <Button 
                  size="lg"
                  className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-white px-8"
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