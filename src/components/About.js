// About.js
import React, { useState, useEffect } from 'react';
import myPic from "../assets/myPic.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SphereAnimation from './SphereAnimation';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

  return (
    <div className="w-full bg-white text-black">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 min-w-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            I help brands stand out in a<br /> crowded digital world.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
          >
            I develop tailor-made software solutions by applying a comprehensive skill set to every project. My commitment to exceptional quality means I'm always pushing the boundaries of what's possible in development.<br />
            <span className="italic text-gray-400">Always exploring...</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-16"
          >
            I can help you with
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <motion.div variants={itemVariants}>
              <div className="text-gray-400 font-medium mb-2">01</div>
              <div className="h-px bg-gray-300 w-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">Design</h3>
              <p className="text-gray-600">
              I've consistently delivered powerful, user-friendly websites, and I can do the same for you. <br />
                <span className="italic text-gray-500">
                  (Specializing in MERN stack development since 2023)
                </span>
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={itemVariants}>
              <div className="text-gray-400 font-medium mb-2">02</div>
              <div className="h-px bg-gray-300 w-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
              I design and develop scalable websites from scratch that blend smoothly with visuals. My focus is on micro animations, seamless transitions, and meaningful interactions.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={itemVariants}>
              <div className="text-gray-400 font-medium mb-2">03</div>
              <div className="h-px bg-gray-300 w-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">
                ✦ The full package
              </h3>
              <p className="text-gray-600">
              From concept to implementation, I bring a project to life. My strong sense of design and development skills enable me to create outstanding digital experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer / CTA Section */}
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

export default About;
