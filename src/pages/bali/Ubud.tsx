import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Ubud = () => {
  const ubudData = {
    areaName: "Ubud",
    description: "Cultural hub for digital nomads with vibrant coworking spaces, yoga retreats, and traditional Balinese charm",
    cryptoFriendliness: "High" as const,
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
    ]
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