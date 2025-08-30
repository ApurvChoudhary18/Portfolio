import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = ({ pageName, onFinish }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pageName) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onFinish(); // reset after animation
      }, 1200); // duration
      return () => clearTimeout(timer);
    }
  }, [pageName, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-transition-overlay"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            className="page-transition-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {pageName}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
