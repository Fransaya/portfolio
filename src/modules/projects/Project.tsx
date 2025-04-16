import React from "react";

import { Project } from "../../components/cardProject/ProjectCard";
import ProjectCard from "../../components/cardProject/ProjectCard";

import projects from "../../assets/json/projects.json";

export const ProjectComponent: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {(projects as Project[]).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};
