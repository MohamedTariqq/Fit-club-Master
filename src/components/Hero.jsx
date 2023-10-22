import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import heroImage from "../assets/hero_image.png";
import heroImageBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* THE BEST AD */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* HERO hEADING  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* FIGURES */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* Hero Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        {/* Heart Rate */}
        <motion.div
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* HERO Images */}
        <img src={heroImage} alt="" className="heroImage" />
        <motion.img
          whileInView={{ right: "20rem" }}
          initial={{ right: "11rem" }}
          transition={transition}
          src={heroImageBack}
          alt=""
          className="heroImageBack"
        />
      </div>
      {/* Calories */}
      <motion.div
        whileInView={{ right: "28rem" }}
        initial={{ right: "37rem" }}
        transition={transition}
        className="calories"
      >
        <img src={calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 Kcal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
