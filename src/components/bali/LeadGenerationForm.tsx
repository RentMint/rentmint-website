import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    contactMethod: "",
    area: "",
    budget: "",
    preferences: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase to handle form submissions
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rentmint-primary">
            Find Your Perfect Rental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Submit your preferences and we'll connect you directly with crypto-friendly landlords who have properties matching your needs.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Rental Request Form</CardTitle>
            <CardDescription className="text-center">
              Get matched with trusted landlords in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name / Pseudonym</Label>
                  <Input
                    id="name"
                    placeholder="Your name or preferred alias"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Info</Label>
                  <Input
                    id="contact"
                    placeholder="WhatsApp number or email"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <Select onValueChange={(value) => setFormData({...formData, contactMethod: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Preferred Area</Label>
                  <Select onValueChange={(value) => setFormData({...formData, area: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ubud">Ubud</SelectItem>
                      <SelectItem value="canggu">Canggu</SelectItem>
                      <SelectItem value="seminyak">Seminyak</SelectItem>
                      <SelectItem value="sanur">Sanur</SelectItem>
                      <SelectItem value="uluwatu">Uluwatu</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget (USDT/USDC)</Label>
                <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300-500">$300-500</SelectItem>
                    <SelectItem value="500-800">$500-800</SelectItem>
                    <SelectItem value="800-1200">$800-1200</SelectItem>
                    <SelectItem value="1200+">$1200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences">Additional Preferences</Label>
                <Textarea
                  id="preferences"
                  placeholder="e.g., pet-friendly, furnished, coworking nearby, private pool..."
                  value={formData.preferences}
                  onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-rentmint-accent hover:bg-rentmint-accent/90 text-white">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadGenerationForm;