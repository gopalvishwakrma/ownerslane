import { MapPin, Home, Search, LocateFixed } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Rent");
  const tabs = ["Rent", "Buy", "Commercial Rent", "Commercial Buy"];

  const heroBg =
    "https://raw.githubusercontent.com/gopalvishwakrma/heartsync/main/hero-image.jpg";

  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: "✅", text: "Real Owners" },
            { icon: "🚫", text: "Zero Fake Listings" },
            { icon: "✅", text: "Verified Homes" },
            { icon: "🚫", text: "No Brokerage" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-foreground flex items-center gap-1.5"
            >
              {badge.icon} {badge.text}
            </span>
          ))}
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-8">
          India's First Owner-Only Verified Property Marketplace
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-background rounded-full p-1 flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className="bg-background rounded-full p-2 flex items-center max-w-2xl mx-auto shadow-lg">
          <div className="flex items-center gap-2 px-4 border-r border-border">
            <MapPin size={18} className="text-primary" />
            <select className="bg-transparent text-sm text-foreground outline-none cursor-pointer">
              <option>Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-4 flex-1">
            <Home size={18} className="text-primary" />
            <input
              type="text"
              placeholder="Property Type"
              className="bg-transparent text-sm text-foreground outline-none w-full placeholder:text-muted-foreground"
            />
          </div>
          <button className="p-2 text-muted-foreground hover:text-primary mr-1">
            <LocateFixed size={20} />
          </button>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-dark transition-colors flex items-center gap-2">
            <Search size={16} /> Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;