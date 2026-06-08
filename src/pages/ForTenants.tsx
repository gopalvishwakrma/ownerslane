import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertiesSection from "@/components/PropertiesSection";
import FurnishingSection from "@/components/FurnishingSection";
import { ShieldCheck, IndianRupee, Key } from "lucide-react";

const ForTenants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">For Tenants</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Find your perfect rental home directly from verified owners — no brokers, no brokerage.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Verified Listings", desc: "Every listing is verified — no fake properties, no scams." },
            { icon: IndianRupee, title: "No Brokerage", desc: "Save thousands — connect directly with property owners." },
            { icon: Key, title: "Quick Move-In", desc: "Find and finalize your rental in days, not weeks." },
          ].map((f) => (
            <div key={f.title} className="bg-muted rounded-2xl p-8 text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PropertiesSection title="Rental Properties Near You" subtitle="Browse verified rental homes near your location, listed by real owners." />
      <FurnishingSection />

      <Footer />
    </div>
  );
};

export default ForTenants;
