import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/bookings">About</NavLink></li>
      <li><NavLink to="/blogs">Education</NavLink></li>
      <li><NavLink to="/contact">Skills</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 navbar px-20 bg-[var(--background)] text-[var(--text)]">
      <div className="navbar-start">
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
        <div className="flex items-center gap-2">
          <img className="w-32" src={logo} alt="Logo" />
          <NavLink to="/" className="text-xl font-bold">DocTalk</NavLink>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
       
<label className="toggle text-base-content">
  <input type="checkbox"  onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'} />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>

        <button className="btn btn-primary">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
