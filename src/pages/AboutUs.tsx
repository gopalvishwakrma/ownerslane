import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Shield, Award, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About OwnersLane</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          India's First Owner-Only Verified Property Marketplace — connecting real owners with genuine buyers and tenants, with zero brokerage.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At OwnersLane, we believe finding a home or commercial space should be simple, transparent, and broker-free. Our platform ensures every listing is Aadhaar-verified and posted directly by real property owners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're on a mission to eliminate fake listings, hidden charges, and brokerage fees from the Indian real estate market. Every property on OwnersLane is verified, ensuring you deal directly with the owner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "50,000+", sub: "Happy Users" },
              { icon: Shield, label: "100%", sub: "Verified Listings" },
              { icon: Award, label: "10,000+", sub: "Properties Listed" },
              { icon: Target, label: "Zero", sub: "Brokerage" },
            ].map((stat) => (
              <div key={stat.sub} className="bg-muted rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "No hidden charges, no middlemen. What you see is what you get." },
              { title: "Trust", desc: "Every listing is Aadhaar-verified and posted by real property owners only." },
              { title: "Innovation", desc: "We leverage technology to make property search seamless and efficient." },
            ].map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
