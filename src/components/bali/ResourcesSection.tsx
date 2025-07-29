import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, HelpCircle, Calculator, BookOpen } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Pricing Guide",
      description: "Current rental rates across Bali areas with crypto payment info",
      icon: Calculator,
      link: "/bali/pricing-guide",
      updated: "Updated Monthly"
    },
    {
      title: "Rental FAQs",
      description: "Common questions about crypto rentals, visas, and living in Bali",
      icon: HelpCircle,
      link: "/bali/faqs",
      updated: "Evergreen Content"
    },
    {
      title: "How Crypto Rentals Work",
      description: "Step-by-step guide to renting with USDT/USDC in Bali",
      icon: BookOpen,
      link: "/bali/how-it-works",
      updated: "Complete Guide"
    },
    {
      title: "Legal & Visa Info",
      description: "Important information about staying long-term in Bali",
      icon: FileText,
      link: "/bali/legal-info",
      updated: "Regularly Updated"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-rentmint-primary">
          Practical Rental Resources
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-rentmint-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-rentmint-accent" />
                  </div>
                  <CardTitle className="text-lg text-rentmint-primary">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-4">{resource.updated}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;