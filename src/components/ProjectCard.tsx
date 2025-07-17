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
      className="block border-2 border-green-400 bg-black text-green-400 transition-all duration-300 group wireframe-card hover:bg-green-400 hover:text-black"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.thumbnail}</div>
          <div className={`font-mono text-sm ${statusColor} group-hover:text-black`}>
            {statusIcon} {project.status}
          </div>
        </div>

        <h3 className="text-xl font-mono mb-2 wireframe-text text-green-400 group-hover:text-black">
          {project.title}
        </h3>

        <p className="text-sm mb-4 text-green-300 group-hover:text-black">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-green-400 text-green-400 text-xs font-mono group-hover:border-black group-hover:text-black"
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