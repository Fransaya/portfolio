import React from "react";

import { Project } from "../../components/cardProject/ProjectCard";
import ProjectCard from "../../components/cardProject/ProjectCard";

import projects from "../../assets/json/projects.json";

export const ProjectComponent: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-4xl font-bold text-white text-center mb-12 relative">
        <span className="relative z-10">Mis Proyectos</span>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-500 rounded-full"></div>
      </h1>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects as Project[]).map((project, i) => (
            <div
              key={i}
              className={`transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                i % 2 === 0 ? "md:translate-y-8" : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
