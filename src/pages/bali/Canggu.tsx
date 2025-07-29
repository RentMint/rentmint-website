import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Canggu = () => {
  useEffect(() => {
    document.title = "Canggu Rentals | Surf & Digital Nomad Housing in Bali | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find crypto-friendly rentals in Canggu, Bali. Surf paradise and digital nomad hotspot with beachfront coworking, modern amenities, and Bitcoin/USDT payments.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Find crypto-friendly rentals in Canggu, Bali. Surf paradise and digital nomad hotspot with beachfront coworking, modern amenities, and Bitcoin/USDT payments.';
      document.head.appendChild(meta);
    }
  }, []);

  const cangguData = {
    areaName: "Canggu",
    description: "Surf paradise and digital nomad hotspot with beachfront coworking, vibrant nightlife, and modern amenities",
    cryptoFriendliness: "High" as const,
    priceRanges: [
      { type: "Shared Villa Room", range: "$400-600" },
      { type: "Studio Apartment", range: "$600-900" },
      { type: "1BR Villa", range: "$900-1400" },
      { type: "Beachfront Villa", range: "$1400+" }
    ],
    neighborhoods: [
      "Echo Beach (main hub)",
      "Berawa (upscale, family-friendly)",
      "Batu Bolong (surfer central)",
      "Pererenan (quieter, emerging)",
      "Nelayan (local vibes)",
      "Seseh (peaceful, rice fields)"
    ],
    pros: [
      "Largest digital nomad community in Bali",
      "Excellent surf breaks and beach lifestyle",
      "High-quality coworking spaces and cafes",
      "Vibrant social scene and networking events",
      "Modern infrastructure and reliable internet",
      "Great variety of international restaurants",
      "Very crypto-friendly with many accepting stablecoins"
    ],
    cons: [
      "Most expensive area in Bali for rentals",
      "Heavy traffic congestion, especially during peak hours",
      "Can feel overcrowded and lose local authenticity",
      "Party atmosphere may not suit everyone",
      "Limited public transportation options",
      "Beach pollution during certain seasons"
    ],
    bestFor: [
      "Surfers",
      "Social nomads",
      "Beach lifestyle",
      "Networking",
      "Short-term stays",
      "Young professionals"
    ],
    internetWorkspace: {
      averageSpeed: "30-80 Mbps",
      coworkingSpaces: [
        "Dojo Bali Canggu (flagship location)",
        "BWork Bali (beachfront)",
        "Outpost Canggu",
        "The Lawn Canggu",
        "Tropical Nomad Coworking"
      ],
      notes: "Best internet infrastructure in Bali with fiber connections in most areas."
    },
    transportAccess: {
      scooterNeeded: true,
      nearestBeach: "At the beach",
      nearestAirport: "30-45 minutes to Ngurah Rai",
      walkability: "Main strips walkable, but spread out area requires scooter"
    },
    rentalTypes: {
      common: [
        "Modern villas with pools",
        "Shared coliving spaces",
        "Beachfront apartments",
        "Luxury compounds with amenities"
      ],
      furnished: true,
      shortTermFriendly: true,
      notes: "Most modern rental market in Bali with professional property management."
    },
    cryptoUsageTips: {
      landlordFamiliarity: "Very high - Most landlords experienced with crypto payments",
      paymentEase: "USDT/USDC standard, many accept Bitcoin too",
      localAgents: "Numerous crypto-specialist agencies and property managers"
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AreaPageTemplate {...cangguData} />
      </main>
      <Footer />
    </div>
  );
};

export default Canggu;