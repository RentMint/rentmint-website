import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Seminyak = () => {
  const seminyakData = {
    areaName: "Seminyak",
    description: "Upscale beach destination with luxury amenities, sophisticated dining, and premium coworking spaces",
    cryptoFriendliness: "Medium" as const,
    priceRanges: [
      { type: "Private Room", range: "$500-700" },
      { type: "Studio Apartment", range: "$700-1000" },
      { type: "1BR Apartment", range: "$1000-1500" },
      { type: "Luxury Villa", range: "$1500+" }
    ],
    neighborhoods: [
      "Central Seminyak (shopping & dining)",
      "Petitenget (beachfront luxury)",
      "Oberoi (upscale residential)",
      "Laksmana (restaurant strip)",
      "Batubelig (emerging area)",
      "Kerobokan (quieter, local feel)"
    ],
    pros: [
      "Luxury amenities and upscale accommodation",
      "World-class restaurants and beach clubs",
      "Beautiful beaches with less crowd than Canggu",
      "Sophisticated nightlife and social scene",
      "High-end shopping and spa facilities",
      "Good infrastructure and reliable services",
      "Professional environment for business networking"
    ],
    cons: [
      "Very expensive, premium pricing for everything",
      "Less budget-friendly options available",
      "Can feel exclusive and less authentic",
      "Limited coworking spaces compared to Canggu/Ubud",
      "More tourist-focused than nomad-focused",
      "Crypto acceptance varies by establishment"
    ],
    bestFor: [
      "Luxury seekers",
      "Business travelers",
      "Fine dining enthusiasts",
      "Beach club lifestyle",
      "Upscale networking",
      "Couples retreat"
    ],
    internetWorkspace: {
      averageSpeed: "25-60 Mbps",
      coworkingSpaces: [
        "LIVIT Coworking Seminyak",
        "Hubud Seminyak (satellite)",
        "Tropical Nomad Seminyak",
        "Various upscale cafe workspaces"
      ],
      notes: "Fewer coworking options but premium quality with luxury amenities."
    },
    transportAccess: {
      scooterNeeded: true,
      nearestBeach: "At the beach",
      nearestAirport: "20-30 minutes to Ngurah Rai",
      walkability: "Central area very walkable, especially restaurant strips"
    },
    rentalTypes: {
      common: [
        "Luxury serviced apartments",
        "High-end villa rentals",
        "Boutique hotel residences",
        "Premium furnished condos"
      ],
      furnished: true,
      shortTermFriendly: false,
      notes: "Focus on luxury properties with premium furnishing and services."
    },
    cryptoUsageTips: {
      landlordFamiliarity: "Medium - Some experience but often prefer traditional payments",
      paymentEase: "USDT accepted by some, but many prefer bank transfers",
      localAgents: "Limited crypto-focused agents, mostly traditional luxury brokers"
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AreaPageTemplate {...seminyakData} />
      </main>
      <Footer />
    </div>
  );
};

export default Seminyak;