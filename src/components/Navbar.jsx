import React, { useEffect, useState } from 'react';
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineTool,
  AiOutlineProject,
  AiOutlineMail
} from 'react-icons/ai';
import logo from '../assets/ico3-removebg-preview.png';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for navbar height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base link style
  const linkStyle = "btn btn-outline border-teal-400 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 gap-2";
  const activeStyle = "bg-purple-500 text-white border-purple-500";

  const links = (
    <>
      <li>
        <a href="#home" className={`${linkStyle} ${activeSection === 'home' ? activeStyle : ''}`}>
          <AiFillHome /> Home
        </a>
      </li>
      <li>
        <a href="#about" className={`${linkStyle} ${activeSection === 'about' ? activeStyle : ''}`}>
          <AiOutlineUser /> About
        </a>
      </li>
      <li>
        <a href="#skills" className={`${linkStyle} ${activeSection === 'skills' ? activeStyle : ''}`}>
          <AiOutlineTool /> Skills
        </a>
      </li>
      <li>
        <a href="#education" className={`${linkStyle} ${activeSection === 'education' ? activeStyle : ''}`}>
          <AiOutlineBook /> Education
        </a>
      </li>
      <li>
        <a href="#projects" className={`${linkStyle} ${activeSection === 'projects' ? activeStyle : ''}`}>
          <AiOutlineProject /> Projects
        </a>
      </li>
      <li>
        <a href="#contact" className={`${linkStyle} ${activeSection === 'contact' ? activeStyle : ''}`}>
          <AiOutlineMail /> Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 navbar px-5 md:px-10 lg:px-20 bg-gradient-to-r from-[#3A646F] to-[#264F79] dark:bg-[var(--background)] text-[var(--text)] shadow-lg backdrop-blur z-50">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img className="w-14" src={logo} alt="Logo" />
          <a href="#home" className="text-xl font-bold">DHYMAN</a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          {/* Sun */}
          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
          {/* Moon */}
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        <button className="btn btn-outline btn-info rounded-lg">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
