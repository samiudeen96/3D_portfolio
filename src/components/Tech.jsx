import React from "react";

// import { BallCanvas } from './canvas'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";


const TechCard = ({ icon, name, index }) => {
  return (
    <motion.section
    variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
    >
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="group card-container cursor-pointer"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card group-hover:rotate-y-180"
      >
        <div className="front">
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        </div>
        <div className="back text-center font-bold">{name}</div>
      </div>
    </motion.div>
    </motion.section>
  );
};

const Tech = () => {
  return (
    <div className="w-full h-auto inset-0 z-[10] flipCard">
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={index}>
            <TechCard  index={index} {...tech} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
