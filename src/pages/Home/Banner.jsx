import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import photo from "../../assets/photo/pic.jpg";

const Banner = () => {
  const socialLinks = [
    {
      href: "https://github.com/Dhyman-Choudhury",
      icon: <AiFillGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/dhyman-ch",
      icon: <AiFillLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/Dhyman2029",
      icon: <AiOutlineTwitter />,
      label: "Twitter",
    },
    {
      href: "https://web.facebook.com/dhimana.caudhuri.2025",
      icon: <AiFillFacebook />,
      label: "Facebook",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--background), var(--primary), var(--secondary))",
        color: "var(--text)",
      }}
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I’m <span className="text-[#3ABFF8]">Dhyman</span>
        </h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-[#FFF5F2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          
          MERN Stack Developer
        </motion.h2>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-xl"
          style={{ color: "var(--text)" }}
        >
          I specialize in creating visually appealing, high-performing websites
          using{" "}
          <span style={{ color: "var(--primary)" }}>React</span>, modern
          JavaScript, and responsive design principles. Let’s bring your ideas
          to life.
        </p>
        <motion.button
          className="btn btn-outline btn-info px-6 py-3 rounded-lg shadow-lg transition transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Download Resume
        </motion.button>

        {/* Social Media Buttons */}
        <div className="flex space-x-5 mt-6">
          {socialLinks.map(({ href, icon, label }) => {
            let colorClass = "";
            switch (label) {
              case "GitHub":
                colorClass = "text-gray-900 bg-white"; // GitHub black/gray
                break;
              case "LinkedIn":
                colorClass = "text-white bg-blue-600"; // LinkedIn blue
                break;
              case "Twitter":
                colorClass = "text-white bg-[#1DA1F2]"; // Twitter blue
                break;
              case "Facebook":
                colorClass = "text-white bg-[#1877F2] "; // Facebook blue
                break;
              default:
                colorClass = "text-[#F5BABB] hover:text-[#e27583]";
            }
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center justify-center text-3xl transition-colors duration-300 ${colorClass} rounded-full w-10 h-10`}
              >
                {icon}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right Content: Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center z-10"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={photo}
          alt="Your Portrait"
          className="w-70 h-70 object-center object-cover rounded-full shadow-2xl border-4"
        />
      </motion.div>

      {/* Decorative Glow Effects */}
      <div
        className="absolute top-0 left-0 w-72 h-72 opacity-20 blur-3xl rounded-full"
        style={{ backgroundColor: "var(--secondary)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 opacity-20 blur-3xl rounded-full"
        style={{ backgroundColor: "var(--primary)" }}
      ></div>
    </section>
  );
};

export default Banner;
