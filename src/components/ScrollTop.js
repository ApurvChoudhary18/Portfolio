// components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // har route change pe top pe scroll
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
