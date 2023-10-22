import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Programs Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      {/* Programs categories */}
      <div className="programsCategories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span> {program.details}</span>
            <div className="joinNow">
              <span>Join Now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
