import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaTools,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPostman, SiExpress, SiNextdotjs, SiFirebase } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "CSS / Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress  className="text-gray-300" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-700" /> },
  { name: "Github", icon: <FaGithub className="text-gray-300" /> },
];

const cardVariants = {
  offscreenLeft: { opacity: 0, x: -100 },
  offscreenRight: { opacity: 0, x: 100 },
  onscreen: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 px-6 md:px-16 bg-[var(--background)] text-[var(--text)] max-w-6xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-12 text-center">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => {
          const isEven = index % 2 === 0;
          const initialVariant = isEven ? "offscreenLeft" : "offscreenRight";

          return <AnimatedSkillCard key={skill.name} skill={skill} initialVariant={initialVariant} />;
        })}
      </div>
    </section>
  );
};

const AnimatedSkillCard = ({ skill, initialVariant }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={controls}
      variants={cardVariants}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-r from-[#0c1c2b] to-[#102a32] rounded-xl shadow-lg p-6 cursor-pointer select-none flex flex-col items-center gap-4"
    >
      <div className="text-5xl">{skill.icon}</div>
      <p className="text-xl font-semibold">{skill.name}</p>
    </motion.div>
  );
};

export default Skills;
