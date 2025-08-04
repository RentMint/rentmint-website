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
    rentalType: "",
    budget: "",
    duration: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: This requires Supabase integration for backend functionality
    console.log("Form submitted:", formData);
    
    // Show success toast and close sheet
    toast({
      title: "Request Submitted!",
      description: "We'll share your request privately with verified rental hosts in our network. Expect replies within 24–48 hours.",
    });
    
    // Reset form and close sheet
    setFormData({
      name: "",
      contact: "",
      contactMethod: "",
      area: "",
      rentalType: "",
      budget: "",
      duration: "",
      notes: ""
    });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          size="lg"
          data-testid="floating-rental-trigger"
          className="fixed bottom-6 right-4 sm:top-1/2 sm:right-6 sm:-translate-y-1/2 sm:bottom-auto z-50 bg-rentmint-accent hover:bg-rentmint-accent/90 text-white shadow-lg rounded-full px-4 py-3 sm:px-6 flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base hidden sm:inline">Submit Rental Request</span>
          <span className="text-sm sm:hidden">Request</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display text-rentmint-primary">
            Tell Us What You're Looking For
          </SheetTitle>
          <SheetDescription>
            Share your rental preferences and we'll connect you with verified hosts in our network
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name or Pseudonym</Label>
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

            <div className="space-y-2">
              <Label htmlFor="contactMethod">Preferred Contact Method</Label>
              <Select onValueChange={(value) => setFormData({...formData, contactMethod: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="area">Desired Area</Label>
                <Select onValueChange={(value) => setFormData({...formData, area: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canggu">Canggu</SelectItem>
                    <SelectItem value="ubud">Ubud</SelectItem>
                    <SelectItem value="seminyak">Seminyak</SelectItem>
                    <SelectItem value="sanur">Sanur</SelectItem>
                    <SelectItem value="uluwatu">Uluwatu</SelectItem>
                    <SelectItem value="jimbaran">Jimbaran</SelectItem>
                    <SelectItem value="denpasar">Denpasar</SelectItem>
                    <SelectItem value="flexible">Flexible / Multiple Areas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rentalType">Rental Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, rentalType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="shared-space">Shared Space</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget in USDT/USDC</Label>
                <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300-500">$300-500/month</SelectItem>
                    <SelectItem value="500-800">$500-800/month</SelectItem>
                    <SelectItem value="800-1200">$800-1200/month</SelectItem>
                    <SelectItem value="1200-1800">$1200-1800/month</SelectItem>
                    <SelectItem value="1800+">$1800+/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Stay Duration</Label>
                <Select onValueChange={(value) => setFormData({...formData, duration: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                    <SelectItem value="12+-months">12+ months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="e.g., pet-friendly, furnished, coworking nearby, private pool, specific move-in date..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
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