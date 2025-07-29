import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bali from "./pages/Bali";
import Ubud from "./pages/bali/Ubud";
import Canggu from "./pages/bali/Canggu";
import Seminyak from "./pages/bali/Seminyak";
import Sanur from "./pages/bali/Sanur";
import HowRentWorks from "./pages/bali/HowRentWorks";
import PricingGuide from "./pages/bali/PricingGuide";
import FAQs from "./pages/bali/FAQs";
import LegalInfo from "./pages/bali/LegalInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/bali/ubud" element={<Ubud />} />
          <Route path="/bali/canggu" element={<Canggu />} />
          <Route path="/bali/seminyak" element={<Seminyak />} />
          <Route path="/bali/sanur" element={<Sanur />} />
          <Route path="/bali/how-rent-works" element={<HowRentWorks />} />
          <Route path="/bali/pricing-guide" element={<PricingGuide />} />
          <Route path="/bali/faqs" element={<FAQs />} />
          <Route path="/bali/legal-info" element={<LegalInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
