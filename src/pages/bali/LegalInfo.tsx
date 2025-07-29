import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Calendar,
  CreditCard,
  DollarSign,
  Shield,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const BaliLegalInfo = () => {
  useEffect(() => {
    document.title = "Bali Legal & Visa Information | Digital Nomad Guide | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Essential legal information for digital nomads in Bali: visa requirements, tax obligations, rental laws, and crypto payment regulations.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Essential legal information for digital nomads in Bali: visa requirements, tax obligations, rental laws, and crypto payment regulations.';
      document.head.appendChild(meta);
    }
  }, []);

  const visaOptions = [
    {
      type: "Visa on Arrival (B211)",
      duration: "30 days → 60 days",
      cost: "$35 + $35 extension",
      bestFor: "Short stays, property hunting",
      crypto: "No restrictions",
      status: "Available"
    },
    {
      type: "Visit Visa (B213)",
      duration: "60 days → 180 days",
      cost: "$50-100 + extensions",
      bestFor: "Medium-term stays, 3-6 month leases",
      crypto: "No restrictions", 
      status: "Recommended"
    },
    {
      type: "Cultural/Social Visa",
      duration: "60 days → 6 months",
      cost: "$100-200 + extensions",
      bestFor: "Long-term stays, learning Indonesian",
      crypto: "No restrictions",
      status: "Popular"
    },
    {
      type: "Business Visa (B211A)",
      duration: "30 days → 60 days",
      cost: "$50 + extension",
      bestFor: "Business meetings, conferences",
      crypto: "May require disclosure",
      status: "Specialized"
    }
  ];

  const legalConsiderations = [
    {
      title: "Cryptocurrency Regulations",
      content: "Cryptocurrency ownership is legal in Indonesia. However, crypto cannot be used as legal tender for direct payments. Many landlords treat crypto payments as foreign asset transfers and report them properly to tax authorities.",
      severity: "info",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Tax Obligations",
      content: "Digital nomads become Indonesian tax residents after 183 days per year. Before this, you're generally only taxed on Indonesian-sourced income. Remote work for foreign companies typically doesn't trigger Indonesian tax obligations for short-term visitors.",
      severity: "warning",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Rental Agreement Laws",
      content: "Indonesian rental law protects both landlords and tenants. Verbal agreements are legal but written contracts are recommended. Security deposits must be returned unless property damage occurs. Crypto payment terms should be clearly documented.",
      severity: "info",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Banking and Money Transfer",
      content: "International wire transfers over $10,000 USD equivalent must be reported to Indonesian authorities. Crypto transactions may be subject to similar reporting requirements. Keep detailed records of all payments for tax purposes.",
      severity: "warning",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const complianceTips = [
    {
      title: "Document Everything",
      tip: "Keep blockchain transaction records, rental receipts, and visa documents organized. Digital copies stored securely online are recommended.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Understand Tax Residency",
      tip: "Track your days in Indonesia carefully. The 183-day rule determines tax residency status and affects your obligations.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Work with Local Agents",
      tip: "Use reputable local rental agents or legal advisors familiar with international tenant requirements and crypto payments.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Insurance Coverage",
      tip: "Ensure your international insurance covers both health and legal issues. Some policies specifically exclude crypto-related activities.",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "warning":
        return <Badge variant="destructive" className="mb-3">Important</Badge>;
      case "info":
        return <Badge variant="secondary" className="mb-3">Good to Know</Badge>;
      default:
        return <Badge variant="outline" className="mb-3">General</Badge>;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

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
            <span className="text-foreground">Legal Info</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Page Header */}
        <section className="bg-background py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rentmint-primary mb-6">
              Legal & Visa Information
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Essential legal information for digital nomads renting in Bali with cryptocurrency payments.
            </p>
            
            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm text-orange-800 font-medium mb-1">Legal Disclaimer</p>
                  <p className="text-xs text-orange-700">
                    This information is for general guidance only and should not be considered legal advice. 
                    Laws and regulations change frequently. Always consult with qualified legal professionals 
                    for advice specific to your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Options */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Visa Options for Digital Nomads
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {visaOptions.map((visa, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-rentmint-primary">
                        {visa.type}
                      </CardTitle>
                      <Badge variant={visa.status === "Recommended" ? "default" : "outline"}>
                        {visa.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Duration: {visa.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Cost: {visa.cost}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Best for: {visa.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Crypto: {visa.crypto}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Considerations */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Important Legal Considerations
            </h2>
            
            <div className="grid gap-6">
              {legalConsiderations.map((item, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getSeverityIcon(item.severity)}
                      </div>
                      <div className="flex-1">
                        {getSeverityBadge(item.severity)}
                        <h3 className="font-semibold text-rentmint-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Tips */}
        <section className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Staying Compliant: Best Practices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {complianceTips.map((tip, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rentmint-accent/10 text-rentmint-accent flex-shrink-0">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-rentmint-primary mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.tip}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-rentmint-subtle py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rentmint-primary mb-8 text-center">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    FAQ Section
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Common questions about visas, taxes, and crypto payments
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali/faqs">
                      View FAQs <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Crypto Payment Guide
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    How crypto rental payments work legally in Indonesia
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali/how-rent-works">
                      Learn Process <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rentmint-accent/10 text-rentmint-accent mb-4">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-rentmint-primary mb-2">
                    Rental Directory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find verified landlords familiar with legal requirements
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bali#directory">
                      Browse Properties <ArrowRight className="w-4 h-4 ml-2" />
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

export default BaliLegalInfo;