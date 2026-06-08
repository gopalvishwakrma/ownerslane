import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Building2, ShieldCheck, Handshake, Search, BadgeCheck } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">What We Do</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          We provide a trusted platform for property owners and seekers to connect directly — no brokers, no brokerage.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Home, title: "Residential Rentals", desc: "Find verified rental homes listed directly by owners. Browse flats, apartments, villas, and builder floors." },
            { icon: Building2, title: "Commercial Spaces", desc: "Discover Aadhaar-verified commercial properties — offices, shops, coworking spaces, and tech parks." },
            { icon: Search, title: "Buy Properties", desc: "Search for properties to buy directly from owners with transparent pricing and zero brokerage." },
            { icon: ShieldCheck, title: "Aadhaar Verification", desc: "Every property owner is Aadhaar-verified to ensure genuine listings and eliminate fraud." },
            { icon: BadgeCheck, title: "Premium Listings", desc: "Boost your property visibility with our premium plans — get more leads and faster responses." },
            { icon: Handshake, title: "Owner Support", desc: "We help property owners list, manage, and find the right tenants or buyers effortlessly." },
          ].map((s) => (
            <div key={s.title} className="bg-muted rounded-2xl p-8 text-center">
              <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Search", desc: "Browse thousands of verified properties by location, type, and budget." },
              { step: "2", title: "Connect", desc: "Contact property owners directly — no middlemen or broker fees." },
              { step: "3", title: "Move In", desc: "Finalize the deal directly with the owner and move into your new space." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
