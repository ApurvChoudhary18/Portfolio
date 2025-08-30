import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';

import SphereAnimation from "../components/SphereAnimation";
import myPic from "../assets/myPic.png";
import brown from "../assets/brown.jpg";
import hey from "../assets/hey.jpg"
import anni from "../assets/anni.jpg"
import main1 from "../assets/main1.png"
import black4 from "../assets/black4.jpg"

// Thumbs for preview
import skillhunt from "../assets/skillhunt.png";
import dalai from "../assets/dalai.png";
import fabric from "../assets/fabric.png";

const Home = () => {
  // --- Hover preview state for RECENT WORK ---
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const prevIndexRef = useRef(null);

  // Faster, snappier cursor-follow springs
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 240, damping: 20, mass: 0.55 });
  const y = useSpring(rawY, { stiffness: 240, damping: 20, mass: 0.55 });

  // Only 3 works here
  const recentItems = [
    { title: "SKILLSTACK", meta: "Design & Development", image: skillhunt, to: "/work" },
    { title: "EDVORA",  meta: "Design and Development", image: dalai,    to: "/work" },
    { title: "VOYAGE",     meta: "Design and Development", image: fabric,   to: "/work" },
  ];

  // --- IST Time ---
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    });

    const update = () => {
      setIstTime(
        formatter.format(new Date()).replace(' am', ' AM').replace(' pm', ' PM')
      );
    };

    // Initial
    update();

    // Align update to next minute
    const now = new Date();
    const msToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let interval;
    const timeout = setTimeout(() => {
      update();
      interval = setInterval(update, 60 * 1000);
    }, msToNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      // Tiny offset so it doesn't sit under the cursor
      rawX.set(e.clientX + 32);
      rawY.set(e.clientY - 28);
    },
    [rawX, rawY]
  );

  const handleEnter = useCallback(
    (index) => {
      prevIndexRef.current = hoveredIndex;
      setHoveredIndex(index);
      setIsPreviewVisible(true);
    },
    [hoveredIndex]
  );

  const handleLeave = useCallback(() => {
    setIsPreviewVisible(false);
    setHoveredIndex(null);
  }, []);

  const activeItem = hoveredIndex != null ? recentItems[hoveredIndex] : null;

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Section 1 - Banner with Badge */}
      <div className="home-banner-container">
        <img src={black4} alt='img' className='home-banner' />

        {/* Located badge overlay */}
        <div className="location-badge">
          <span className="location-badge-text">
            Located<br/>in<br/>India
          </span>
          <span className="location-badge-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="globe-svg spin"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="#3e3e3e"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" stroke="#3e3e3e" strokeWidth="1.5" fill="none"/>
              <ellipse cx="12" cy="12" rx="5" ry="10" stroke="#3e3e3e" strokeWidth="1.5" fill="none"/>
              <ellipse cx="12" cy="12" rx="10" ry="5" stroke="#3e3e3e" strokeWidth="1.5" fill="none"/>
            </svg>
          </span>
        </div>

        {/* Hero Text */}
        <div className="hero-text-container">
          <svg className="hero-arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 17V7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7H17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="hero-subtext">
            Freelance
            <br />
            Designer & Developer
          </div>
        </div>

        {/* Large Running Name Section - FIXED */}
        <div className="hero-name-container">
          <div className="marquee">
            <h1 className="hero-name">
              Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span>
            </h1>
            <h1 className="hero-name">
              Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span> — Apurv <span className="hero-name-last">Choudhary</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-2-wrapper">
        <div className="section-2a">
          <p>
          I craft digital experiences that stand apart in today’s era. My designs define trends, using bold, refined ideas. Your brand stays future-ready.
          </p>
        </div>
        <div className="section-2b">
          <p>
            The combination of my passion for design, code & interaction positions me in a unique place
            in the web design world.
          </p>
        </div>
      </div>

      {/* Sphere */}
      <div className='sphere'>
        <SphereAnimation label="About Me" to="/about" />
      </div>

      {/* Recent Work */}
      <div className="recent-work-wrapper">
        <div className="recent-label">RECENT WORK</div>
        <div className="recent-divider"></div>

        {[0,1,2].map((i) => (
          <React.Fragment key={recentItems[i].title}>
            <Link
              to={recentItems[i].to}
              className="recent-work-item recent-row"
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
            >
              <span className="recent-title">{recentItems[i].title}</span>
              <span className="recent-meta">{recentItems[i].meta}</span>
            </Link>
            <div className="recent-divider"></div>
          </React.Fragment>
        ))}
      </div>

      {/* Cursor-following preview — persistent container, instant switch */}
      <AnimatePresence initial={false}>
        {isPreviewVisible && activeItem && (
          <motion.div
            className="hover-preview"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.6 }}
            style={{
              position: 'fixed',
              zIndex: 999999,
              pointerEvents: 'none',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 30px 90px rgba(0,0,0,0.28)',
              backdropFilter: 'blur(4px)',
              left: x,
              top: y,
            }}
          >
            {/* Image switch without container remount — zero wait */}
            <div style={{ position: 'relative', width: 560, height: 360 }}>
              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={activeItem.title}               // switch key -> crossfade
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12, ease: 'linear' }}  // super quick swap
                />
              </AnimatePresence>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.10) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 3 - Footer/Contact */}
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
  );
};

export default Home;
