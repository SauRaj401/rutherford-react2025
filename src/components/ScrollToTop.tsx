import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top (or to hash target) on route change.
 * Ensures new pages start at the top when navigating from a scrolled page.
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // if there's a hash, try to scroll to the element with that id
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // small delay helps if the element is rendered after route change
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        // fallback to top if element not found
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 50);
      return;
    }

    // default: scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}