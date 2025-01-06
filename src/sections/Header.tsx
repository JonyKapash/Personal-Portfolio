"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    setActive("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (active === sectionId) return;
    setActive(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className={`nav-item ${
            active === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
          className={`nav-item ${
            active === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          className={`nav-item ${
            active === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className={`nav-item ${
            active === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
