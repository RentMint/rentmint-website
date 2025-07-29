import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Bali = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Placeholder for now */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-rentmint-primary">
              Crypto-Friendly Rentals in Bali
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Connect digital nomads with landlords who accept stablecoin payments. 
              Simplifying rent for the crypto community in paradise.
            </p>
          </div>
        </section>

        {/* Placeholder sections for future components */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-rentmint-primary">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Property directory, price guides, and lead generation forms will be added in subsequent updates.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bali;