import { useState } from "react";
import { Flame, Trophy } from "lucide-react";

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState("Rent");

  const plans = [
    {
      name: "Prepaid",
      badge: "Most Popular",
      badgeIcon: <Flame size={16} className="text-orange-500" />,
      price: "₹ 1499",
      highlighted: true,
    },
    {
      name: "Postpaid",
      badge: "Best Value",
      badgeIcon: <Trophy size={16} className="text-yellow-500" />,
      price: "₹ 2499",
      highlighted: false,
    },
  ];

  const features = [
    "Access to 25 contacts",
    "Access to direct leads",
    "3X visibility & lead generation",
    "Instant alerts on SMA.",
    "On-demand support.",
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Our Plans</h2>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Perfect for those who want to sell their property faster
      </p>

      <div className="flex justify-center mb-10">
        <div className="border border-border rounded-full p-1 flex">
          {["Rent", "Sell"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? "bg-primary text-primary-foreground"
                : "bg-teal-light border border-border"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <span className="bg-background text-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                {plan.badgeIcon} {plan.badge}
              </span>
            </div>
            <div className="mb-4">
              <span className={`text-3xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.price}
              </span>
              <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Incl.GST
              </span>
            </div>
            <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              Sell property swiftly by reaching more genuine buyers and cutting down on brokerage fees.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li
                  key={f}
                  className={`text-sm flex items-center gap-2 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  • {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
