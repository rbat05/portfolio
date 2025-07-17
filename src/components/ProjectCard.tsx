import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

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
  const { isDarkMode } = useTheme();
  const statusColor = project.status === 'Complete' ? 'text-green-400' : 'text-yellow-400';
  const statusIcon = project.status === 'Complete' ? '✅' : '⏳';

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`block border-2 transition-all duration-300 group wireframe-card ${isDarkMode
        ? 'border-green-400 bg-black hover:bg-green-400 hover:text-black'
        : 'border-purple-600 bg-white hover:bg-purple-600 hover:text-white'
        }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.thumbnail}</div>
          <div className={`font-mono text-sm ${statusColor} group-hover:text-black`}>
            {statusIcon} {project.status}
          </div>
        </div>

        <h3 className={`text-xl font-mono mb-2 wireframe-text ${isDarkMode
          ? 'text-green-400 group-hover:text-black'
          : 'text-purple-600 group-hover:text-white'
          }`}>
          {project.title}
        </h3>

        <p className={`text-sm mb-4 ${isDarkMode
          ? 'text-green-300 group-hover:text-black'
          : 'text-purple-500 group-hover:text-white'
          }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 border text-xs font-mono ${isDarkMode
                ? 'border-green-400 text-green-400 group-hover:border-black group-hover:text-black'
                : 'border-purple-600 text-purple-600 group-hover:border-white group-hover:text-white'
                }`}
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