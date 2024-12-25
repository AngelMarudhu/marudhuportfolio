import React from "react";
import "../CSS/MainPage.css";
import images from "../Utils/Index";
import * as motion from "motion/react-client";
import { AnimatePresence, useInView } from "framer-motion";

const Main = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "MarudhuPandiyan S";
  const headline = "Crafting Code, Building Dreams";

  return (
    <section className="top">
      <h2 className="top_heading">
        <AnimatePresence>
          {headline.split("").map((char, i) => (
            <motion.span
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -1 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </h2>

      <div className="hero">
        <div className="hero_intro">
          <h2 className="hero_name">
            Hi There! It's{" "}
            <span className="hero_name_tag">
              <AnimatePresence>
                {text.split("").map((char, i) => (
                  <motion.span
                    ref={ref}
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    exit="hidden"
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
                  >
                    {char === " " ? <span>&nbsp;</span> : char}
                  </motion.span>
                ))}
              </AnimatePresence>
            </span>
          </h2>

          <div className="hero_profile">
            <p>
              Experienced <span>MERN</span> Developer with over{" "}
              <span>1 year</span> of hands-on experience, skilled in crafting
              robust and intuitive applications. Actively seeking a challenging
              opportunity to leverage my development expertise and technical
              skills in building impactful solutions.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="hero_welcome"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
