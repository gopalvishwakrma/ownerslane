import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertiesSection from "@/components/PropertiesSection";
import { ShieldCheck, IndianRupee, Home } from "lucide-react";

const ForBuyers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">For Buyers</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Buy your dream property directly from verified owners — zero brokerage, 100% transparency.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: ShieldCheck, title: "Verified Owners", desc: "All property owners are Aadhaar-verified to ensure genuine listings." },
            { icon: IndianRupee, title: "Zero Brokerage", desc: "No hidden fees or broker commissions. Deal directly with the owner." },
            { icon: Home, title: "Wide Selection", desc: "Browse apartments, villas, builder floors, and more across top cities." },
          ].map((f) => (
            <div key={f.title} className="bg-muted rounded-2xl p-8 text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PropertiesSection title="Properties Available for Purchase" subtitle="Browse verified properties from real owners with transparent pricing." />

      <Footer />
    </div>
  );
};

export default ForBuyers;
