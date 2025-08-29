// components/AnimatedLink.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 300ms animation ke baad navigate karega
    setTimeout(() => navigate(to), 300);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileTap={{ scale: 0.95, opacity: 0.7 }} // click animation
      whileHover={{ scale: 1.05 }}           // hover animation
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLink;
