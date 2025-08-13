import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://portfolio-server-azure-three.vercel.app/send-email",
        form
      );

      if (response?.data?.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message: " + response.data.message);
      }
    } catch (err) {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className=" flex justify-center items-center px-6 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#051f28] rounded-3xl p-8 text-white flex flex-col justify-center shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-2">Dhyman Choudhury</h2>
          <p className="text-xl text-blue-400 mb-6">Fullstack Web Developer</p>
          <p className="mb-6 text-gray-300">
            MERN stack developer passionate about clean code and great UI. Open to projects—feel free to contact me anytime!
          </p>

          <div className="flex items-center mb-4 space-x-3">
            <FaPhone className="text-blue-400" />
            <a href="tel:+880123456789" className="hover:underline">
              +880 1234 567 89
            </a>
          </div>

          <div className="flex items-center mb-6 space-x-3">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:dhyman@example.com" className="hover:underline">
              dhyman@example.com
            </a>
          </div>

          <div className="flex space-x-6 text-2xl">
            <a
              href="https://x.com/Dhyman2029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/dhimana.caudhuri.2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/dhyman-ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Dhyman-Choudhury"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Card - Form */}
        <motion.div
          className="bg-[#051f28] p-8 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Contact with me to <span className="text-blue-400">sizzle</span> your project
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Feel free to contact me if having any questions. I'm available for new
            projects or just for chatting.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <motion.input
                custom={0}
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full md:w-1/2 rounded-full bg-[#102336] text-white border border-gray-600 placeholder-gray-400"
                required
              />
              <motion.input
                custom={1}
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full md:w-1/2 rounded-full bg-[#102336] text-white border border-gray-600 placeholder-gray-400"
                required
              />
            </div>

            <motion.input
              custom={2}
              variants={slideFromLeft}
              initial="hidden"
              animate="visible"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="input input-bordered w-full rounded-full bg-[#102336] text-white border border-gray-600 placeholder-gray-400"
              required
            />

            <motion.textarea
              custom={3}
              variants={slideFromLeft}
              initial="hidden"
              animate="visible"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Work Description..."
              className="textarea textarea-bordered w-full h-32 rounded-2xl resize-none bg-[#102336] text-white border border-gray-600 placeholder-gray-400"
              required
            ></motion.textarea>

            <motion.button
              custom={4}
              variants={slideFromLeft}
              initial="hidden"
              animate="visible"
              type="submit"
              className="btn w-full rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:opacity-90"
            >
              Submit
            </motion.button>

            {status && (
              <motion.p
                custom={5}
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                className={`text-center mt-2 ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
