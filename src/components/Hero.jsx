import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = ({setShowContent}) => {
  const [isVisible, setIsVisible] = useState(true); 
  // console.log("Hero component loaded", );

  // const handleScroll = useCallback(() => {
  //   if (window.scrollY > 50) {
  //     setIsVisible(false);
  //     setShowContent();
  //   } else {
  //     setIsVisible(true);
  //     setShowContent();
  //   }
  // }, [setShowContent]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  useEffect(() => {
    const handleScroll = () => {
      // Hide mouse when scrolling down

      const shouldShowContent = window.scrollY > 50  

      // if (window.scrollY > 50) {
      //   console.log("Scrolling - Setting showContent:", window.scrollY > 50);
      //   setShowContent(true); // true
      //   setIsVisible(false);

      // } else {
      //   setShowContent(false); // false
      //   setIsVisible(true);
      //   // console.log("Scrolling - Setting showContent:", window.scrollY < 50);

      // }
      if(shouldShowContent !== !isVisible) {  //when shouldShowContent !== false
        setIsVisible(!shouldShowContent)
        setShowContent(shouldShowContent); 
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, setShowContent]);

  return (
    <section className="relative w-full sm:h-full h-fit sm:px-16 px-6 sm:pt-16 pt-10">
      <div className={`flex flex-row items-start gap-5`}>
        {/* Left-side indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-40 h-30 violet-gradient" />
        </div>

        {/* Text section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Samiudeen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />{" "}
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* 3D Model Section */}
      <div className="flex justify-center h-[40vh]">
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <ComputersCanvas />
        </div>
      </div>

      <div
        className={`w-full flex justify-center items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <a href="#about">
          <div className=" mouse w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
