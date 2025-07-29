import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Sanur = () => {
  const sanurData = {
    areaName: "Sanur",
    description: "Peaceful family-friendly area with calm beaches, affordable living, and growing digital nomad presence",
    cryptoFriendliness: "Medium" as const,
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
    ]
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