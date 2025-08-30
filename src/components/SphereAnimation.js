import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SphereAnimation({
  size = 180,
  color = "#000000",
  hoverColor = "#455ce9",
  marginTop = 0,
  label = "About Me",
  to = "/about",
  onTriggerTransition // 👈 new prop
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // ❌ stop default navigation

    if (onTriggerTransition) {
      onTriggerTransition(label); // ✅ trigger page transition overlay
    }

    // ✅ delay navigation until transition overlay runs
    setTimeout(() => {
      navigate(to);
    }, 1000); // match PageTransition duration
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.08,
        backgroundColor: hoverColor,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5 },
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        marginTop,
      }}
    >
      <span style={textStyles}>{label}</span>
    </motion.div>
  );
}

const textStyles = {
  color: "white",
  fontWeight: "300",
  fontSize: "1.1rem",
};
