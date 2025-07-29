import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Shield, DollarSign, Zap, UserCheck } from "lucide-react";

const Bali = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-rentmint-primary">
              Find & Rent Homes in Bali—Crypto-Friendly & Hassle-Free
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-8">
              Enjoy seamless rent payments using stablecoins. Avoid FX fees and volatility. Connect directly with crypto-friendly landlords.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rentmint-primary hover:bg-rentmint-primary/90 text-white">
                Explore Rentals
              </Button>
              <Button size="lg" variant="outline" className="border-rentmint-primary text-rentmint-primary hover:bg-rentmint-primary hover:text-white">
                List Your Property
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-rentmint-primary">
              Why Choose Crypto Rentals in Bali?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-muted hover:border-rentmint-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-rentmint-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-rentmint-accent" />
                  </div>
                  <CardTitle className="text-xl text-rentmint-primary">Stablecoin Payments (USDC/USDT)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pay your rent with USDC or USDT. No currency exchange fees, no volatility concerns—just stable, reliable payments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-muted hover:border-rentmint-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-rentmint-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-rentmint-accent" />
                  </div>
                  <CardTitle className="text-xl text-rentmint-primary">Instant Confirmations & Receipts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Blockchain-verified payments with instant confirmations. Get automated receipts and transparent transaction history.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-muted hover:border-rentmint-primary/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-rentmint-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-rentmint-accent" />
                  </div>
                  <CardTitle className="text-xl text-rentmint-primary">Anonymous Renting & Maximum Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maintain your privacy with pseudonymous blockchain transactions. No need for extensive personal documentation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-rentmint-primary">
              Featured Crypto-Friendly Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e426?w=400&h=300&fit=crop" 
                    alt="Modern villa with mountain view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent">
                      Villa
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      Ubud
                    </div>
                  </div>
                  <CardTitle className="text-xl">Serene Mountain Villa</CardTitle>
                  <CardDescription className="text-sm">
                    Peaceful 3-bedroom villa with stunning mountain views. Perfect for digital nomads seeking tranquility.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rentmint-primary">$1,200 USDC</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop" 
                    alt="Beachfront apartment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent">
                      Apartment
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      Canggu
                    </div>
                  </div>
                  <CardTitle className="text-xl">Beachfront Studio</CardTitle>
                  <CardDescription className="text-sm">
                    Modern studio apartment just steps from the beach. High-speed internet and coworking spaces nearby.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rentmint-primary">$800 USDT</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                    alt="Coworking-friendly house"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-rentmint-accent/10 text-rentmint-accent">
                      House
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      Seminyak
                    </div>
                  </div>
                  <CardTitle className="text-xl">Digital Nomad House</CardTitle>
                  <CardDescription className="text-sm">
                    Shared house designed for remote workers. Multiple workspaces, fiber internet, and like-minded community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rentmint-primary">$600 USDC</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Generation CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-rentmint-primary/5 to-rentmint-accent/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rentmint-primary">
                Looking for a Rental in Bali? Let Landlords Come to You!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Submit your requirements and budget. We'll connect you with crypto-friendly landlords who have properties matching your needs.
              </p>
              <Button size="lg" className="bg-rentmint-accent hover:bg-rentmint-accent/90 text-white">
                Submit Your Requirements
              </Button>
            </div>
          </div>
        </section>

        {/* Mini Footer Navigation */}
        <section className="py-12 px-4 bg-muted/50 border-t">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                  Rental Directory
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                  Price Guide
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                  FAQs
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-rentmint-primary transition-colors">
                  Newsletter
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">Powered by</div>
                <div className="font-display font-bold text-rentmint-primary">RentMint</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bali;