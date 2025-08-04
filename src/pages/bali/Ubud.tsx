import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Ubud = () => {
  useEffect(() => {
    document.title = "Renting in Ubud | Long-Term Crypto-Friendly Rentals in Bali | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover long-stay rental options in Ubud, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover long-stay rental options in Ubud, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.';
      document.head.appendChild(meta);
    }
  }, []);

  const ubudData = {
    areaName: "Ubud",
    description: "Cultural hub for digital nomads with vibrant coworking spaces, yoga retreats, and traditional Balinese charm",
    knownFor: [
      "Yoga retreats & wellness",
      "Cultural immersion",
      "Coworking spaces",
      "Artist communities",
      "Rice terrace views",
      "Quiet neighborhoods",
      "Long-stay friendly"
    ],
    cryptoFriendliness: "High" as const,
    rentalStyles: [
      "Traditional Balinese villas with gardens",
      "Modern apartments in compounds",
      "Eco-friendly bamboo houses",
      "Artist lofts in Penestanan",
      "Shared villa accommodations"
    ],
    leaseDurations: ["3+ months", "6+ months", "12+ months", "Short-term rare"],
    priceRanges: [
      { type: "Private Room", range: "$300-500" },
      { type: "Studio Apartment", range: "$500-800" },
      { type: "1BR Villa", range: "$800-1200" },
      { type: "Luxury Villa", range: "$1200+" }
    ],
    neighborhoods: [
      "Central Ubud (near Monkey Forest)",
      "Penestanan (artist village)",
      "Campuhan Ridge",
      "Tegallalang (rice terraces)",
      "Mas Village",
      "Petulu (peaceful, nature-focused)"
    ],
    pros: [
      "Strong digital nomad community with excellent coworking spaces",
      "Rich cultural experiences and traditional arts",
      "Peaceful environment ideal for productivity",
      "Abundant yoga studios and wellness centers",
      "Good internet infrastructure in main areas",
      "Organic food scene and healthy lifestyle focus",
      "Crypto-friendly landlords familiar with international tenants"
    ],
    cons: [
      "Higher prices compared to other Bali areas",
      "Can be crowded with tourists in peak season",
      "Limited nightlife compared to beach areas",
      "Some areas have inconsistent internet speeds",
      "Humid climate year-round",
      "Transportation mainly scooter-dependent"
    ],
    bestFor: [
      "Long stays",
      "Wellness & retreats", 
      "Solo travelers",
      "Peace & nature",
      "Cultural immersion",
      "Creative professionals"
    ],
    internetWorkspace: {
      averageSpeed: "20-50 Mbps",
      coworkingSpaces: [
        "Hubud (pioneer coworking space)",
        "Outpost (multiple locations)",
        "Dojo Bali (strong community)",
        "Tropical Nomad Coworking"
      ],
      notes: "Central areas have excellent connectivity, but remote villas may have slower speeds."
    },
    transportAccess: {
      scooterNeeded: true,
      nearestBeach: "45-60 minutes to Sanur/Canggu",
      nearestAirport: "45-60 minutes to Ngurah Rai",
      walkability: "Central area walkable, but scooter needed for exploring"
    },
    rentalTypes: {
      common: [
        "Traditional Balinese villas with gardens",
        "Modern apartments in compounds",
        "Eco-friendly bamboo houses",
        "Artist lofts in Penestanan"
      ],
      furnished: true,
      shortTermFriendly: true,
      notes: "Most properties come fully furnished with local artistic touches."
    },
    cryptoUsageTips: {
      landlordFamiliarity: "High - Many landlords experienced with international digital nomads",
      paymentEase: "USDT/USDC widely accepted, especially for monthly rentals",
      localAgents: "Several local agents specialize in crypto-friendly arrangements"
    },
    localTips: {
      internetReliability: "Central Ubud has reliable fiber, but check speeds in rural villa areas before committing",
      coworkingCafes: [
        "Hubud - The original coworking space",
        "Seeds of Life - Café with great wifi",
        "Watercress Café - Quiet workspace",
        "Kafe Batan Waru - Local favorite"
      ],
      cryptoFriendlySpots: "Most modern cafés and coworking spaces accept digital payments. ATMs are abundant in central areas."
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AreaPageTemplate {...ubudData} />
      </main>
      <Footer />
    </div>
  );
};

export default Ubud;