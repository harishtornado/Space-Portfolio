import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Nextjs Portfolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam sapiente repellat exercitationem nam id veritatis odit molestias perspiciatis eos."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam sapiente repellat exercitationem nam id veritatis odit molestias perspiciatis eos."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam sapiente repellat exercitationem nam id veritatis odit molestias perspiciatis eos."
        />
      </div>
    </div>
  );
};

export default Projects;
