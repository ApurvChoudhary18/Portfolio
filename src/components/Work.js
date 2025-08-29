// Work.js
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import SphereAnimation from './SphereAnimation';
import myPic from "../assets/myPic.png";
import giphee from "../assets/giphee.png";
import skillhunt from "../assets/skillhunt.png";
import fabric from "../assets/fabric.png";
import dalai from "../assets/dalai.png";
import ecomzy from "../assets/ecomzy.png"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('list');

  // IST time (same fix as Home.js)
  const [istTime, setIstTime] = useState('');
  useEffect(() => {
    const formatIST = () =>
      new Date()
        .toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        .replace('am', 'AM')
        .replace('pm', 'PM');
    setIstTime(formatIST());
    const id = setInterval(() => setIstTime(formatIST()), 30000);
    return () => clearInterval(id);
  }, []);

  // Hover preview state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  // Cursor follow with springs (safe across FM versions)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 110, damping: 22, mass: 0.7 });
  const y = useSpring(rawY, { stiffness: 110, damping: 22, mass: 0.7 });

  const workItems = [
    {
      client: 'GIPHEE',
      location: 'India',
      services: 'Fun & Creativity',
      year: 2025,
      category: 'Development',
      url: 'https://gif-generator-pr2z.vercel.app/',
      image: giphee,
    },
    {
      client: 'EDVORA',
      location: 'India',
      services: 'Design & Development',
      year: 2025,
      category: 'Design',
      url: 'https://top-courses-rouge-mu.vercel.app/',
      image: dalai,
    },
    {
      client: 'SKILLSTACK',
      location: 'India',
      services: 'Design & Development',
      year: 2025,
      category: 'Design',
      url: 'https://study-notion-orcin-gamma.vercel.app/',
      image: skillhunt,
    },
    {
      client: 'VOYAGE',
      location: 'India',
      services: 'Design & Development',
      year: 2025,
      category: 'Development',
      url: 'https://plan-with-apurv.vercel.app/',
      image: fabric,
    },
    {
      client: 'ECOMZY',
      location: 'India',
      services: 'Design & Development',
      year: 2025,
      category: 'Development',
      url: 'https://ecomzy-ebon.vercel.app/',
      image: ecomzy,
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? workItems
    : workItems.filter(item => item.category === activeFilter);

  const handleMouseMove = useCallback((e) => {
    // Keep preview offset from cursor so it doesn’t sit under pointer
    rawX.set(e.clientX + 36);
    rawY.set(e.clientY - 36);
  }, [rawX, rawY]);

  const handleEnter = useCallback((index) => {
    setHoveredIndex(index);
    setIsPreviewVisible(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsPreviewVisible(false);
    setHoveredIndex(null);
  }, []);

  const activeItem = hoveredIndex != null ? filteredItems[hoveredIndex] : null;

  return (
    <>
      <div className="work-section" onMouseMove={handleMouseMove}>
        <div className="work-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="work-header"
          >
            <h2>Creating next level digital products</h2>
            <div className="work-filters">
              <div
                className={`filter-pill ${activeFilter === 'All' ? 'active' : ''}`}
                onClick={() => setActiveFilter('All')}
              >
                All
              </div>
              <div
                className={`filter-pill ${activeFilter === 'Design' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Design')}
              >
                Design<span>{workItems.filter(item => item.category === 'Design').length}</span>
              </div>
              <div
                className={`filter-pill ${activeFilter === 'Development' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Development')}
              >
                Development<span>{workItems.filter(item => item.category === 'Development').length}</span>
              </div>
              <div className="work-grid-toggle">
                <div
                  className={`toggle-icon-pill ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  className={`toggle-icon-pill ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H10V10H4V4Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4H20V10H14V4Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14H10V20H4V14Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14H20V20H14V14Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {viewMode === 'list' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="work-item-list"
            >
              {filteredItems.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="work-item"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={handleLeave}
                >
                  <span className="work-item-title">{item.client}</span>
                  <div className="work-item-meta">
                    <div className="meta-item">
                      <span className="meta-label">Location</span>
                      <span className="meta-value">{item.location}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Services</span>
                      <span className="meta-value">{item.services}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">{item.year}</span>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="work-item-grid"
            >
              {filteredItems.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="work-item"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={handleLeave}
                >
                  <div className="work-item-image-container">
                    <img src={item.image} alt={item.client} className="work-item-image" />
                  </div>
                  <div className="work-item-details">
                    <h3 className="work-item-title">{item.client}</h3>
                    <div className="work-item-meta">
                      <div className="meta-item">
                        <span className="meta-label">Location</span>
                        <span className="meta-value">{item.location}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Services</span>
                        <span className="meta-value">{item.services}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Cursor-following preview (bigger + smoother) */}
        <AnimatePresence>
          {isPreviewVisible && activeItem && (
            <motion.div
              key={activeItem.client}
              className="hover-preview"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 24, mass: 0.7 }}
              style={{
                position: 'fixed',
                zIndex: 999999,
                pointerEvents: 'none',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 30px 90px rgba(0,0,0,0.28)',
                backdropFilter: 'blur(4px)',
                // IMPORTANT: using left/top so it works even on older FM versions
                left: x,
                top: y,
              }}
            >
              <motion.img
                src={activeItem.image}
                alt={activeItem.client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                style={{
                  display: 'block',
                  width: 560,   // bigger
                  height: 360,  // bigger
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.10) 100%)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="contact-footer-section">
        <div className="section3-container">
          <div className="section3-top">
            <img src={myPic} alt="Profile" className="profile-circle" />
            <div className="section3-heading">
              Let's work<br />together
            </div>
            <div className='get-in-touch'>
              <SphereAnimation
                color="#455ce9"
                hoverColor="#00008B"
                size={160}
                marginTop={40}
                label="Get in Touch"
                to="/contact"
              />
            </div>
            <div className="section3-contact-and-btn">
              <div className="contact-pills">
                <div className="contact-pill">apurvchoudhary188@gmail.com</div>
                <div className="contact-pill">+91-6201641238</div>
              </div>
            </div>
          </div>
          <div className="section3-bottom-bar">
            <div className="section3-version-time">v1.11 | {istTime} IST</div>
            <div className="section3-socials">
              <a href="https://medium.com/@apurvchoudhary188" target="_blank" rel="noreferrer" className="section3-social-link">Medium</a>
              <a href="https://www.instagram.com/apurv.not.found/" target="_blank" rel="noreferrer" className="section3-social-link">Instagram</a>
              <a href="https://x.com/apurvChy" target="_blank" rel="noreferrer" className="section3-social-link">Twitter</a>
              <a href="https://www.linkedin.com/in/apurv-choudhary-396baa17a/" target="_blank" rel="noreferrer" className="section3-social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
