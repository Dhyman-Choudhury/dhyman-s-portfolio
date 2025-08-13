import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import logo from '../assets/ico3-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="bg-[#102336] text-white py-4 px-8 flex justify-between items-center w-full">
      {/* Left side: Logo + Copyright */}
      
      <div className="flex items-center">
        <img
          src={logo} // put your logo in public/images folder
          alt="Logo"
          className="h-10 w-10 object-contain"
        />
        <a href="#home" className="text-xl font-bold">DHYMAN</a>
      </div>
      
        <span>© 2025</span>

      {/* Right side: Social Icons */}
      <div className="flex space-x-6 text-xl">
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
          aria-label="Twitter"
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
    </footer>
  );
};

export default Footer;
