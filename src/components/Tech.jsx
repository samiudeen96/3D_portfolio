import React from "react";

// import { BallCanvas } from './canvas'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";



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
            <motion.div
              animate={{
                y: index % 2 === 0 ? [0, -3, 0] : [0, 3, 0], // Alternate directions
              }}
              transition={{
                duration: 2, // Time taken for one cycle
                repeat: Infinity, // Infinite loop
                ease: "easeInOut", // Smooth transition
              }}
            >
              <img src={icon} alt={name} className="w-12 h-12 object-contain" />
            </motion.div>
          </div>
          <div className="back text-center text-[#dfd9ff] font-medium">{name}</div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const Tech = () => {
  return (
    <div className={`${styles.padding} w-full h-auto inset-0 mt-10  z-[10] flipCard`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>

      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-5 pt-10">
        {technologies.map((tech, index) => (
          <div className="w-20 h-20" key={index}>
            <TechCard index={index} {...tech} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
