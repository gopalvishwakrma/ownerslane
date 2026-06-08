// import { useState } from "react";
// import { Flame, Trophy } from "lucide-react";

// type Plan = {
//   name: string;
//   badge: string;
//   badgeIcon: JSX.Element;
//   price: string;
//   priceNote: string;
//   tagline: string;
//   features: string[];
//   highlighted: boolean;
// };

// const plansData: Record<"Rent" | "Sell", Plan[]> = {
//   Rent: [
//     {
//       name: "Rent Prepaid",
//       badge: "Most Popular",
//       badgeIcon: <Flame size={16} className="text-orange-500" />,
//       price: "₹ 999",
//       priceNote: "60 days validity",
//       tagline: "Best for owners who want direct tenant leads",
//       highlighted: true,
//       features: [
//         "List residential or commercial rental property",
//         "Direct exposure to verified tenants on OwnersLane",
//         "Receive genuine rental inquiries only",
//         "Instant sharing of interested tenant contacts",
//         "Manage responses from OwnersLane dashboard",
//         "Phone Number Privacy to approve requests",
//         "Owner handles site visits & rent negotiation",
//         "Full control over tenant selection & agreement",
//         "Renew listing at ₹499 if still available",
//       ],
//     },
//     {
//       name: "Rental Postpaid",
//       badge: "Best Value",
//       badgeIcon: <Trophy size={16} className="text-yellow-500" />,
//       price: "₹ 4,999",
//       priceNote: "Pay only after tenant finalization",
//       tagline: "Best for owners who want OwnersLane to handle everything",
//       highlighted: false,
//       features: [
//         "No upfront payment",
//         "OwnersLane finds verified tenants for you",
//         "Team manages all tenant inquiries & calls",
//         "Field executives conduct property visits",
//         "Owner introduced only after token confirmation",
//         "Privacy protection from unwanted calls",
//         "FREE Legal Protection (₹999 value)",
//         "Rental agreement support included",
//         "Smooth & hassle-free renting experience",
//       ],
//     },
//   ],
//   Sell: [
//     {
//       name: "Sale Prepaid",
//       badge: "Most Popular",
//       badgeIcon: <Flame size={16} className="text-orange-500" />,
//       price: "₹ 999",
//       priceNote: "90 days validity",
//       tagline: "Best for owners who want direct buyer leads",
//       highlighted: true,
//       features: [
//         "List residential or commercial property for sale",
//         "Direct exposure to verified buyers on OwnersLane",
//         "Receive genuine buyer inquiries only",
//         "Instant sharing of interested buyer contacts",
//         "Manage responses from OwnersLane dashboard",
//         "Phone Number Privacy to approve requests",
//         "Owner handles site visits & price negotiation",
//         "Full control over deal & sale agreement",
//         "Renew listing at ₹499 if still available",
//       ],
//     },
//     {
//       name: "Sale Postpaid",
//       badge: "Best Value",
//       badgeIcon: <Trophy size={16} className="text-yellow-500" />,
//       price: "₹ 9,999",
//       priceNote: "Pay only after successful sale",
//       tagline: "Best for owners who want OwnersLane to handle the entire selling process",
//       highlighted: false,
//       features: [
//         "No upfront charges",
//         "Flat fee regardless of property value",
//         "OwnersLane markets to serious buyers",
//         "Team manages buyer inquiries & calls",
//         "Field executives conduct site visits",
//         "Document verification & paperwork support",
//         "Owner involved only after token confirmation",
//         "Structured process — only genuine buyers",
//         "Smooth & hassle-free selling experience",
//       ],
//     },
//   ],
// };

// const PlansSection = () => {
//   const [activeTab, setActiveTab] = useState<"Rent" | "Sell">("Rent");
//   const plans = plansData[activeTab];

//   return (
//     <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
//       <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Our Plans</h2>
//       <p className="text-sm text-muted-foreground text-center mb-8">
//         Perfect for those who want to sell their property faster
//       </p>

//       <div className="flex justify-center mb-10">
//         <div className="border border-border rounded-full p-1 flex">
//           {(["Rent", "Sell"] as const).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors ${
//                 activeTab === tab
//                   ? "bg-primary text-primary-foreground"
//                   : "text-foreground hover:bg-muted"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//         {plans.map((plan) => (
//           <div
//             key={plan.name}
//             className={`rounded-2xl p-8 ${
//               plan.highlighted
//                 ? "bg-primary text-primary-foreground"
//                 : "bg-teal-light border border-border"
//             }`}
//           >
//             <div className="flex items-center justify-between mb-6">
//               <h3 className={`text-xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
//                 {plan.name}
//               </h3>
//               <span className="bg-background text-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                 {plan.badgeIcon} {plan.badge}
//               </span>
//             </div>
//             <div className="mb-4">
//               <span className={`text-3xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
//                 {plan.price}
//               </span>
//               <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
//                 {plan.priceNote}
//               </span>
//             </div>
//             <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
//               {plan.tagline}
//             </p>
//             <ul className="space-y-3">
//               {plan.features.map((f) => (
//                 <li
//                   key={f}
//                   className={`text-sm flex items-start gap-2 ${
//                     plan.highlighted ? "text-primary-foreground" : "text-foreground"
//                   }`}
//                 >
//                   <span className="mt-0.5">•</span>
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PlansSection;




import { useState } from "react";
import { Flame, Trophy } from "lucide-react";

type Plan = {
  name: string;
  badge: string;
  badgeIcon: JSX.Element;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
};

const plansData: Record<"Rent" | "Sell", Plan[]> = {
  Rent: [
    {
      name: "Rent Prepaid",
      badge: "Most Popular",
      badgeIcon: <Flame size={16} className="text-orange-500" />,
      price: "₹ 999",
      priceNote: "60 days validity",
      tagline: "Best for owners who want direct tenant leads",
      highlighted: true,
      features: [
        "List residential or commercial rental property",
        "Direct exposure to verified tenants on OwnersLane",
        "Receive genuine rental inquiries only",
        "Instant sharing of interested tenant contacts",
        "Manage responses from OwnersLane dashboard",
        "Phone Number Privacy to approve requests",
        "Owner handles site visits & rent negotiation",
        "Full control over tenant selection & agreement",
        "Renew listing at ₹499 if still available",
      ],
    },
    {
      name: "Rental Postpaid",
      badge: "Best Value",
      badgeIcon: <Trophy size={16} className="text-yellow-500" />,
      price: "₹ 4,999",
      priceNote: "Pay only after tenant finalization",
      tagline: "Best for owners who want OwnersLane to handle everything",
      highlighted: false,
      features: [
        "No upfront payment",
        "OwnersLane finds verified tenants for you",
        "Team manages all tenant inquiries & calls",
        "Field executives conduct property visits",
        "Owner introduced only after token confirmation",
        "Privacy protection from unwanted calls",
        "FREE Legal Protection (₹999 value)",
        "Rental agreement support included",
        "Smooth & hassle-free renting experience",
      ],
    },
  ],
  Sell: [
    {
      name: "Sale Prepaid",
      badge: "Most Popular",
      badgeIcon: <Flame size={16} className="text-orange-500" />,
      price: "₹ 999",
      priceNote: "90 days validity",
      tagline: "Best for owners who want direct buyer leads",
      highlighted: true,
      features: [
        "List residential or commercial property for sale",
        "Direct exposure to verified buyers on OwnersLane",
        "Receive genuine buyer inquiries only",
        "Instant sharing of interested buyer contacts",
        "Manage responses from OwnersLane dashboard",
        "Phone Number Privacy to approve requests",
        "Owner handles site visits & price negotiation",
        "Full control over deal & sale agreement",
        "Renew listing at ₹499 if still available",
      ],
    },
    {
      name: "Sale Postpaid",
      badge: "Best Value",
      badgeIcon: <Trophy size={16} className="text-yellow-500" />,
      price: "₹ 9,999",
      priceNote: "Pay only after successful sale",
      tagline: "Best for owners who want OwnersLane to handle the entire selling process",
      highlighted: false,
      features: [
        "No upfront charges",
        "Flat fee regardless of property value",
        "OwnersLane markets to serious buyers",
        "Team manages buyer inquiries & calls",
        "Field executives conduct site visits",
        "Document verification & paperwork support",
        "Owner involved only after token confirmation",
        "Structured process — only genuine buyers",
        "Smooth & hassle-free selling experience",
      ],
    },
  ],
};

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState<"Rent" | "Sell">("Rent");
  const plans = plansData[activeTab];

  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Our Plans</h2>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Perfect for those who want to sell their property faster
      </p>

      <div className="flex justify-center mb-10">
        <div className="border border-border rounded-full p-1 flex">
          {(["Rent", "Sell"] as const).map((tab) => (
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
              {plan.priceNote && (
                <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.priceNote}
                </span>
              )}
            </div>
            <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {plan.tagline}
            </p>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`text-sm flex items-start gap-2 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  <span className="mt-0.5">•</span>
                  <span>{f}</span>
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


