import { useParams, Link } from 'react-router-dom';
import Terminal from '../../components/Terminal';
import projectsData from '../../data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Terminal title="ERROR.LOG">
            <div className="text-center">
              <div className="text-6xl mb-4">404</div>
              <div className="text-xl mb-4">Project not found</div>
              <Link to="/projects" className="text-white hover:text-white">
                Return to projects directory
              </Link>
            </div>
          </Terminal>
        </div>
      </div>
    );
  }

  const statusColor = project.status === 'Complete' ? 'text-green-400' : 'text-yellow-400';
  const statusIcon = project.status === 'Complete' ? '✅' : '⏳';

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to="/projects"
            className="font-mono text-sm text-white hover:text-white"
          >
            &lt; Back to Projects
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{project.thumbnail}</div>
          <h1 className="text-4xl font-mono font-bold mb-4 wireframe-heading text-white">
            {project.title}
          </h1>
          <div className="font-mono mb-4 text-white">
            {project.tagline}
          </div>
          <div className={`font-mono text-sm ${statusColor}`}>
            {statusIcon} {project.status} | {project.term}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Terminal title="PROJECT_OVERVIEW.TXT">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">📋 Background:</h3>
                  <p className="text-sm leading-relaxed">{project.background}</p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">🛠️ Approach:</h3>
                  <p className="text-sm leading-relaxed">{project.approach}</p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">⚡ Challenges:</h3>
                  <p className="text-sm leading-relaxed">{project.challenges}</p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">🎯 Outcome:</h3>
                  <p className="text-sm leading-relaxed">{project.outcome}</p>
                </div>
              </div>
            </Terminal>

            {project.youtube && (
              <Terminal title="DEMO_VIDEO.AVI">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.youtube.replace('watch?v=', 'embed/')}
                    title="Project Demo"
                    frameBorder="0"
                    allowFullScreen
                    className="border-2 border-white"
                  ></iframe>
                </div>
              </Terminal>
            )}
          </div>

          <div className="space-y-6">
            <Terminal title="TECH_STACK.CFG">
              <div className="space-y-3">
                <h3 className="text-white font-bold">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 border border-white text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Terminal>

            <Terminal title="QUICK_LINKS.LNK">
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm"
                  >
                    🐙 View Source Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </Terminal>

            <Terminal title="PROJECT_STATS.DAT">
              <div className="text-xs space-y-1">
                <div>📅 Term: {project.term}</div>
                <div>🏷️ Status: {project.status}</div>
                <div>🛠️ Technologies: {project.tech.length}</div>
                <div>📝 Last Updated: {new Date().toLocaleDateString()}</div>
              </div>
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;