import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Home, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingRentalButton = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    contactMethod: "",
    area: "",
    budget: "",
    preferences: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: This requires Supabase integration for backend functionality
    console.log("Form submitted:", formData);
    
    // Show success toast and close sheet
    toast({
      title: "Request Submitted!",
      description: "We'll connect you with suitable landlords soon.",
    });
    
    // Reset form and close sheet
    setFormData({
      name: "",
      contact: "",
      contactMethod: "",
      area: "",
      budget: "",
      preferences: ""
    });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          size="lg"
          className="fixed top-1/2 right-6 -translate-y-1/2 z-50 bg-rentmint-primary hover:bg-rentmint-primary/90 text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <Home className="w-5 h-5" />
          <span className="hidden sm:inline">Find Rentals</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display text-rentmint-primary">
            Find Your Perfect Rental
          </SheetTitle>
          <SheetDescription>
            Submit your preferences and we'll connect you with crypto-friendly landlords
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
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

            <div className="flex gap-3 pt-4">
              <SheetClose asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </SheetClose>
              <Button type="submit" className="flex-1 bg-rentmint-accent hover:bg-rentmint-accent/90 text-white">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FloatingRentalButton;