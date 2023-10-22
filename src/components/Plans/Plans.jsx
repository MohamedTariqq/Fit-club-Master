import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans1-blur"></div>
      <div className="blur plans2-blur"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span className="middle">YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* Planscard */}
      <div className="plans" id="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benfits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
