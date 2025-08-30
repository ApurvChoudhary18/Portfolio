import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ restartGreeting, setTransitionPage }) => {
  const location = useLocation();
  
  // Pages with light backgrounds
  const lightPages = ['/work', '/about'];
  const isDarkMode = !lightPages.includes(location.pathname);

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <nav>
          <ul className='nav-links'>
            {/* Home → no transition */}
            <li>
              <NavLink 
                to={'/'} 
                onClick={restartGreeting}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Code With Apurv
              </NavLink>
            </li>

            {/* Work → trigger transition */}
            <li>
              <NavLink 
                to={'/work'}
                onClick={() => setTransitionPage("Work")}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Work
              </NavLink>
            </li>

            {/* About → trigger transition */}
            <li>
              <NavLink 
                to={'/about'}
                onClick={() => setTransitionPage("About")}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                About
              </NavLink>
            </li>

            {/* Contact → trigger transition */}
            <li>
              <NavLink 
                to={'/contact'}
                onClick={() => setTransitionPage("Contact")}
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
