import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DirectorySection = () => {
  const verifiedHosts = [
    {
      name: "Villa Sunbird",
      areas: ["Ubud", "Canggu"],
      type: "Individual Host",
      rentalTerm: "3+ months",
      description: "Experienced host with multiple properties in cultural and surf areas"
    },
    {
      name: "Digital Nomad Villas",
      areas: ["Seminyak", "Sanur"],
      type: "Individual Host", 
      rentalTerm: "1-6 months",
      description: "Specializing in remote worker accommodations with reliable internet"
    },
    {
      name: "Island Rental Co.",
      areas: ["Uluwatu", "Jimbaran"],
      type: "Management Firm",
      rentalTerm: "3+ months",
      description: "Luxury villa management with professional service standards"
    },
    {
      name: "NomadStay Group",
      areas: ["Canggu", "Ubud", "Seminyak"],
      type: "Management Firm",
      rentalTerm: "1+ months",
      description: "Curated network of verified properties for digital nomads"
    },
    {
      name: "Bali Living Properties",
      areas: ["Sanur", "Denpasar"],
      type: "Individual Host",
      rentalTerm: "6+ months",
      description: "Long-term focused host with family-friendly accommodations"
    }
  ];

  const popularAreas = [
    {
      name: "Ubud",
      slug: "ubud",
      description: "Cultural heart with jungle views and coworking spaces",
      priceRange: "$400-800/month"
    },
    {
      name: "Canggu",
      slug: "canggu",
      description: "Surf town with beach access and vibrant nomad community",
      priceRange: "$500-1000/month"
    },
    {
      name: "Seminyak",
      slug: "seminyak",
      description: "Upscale area with restaurants, clubs, and luxury amenities",
      priceRange: "$600-1200/month"
    },
    {
      name: "Sanur",
      slug: "sanur",
      description: "Quiet beachside town perfect for families and remote work",
      priceRange: "$350-700/month"
    }
  ];

  return (
    <section id="directory" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-rentmint-primary">
          Verified Rental Hosts in Bali
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Each host listed below is part of our verified network. They typically manage multiple rental units, provide receipts, and have experience working with international tenants. You can browse, then submit your rental request to be connected.
        </p>
        
        {/* Verified Hosts Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedHosts.map((host, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{host.name}</CardTitle>
                  <CardDescription>{host.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {host.areas.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-muted/50">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {host.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{host.rentalTerm}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Flexible Payment Options
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          const button = document.querySelector('[data-testid="floating-rental-trigger"]') as HTMLButtonElement;
                          button?.click();
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Areas Section */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-6 text-rentmint-primary flex items-center">
            <MapPin className="w-6 h-6 mr-2" />
            Popular Rental Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularAreas.map((area, index) => (
              <Link key={index} to={`/bali/${area.slug}`} className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                    <CardDescription className="text-sm">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-rentmint-primary mb-2">
                      {area.priceRange}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      View Area Guide
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorySection;