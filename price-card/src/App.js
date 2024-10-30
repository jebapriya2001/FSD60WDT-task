import React from "react";
import PriceCard from "./PriceCard";
import "./App.css";

const plans = [
  {
    title: "FREE",
    price: "$0",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ],
    unavailableFeatures: [4, 5, 6, 7]
  },
  {
    title: "PLUS",
    price: "$9",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ],
    unavailableFeatures: [7]
  },
  {
    title: "PRO",
    price: "$49",
    features: [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ],
    unavailableFeatures: []
  }
];

function App() {
  return (
    <div className="price-cards">
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          title={plan.title}
          price={plan.price}
          features={plan.features}
          unavailableFeatures={plan.unavailableFeatures}
        />
      ))}
    </div>
  );
}

export default App;
