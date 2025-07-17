import React from 'react';
import ProjectCard from '../components/ProjectCard.tsx';
import projectsData from '../data/projects.json';

const Projects = () => {

  return (
    <div className="min-h-screen pt-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4 wireframe-heading text-green-400">
            PROJECTS_DIRECTORY.EXE
          </h1>
          <div className="font-mono text-green-300">
            Explore my technical projects and creations
          </div>
        </div>

        <div className="mb-8">
          <div className="inline-block border-2 border-green-400 px-4 py-2">
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

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-green-400 px-6 py-3">
            <div className="font-mono text-sm text-green-300">
              💡 Click on any project to view detailed information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;