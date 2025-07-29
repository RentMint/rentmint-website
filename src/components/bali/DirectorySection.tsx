import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Globe, Users } from "lucide-react";

const DirectorySection = () => {
  const landlords = [
    {
      name: "Bali Crypto Properties",
      contact: "WhatsApp",
      areas: ["Ubud", "Canggu"],
      description: "Experienced landlord with 15+ crypto-friendly properties"
    },
    {
      name: "Digital Nomad Villas",
      contact: "Telegram",
      areas: ["Seminyak", "Sanur"],
      description: "Specializing in remote worker accommodations"
    },
    {
      name: "Island Rental Co.",
      contact: "WhatsApp",
      areas: ["Uluwatu", "Jimbaran"],
      description: "Luxury villas and apartments, crypto payments welcome"
    }
  ];

  const companies = [
    {
      name: "CryptoStay Bali",
      website: "cryptostay-bali.com",
      areas: "Island-wide",
      description: "Full-service rental platform for crypto payments"
    },
    {
      name: "Nomad Nest Rentals",
      website: "nomadnest.id",
      areas: "Canggu, Ubud, Seminyak",
      description: "Curated properties for digital nomads"
    }
  ];

  const popularAreas = [
    {
      name: "Ubud",
      description: "Cultural heart with jungle views and coworking spaces",
      priceRange: "$400-800/month"
    },
    {
      name: "Canggu",
      description: "Surf town with beach access and vibrant nomad community",
      priceRange: "$500-1000/month"
    },
    {
      name: "Seminyak",
      description: "Upscale area with restaurants, clubs, and luxury amenities",
      priceRange: "$600-1200/month"
    },
    {
      name: "Sanur",
      description: "Quiet beachside town perfect for families and remote work",
      priceRange: "$350-700/month"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-rentmint-primary">
          Crypto-Friendly Directory
        </h2>
        
        {/* Landlords Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-6 text-rentmint-primary flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Trusted Landlords
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {landlords.map((landlord, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{landlord.name}</CardTitle>
                  <CardDescription>{landlord.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      {landlord.areas.join(", ")}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent">
                        USDT/USDC Accepted
                      </Badge>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {landlord.contact}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rental Companies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-6 text-rentmint-primary flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Rental Companies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      {company.areas}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent">
                        Crypto Platform
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Globe className="w-4 h-4 mr-1" />
                        Visit Website
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
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorySection;