import React from "react";
import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="m-14 p-5 text-4xl text-center text-white">Projects</h1>
      {projects.map((project, i) => <ProjectsCard key={i} title={project.title} subtitle={ project.subtitle } desc={project.description} image={project.image } link={ project.link } />)}
    </div>
  );
}
