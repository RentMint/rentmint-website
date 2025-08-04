import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Canggu = () => {
  useEffect(() => {
    document.title = "Renting in Canggu | Long-Term Crypto-Friendly Rentals in Bali | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover long-stay rental options in Canggu, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover long-stay rental options in Canggu, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.';
      document.head.appendChild(meta);
    }
  }, []);

  const cangguData = {
    areaName: "Canggu",
    description: "Surf paradise and digital nomad hotspot with beachfront coworking, vibrant nightlife, and modern amenities",
    knownFor: [
      "Surf breaks & beach life",
      "Digital nomad hub",
      "Vibrant nightlife",
      "Beachfront coworking",
      "Social networking",
      "Modern infrastructure",
      "Short-term friendly"
    ],
    cryptoFriendliness: "High" as const,
    rentalStyles: [
      "Modern villas with pools",
      "Shared coliving spaces", 
      "Beachfront apartments",
      "Luxury compounds with amenities",
      "Boutique hotel residences"
    ],
    leaseDurations: ["1+ months", "3+ months", "6+ months", "Short-term common"],
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
    },
    localTips: {
      internetReliability: "Excellent fiber coverage throughout most areas. Backup options widely available.",
      coworkingCafes: [
        "Dojo Bali - Premier nomad coworking",
        "BWork - Beachfront workspace",
        "Milk & Madu - Popular café workspace",
        "The Shady Shack - Healthy food + wifi"
      ],
      cryptoFriendlySpots: "Most establishments accept digital payments. ATMs abundant. Many crypto-focused events and meetups."
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