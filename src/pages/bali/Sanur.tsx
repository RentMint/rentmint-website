import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Sanur = () => {
  useEffect(() => {
    document.title = "Renting in Sanur | Long-Term Crypto-Friendly Rentals in Bali | RentMint";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover long-stay rental options in Sanur, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover long-stay rental options in Sanur, Bali. See area pricing, verified hosts, and submit your request to get matched with crypto-friendly landlords.';
      document.head.appendChild(meta);
    }
  }, []);

  const sanurData = {
    areaName: "Sanur",
    description: "Peaceful family-friendly area with calm beaches, affordable living, and growing digital nomad presence",
    knownFor: [
      "Budget-friendly options",
      "Family-friendly atmosphere",
      "Calm swimming beaches",
      "Local culture",
      "Airport proximity",
      "Traditional markets",
      "6+ month stays"
    ],
    cryptoFriendliness: "Medium" as const,
    rentalStyles: [
      "Budget-friendly guesthouses",
      "Traditional family compounds",
      "Simple furnished apartments",
      "Beachfront budget villas",
      "Local homestay options"
    ],
    leaseDurations: ["3+ months", "6+ months", "12+ months", "Short-term available"],
    priceRanges: [
      { type: "Private Room", range: "$250-400" },
      { type: "Studio Apartment", range: "$400-650" },
      { type: "1BR Apartment", range: "$650-950" },
      { type: "Beachfront Villa", range: "$950+" }
    ],
    neighborhoods: [
      "Central Sanur (main beach area)",
      "Sanur Kauh (north, local vibes)",
      "Sanur Kaja (south, quieter)",
      "Denpasar Border (budget-friendly)",
      "Bypass Area (modern developments)",
      "Traditional Villages (authentic experience)"
    ],
    pros: [
      "Most affordable area with good value for money",
      "Peaceful and family-friendly atmosphere",
      "Calm beaches perfect for swimming",
      "Less crowded than other tourist areas",
      "Good local food scene and traditional markets",
      "Easy access to airport and Denpasar",
      "Growing acceptance of crypto payments"
    ],
    cons: [
      "Limited coworking spaces and nomad infrastructure",
      "Fewer international restaurants and cafes",
      "Less vibrant nightlife and social scene",
      "Older crowd, less young professional energy",
      "Internet can be less reliable in some areas",
      "Limited surf breaks compared to other areas"
    ],
    bestFor: [
      "Budget travelers",
      "Families",
      "Peaceful stays",
      "Swimming enthusiasts",
      "Local culture seekers",
      "Airport proximity"
    ],
    internetWorkspace: {
      averageSpeed: "15-40 Mbps",
      coworkingSpaces: [
        "Sanur Creative Hub",
        "Bali Bustle Coworking",
        "Various beachside cafes with Wi-Fi",
        "Local coffee shops with workspaces"
      ],
      notes: "Growing infrastructure but still limited compared to main nomad hubs."
    },
    transportAccess: {
      scooterNeeded: true,
      nearestBeach: "At the beach",
      nearestAirport: "15-25 minutes to Ngurah Rai",
      walkability: "Main beach area walkable, but limited scope"
    },
    rentalTypes: {
      common: [
        "Budget-friendly guesthouses",
        "Traditional family compounds",
        "Simple furnished apartments",
        "Beachfront budget villas"
      ],
      furnished: true,
      shortTermFriendly: true,
      notes: "Basic furnishing but great value. Many family-run accommodations."
    },
    cryptoUsageTips: {
      landlordFamiliarity: "Low to medium - Growing awareness but limited experience",
      paymentEase: "USDT slowly being adopted, but many still prefer cash/bank",
      localAgents: "Few crypto-aware agents, mostly traditional arrangements"
    },
    localTips: {
      internetReliability: "Variable - main areas have decent connectivity, but check before committing to longer stays.",
      coworkingCafes: [
        "Sanur Creative Hub - Main workspace",
        "Café Batu Jimbar - Beachside working",
        "Warung Mak Beng - Local institution",
        "Three Monkeys Café - Tourist-friendly"
      ],
      cryptoFriendlySpots: "Limited but growing. ATMs widely available. Traditional payment methods still preferred."
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AreaPageTemplate {...sanurData} />
      </main>
      <Footer />
    </div>
  );
};

export default Sanur;