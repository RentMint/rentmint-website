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
    ]
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