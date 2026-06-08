import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";
import { Users, TrendingUp, BadgeCheck } from "lucide-react";

const ForOwners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">For Owners</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          List your property for free and connect with genuine tenants and buyers — no middlemen involved.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BadgeCheck, title: "Free Listing", desc: "List your property for free and reach thousands of verified seekers." },
            { icon: Users, title: "Genuine Leads", desc: "Get direct inquiries from real tenants and buyers — no brokers." },
            { icon: TrendingUp, title: "Premium Boost", desc: "Upgrade to premium plans for higher visibility and faster results." },
          ].map((f) => (
            <div key={f.title} className="bg-muted rounded-2xl p-8 text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PlansSection />

      <Footer />
    </div>
  );
};

export default ForOwners;
