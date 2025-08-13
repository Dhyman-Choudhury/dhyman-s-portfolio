import { useState } from "react";
import { motion } from "framer-motion";

// Import images directly
import fitnexisImg from "../../assets/photo/fitnexis project ss.png";
import techoryImg from "../../assets/photo/Techory procet ss.png";
import greenHeavenImg from "../../assets/photo/GreenHeaven.png";

const projects = [
  {
    id: 1,
    name: "Fitnexis – Fitness Tracker App",
    image: fitnexisImg,
    techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
    shortDesc: "A fitness tracking web app with role-based dashboards for Admin, Trainer, and Members.",
    description:
      "Fitnexis is a MERN stack app with JWT authentication, Stripe payments, and role-based access for Admin, Trainer, and Members. Users can book trainers, track activities, join forums, and subscribe to newsletters.",
    liveLink: "https://fitness-web-app-e4c78.web.app",
    githubLink: "https://github.com/Dhyman-Choudhury/Fitnexis-client",
    challenges: "Implementing role-based routing and integrating Stripe payments securely.",
    improvements: "Add AI workout recommendations, social challenges, and mobile app version.",
  },
  {
    id: 2,
    name: "Techory – Tech Learning Platform",
    image: techoryImg,
    techStack: ["React", "Tailwind", "Firebase", "Express", "Mongodb"],
    shortDesc: "An online platform to learn coding with courses, quizzes, and progress tracking.",
    description:
      "Techory provides curated courses, coding challenges, and quizzes for developers. It uses Firebase for authentication and Firestore for data storage.",
    liveLink: "https://blog-web-6a483.web.app",
    githubLink: "https://github.com/Dhyman-Choudhury/Techory-client",
    challenges: "Creating real-time quiz scoring and tracking student progress.",
    improvements: "Add AI-powered course recommendations and community Q&A.",
  },
  {
    id: 3,
    name: "GreenHeaven – Plant E-Commerce",
    image: greenHeavenImg,
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    shortDesc: "An e-commerce platform for buying and selling plants with delivery tracking.",
    description:
      "GreenHeaven is a plant-focused online store with cart, payment, and delivery tracking. Built with MERN stack.",
    liveLink: "https://trees-care-app.web.app/",
    githubLink: "https://github.com/Dhyman-Choudhury/GreeNHeaven-web",
    challenges: "Integrating secure payment gateway and handling inventory updates.",
    improvements: "Add subscription for plant care tips and AR plant preview.",
  },
];

// ...rest of your component code unchanged


const fadeInVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === "right" ? 100 : -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className=" bg-gradient-to-b from-[#102336] to-[#1c404b] w-11/12 mx-auto my-10 rounded-xl px-10 py-16">
        <h2 className="text-2xl text-center text-gray-100 mb-10">My Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={fadeInVariants(index % 2 === 0 ? "right" : "left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex flex-col items-center mb-16"
        >
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-9/12 mx-auto rounded-xl object-cover"
          />

          {/* Tech Stack directly under image on right */}
          <div className="flex flex-wrap gap-2 mt-4 justify-end w-10/12">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-blue-500 text-blue-500 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Floating Card Overlapping Image on Left */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1  md:left-5 -bottom-30 md:-bottom-20 bg-[#051f28] p-6 rounded-lg shadow-md w-72 md:w-82 mb-10 md:mb-2 "
          >
            <p className="text-xl md:text-2xl font-bold text-white">{project.name}</p>
            <p className="text-sm text-gray-300 mt-2">{project.shortDesc}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-4 btn btn-outline btn-info"
            >
              View Details
            </button>
          </motion.div>
        </motion.div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-b from-[#102336] to-[#1c404b] rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-56 object-cover rounded mt-4"
            />
            <p className="mt-4">{selectedProject.description}</p>
            <div className="mt-4">
              <strong>Challenges:</strong>
              <p>{selectedProject.challenges}</p>
            </div>
            <div className="mt-4">
              <strong>Improvements:</strong>
              <p>{selectedProject.improvements}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-info hover:opacity-90"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:opacity-90 hover:bg-gray-900"
              >
                GitHub Client
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
