import React from 'react';
import ProjectCard from '../components/ProjectCard.tsx';
import projectsData from '../data/projects.json';

const Projects = () => {

  return (
    <div className="min-h-screen pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4 text-black">
            PROJECTS_DIRECTORY.EXE
          </h1>
          <div className="font-mono text-black">
            Explore my technical projects and creations
          </div>
        </div>

        <div className="mb-8">
          <div className="inline-block border-2 border-black text-black px-4 py-2">
            <span className="font-mono text-sm">
              📁 Found {projectsData.projects.length} projects |
              {projectsData.projects.filter(p => p.status === 'Complete').length} complete |
              {projectsData.projects.filter(p => p.status === 'In Progress').length} in progress
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;