import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, expIn } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const AboutMe = () => {
  return (
    <>
      <div className="pb-10">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 text-secondary text-[17px] leading-[30px]`}
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Replace service cards with experience cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-5 mt-10"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
        >
          {expIn.map((item) => (
            <motion.div
              key={item.name}
              className="bg-tertiary rounded-md transition-all duration-300 p-5 relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${item.fromColor} to-[#1d1836] rounded-br-md z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className={`p-3 ${item.bgColor} ${item.textColor} rounded-md`}
                  >
                    {/* Icons based on category */}
                    {item.category === "frontend" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L4.5 12l5.25-5m4.5 10l5.25-5-5.25-5"
                        />
                      </svg>
                    )}
                    {item.category === "fullstack" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7h18M3 12h18m-6 5H3"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold ${item.textColor}`}>
                    {item.name}
                  </h3>
                </div>
                <p className="mb-4 text-secondary">{item.desc}</p>
                <ul className="text-sm text-secondary space-y-1">
                  {item.points.map((li, index) => (
                    <li key={index}>{li.list}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutMe, "aboutMe");