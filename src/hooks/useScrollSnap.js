import { useEffect } from "react";

export const useScrollSnap = () => {
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      const sections = document.querySelectorAll("section");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= 0 && nextIndex < sections.length) {
          sections[nextIndex].scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
};
