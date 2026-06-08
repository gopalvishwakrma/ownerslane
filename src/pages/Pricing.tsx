import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Pricing</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Simple, transparent pricing plans to help you find or list properties faster.
        </p>
      </section>

      <PlansSection />

      <Footer />
    </div>
  );
};

export default Pricing;
