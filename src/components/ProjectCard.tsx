import React from 'react';
import { Link } from 'react-router-dom';

type Project = {
  id: string | number;
  thumbnail: React.ReactNode;
  status: 'Complete' | 'In Progress' | string;
  title: string;
  description: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColor = project.status === 'Complete' ? 'text-green-400' : 'text-yellow-400';
  const statusIcon = project.status === 'Complete' ? '✅' : '⏳';

  return (
    <Link
      to={`/projects/${project.id}`}
      className="block border-2 border-black bg-white text-black transition-all duration-300 group wireframe-card hover:bg-black hover:text-white"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.thumbnail}</div>
          <div className={`font-mono text-sm ${statusColor} block group-hover:hidden transition-all`}>
            {statusIcon} {project.status}
          </div>
          <div className="font-mono text-base text-white hidden group-hover:block transition-all">
            Click for more details!
          </div>
        </div>

        <h3 className="text-xl font-mono mb-2 wireframe-text text-black group-hover:text-white">
          {project.title}
        </h3>

        <p className="text-sm mb-4 text-black group-hover:text-white">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-black text-black text-xs font-mono group-hover:border-white group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;