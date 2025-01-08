"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState("home");

  const { ref: homeRef, inView: homeIsVisible } = useInView({ threshold: 0.2 });
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    threshold: 0.2,
  });
  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (homeIsVisible) setActive("home");
    if (projectsIsVisible) setActive("projects");
    if (aboutIsVisible) setActive("about");
    if (contactIsVisible) setActive("contact");
  }, [homeIsVisible, projectsIsVisible, aboutIsVisible, contactIsVisible]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
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

      <div ref={homeRef} className="absolute top-0" />
      <div
        ref={projectsRef}
        className="absolute top-[170vh] md:top-[150vh] lg:top-[160vh]"
      />
      <div
        ref={aboutRef}
        className="absolute top-[510vh] md:top-[430vh] lg:top-[410vh]"
      />
      <div
        ref={contactRef}
        className="absolute top-[680vh] md:top-[440vh] lg:top-[440vh]"
      />
    </>
  );
};
