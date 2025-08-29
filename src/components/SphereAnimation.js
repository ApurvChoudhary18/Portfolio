import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SphereAnimation({
  size = 180,
  color = "#000000",
  hoverColor = "#455ce9",
  marginTop = 0,
  label = "About Me",
  to = "/about" // default destination
}) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.08,
          backgroundColor: hoverColor,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
        }}
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
    </Link>
  );
}

const textStyles = {
  color: "white",
  fontWeight: "300",
  fontSize: "1.1rem",
};
