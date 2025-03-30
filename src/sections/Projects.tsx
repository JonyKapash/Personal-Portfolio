import Image from "next/image";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import facebookClone from "@/assets/images/facebook.png";
import techWeb from "@/assets/images/techWeb.png";
import users from "@/assets/images/users.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "TechWeb",
    year: "2025",
    title: "Tech News Aggregator",
    results: [
      { title: "Fetches news from top tech sites" },
      { title: "Translates them into Hebrew using Gemini AI" },
      { title: "Saves them in a MongoDB database" },
      { title: "Built with Next.js, Tailwind, and MongoDB" },
    ],
    link: "https://techweb-yonatans-projects-a343b131.vercel.app",
    image: techWeb,
  },
  {
    company: "FaceBook",
    year: "2021",
    title: "Facebook Clone Homepage",
    results: [
      { title: "One of my first projects" },
      { title: "Made with Material UI" },
      { title: "Deployed on Vercel" },
    ],
    link: "https://lambent-travesseiro-4fc788.netlify.app",
    image: facebookClone,
  },
  {
    company: "Users Library",
    year: "2022",
    title: "Users Library App",
    results: [
      { title: "Created with vite, react, and firebase" },
      { title: "Fetching data from a custom API" },
      { title: "Users can add, edit, and delete users" },
    ],
    link: "https://userslibrary-77ea4.web.app",
    image: users,
  },
];
1;
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
