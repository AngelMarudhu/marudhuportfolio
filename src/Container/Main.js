import React from "react";
import "../CSS/MainPage.css";
import images from "../Utils/Index";
import { motion } from "motion/react";

const Main = () => {
  return (
    <section className="top">
      <div className="hero">
        <div className="hero_intro">
          <h2 className="hero_name">
            Hi There! It's{" "}
            <span className="hero_name_tag">MarudhuPandiyan S</span>
          </h2>

          <div className="hero_profile">
            <p>
              Experienced <span>MERN</span> Developer with <span>1+</span> years
              of practical experience, adept at crafting robust and intuitive
              applications. Pursuing a challenging opportunity to apply my
              extensive development background and technical skills as a
              MERN-Stack Developer
            </p>
          </div>
        </div>

        <motion.div
          className="hero_welcome"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
        >
          <h4 className="welcome">Mern Stack Developer</h4>
          <img
            className="hero_pic"
            src={images.assets.myPic}
            alt="mypicture"
          ></img>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
