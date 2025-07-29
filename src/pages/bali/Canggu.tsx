import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaPageTemplate from "@/components/bali/AreaPageTemplate";

const Canggu = () => {
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
    ]
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