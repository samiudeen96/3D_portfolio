// export const textVariant = (delay) => {
//     return {
//       hidden: {
//         y: -50,
//         opacity: 0,
//       },
//       show: {
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           duration: 1.25,
//           delay: delay,
//         },
//       },
//     };
//   };
  
  // export const fadeIn = (direction, type, delay, duration) => {
  //   return {
  //     hidden: {
  //       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
  //       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  //       opacity: 0,
  //     },
  //     show: {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: type,
  //         delay: delay,
  //         duration: duration,
  //         ease: "easeOut",
  //       },
  //     },
  //   };
  // };

  export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration: 1.25,
      },
    },
  };
};

  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };