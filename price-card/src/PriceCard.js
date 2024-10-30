import React from "react";
import "./PriceCard.css";

const PriceCard = ({ title, price, features, unavailableFeatures }) => {
  return (
    <div className="price-card">
      <h3>{title}</h3>
      <h4>{price}/month</h4>
      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className={unavailableFeatures.includes(index) ? "unavailable" : ""}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PriceCard;
