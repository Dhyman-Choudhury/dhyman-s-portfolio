import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import educationPic from "../../assets/photo/education.jpg"; // replace with your image path

const educationData = [
  {
    degree: "Bachelor of Science in Chemical Engineering and Polymer Science",
    institution: "Shahjalal University of Science and Technology",
    year: "Graduated May 2024",
    details: "Completed with strong focus on process design, polymer technology, and environmental engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Brahmanbaria Government College",
    year: "Completed 2018",
    details: "Science major with focus on Physics, Chemistry, and Mathematics.",
  },
];

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Education = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inViewLeft) controlsLeft.start("visible");
    if (inViewRight) controlsRight.start("visible");
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-[#102336] to-[#1c404b] w-11/12 rounded-xl mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-[var(--background)] text-[var(--text)]"
    >
      {/* Left Content - Animated from left */}
      <motion.div
        ref={refLeft}
        initial="hidden"
        animate={controlsLeft}
        variants={leftVariants}
        
      >
        <h2 className="text-2xl font-bold mb-10">Educational Qualification</h2>
        {educationData.map(({ degree, institution, year, details }, idx) => (
          <div key={idx} className="space-y-2 mb-10">
            <p className="text-xl font-medium">{degree}</p>
            <p className="text-teal-500 font-medium">{institution}</p>
            <p className="text-sm italic">{year}</p>
            <p className="text-base leading-relaxed mt-2">{details}</p>
          </div>
        ))}
      </motion.div>

      {/* Right Content - Animated from right */}
      <motion.div
        ref={refRight}
        initial="hidden"
        animate={controlsRight}
        variants={rightVariants}
        className="flex justify-center"
      >
        <img
          src={educationPic}
          alt="Education"
          className="rounded-2xl shadow-2xl w-full max-w-md h-[600px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Education;
