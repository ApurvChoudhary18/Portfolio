import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ restartGreeting }) => {
  const location = useLocation();
  
  // Pages with light backgrounds
  const lightPages = ['/work', '/about'];
  const isDarkMode = !lightPages.includes(location.pathname);

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <nav>
          <ul className='nav-links'>
            <li>
              <NavLink 
                to={'/'} 
                onClick={restartGreeting} 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Code With Apurv
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/work'}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/about'}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/contact'}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;