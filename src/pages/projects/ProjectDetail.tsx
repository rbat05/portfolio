import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Terminal from '../../components/Terminal';
import projectsData from '../../data/projects.json';
import TerminalText from '../../components/TerminalText';
import AnimatedBackgroundWhite from '../../components/AnimatedBackgroundWhite';

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

  // Modal state for enlarged image
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  // Sequential TerminalText animation state
  const [currentStep, setCurrentStep] = useState(0);
  const sections = [
    {
      key: 'probandappr',
      title: '📋 Problem & Approach:',
      text: project.probandappr,
    },
    {
      key: 'desandimp',
      title: '⚙️ Design & Implementation:',
      text: project.desandimp,
    },
    {
      key: 'outcomeandlearn',
      title: '🎯 Outcome & Learnings:',
      text: project.outcomeandlearn,
    },
    {
      key: 'nextsteps',
      title: '🔜 Next Steps:',
      text: project.nextsteps,
    },
  ].filter(s => s.text && s.text.trim() !== '');

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <AnimatedBackgroundWhite />
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
          {project.images && project.images.length > 0 && (
            <div className="lg:col-span-3">
              <Terminal title="IMAGES">
                <div
                  className={
                    project.images.length === 1
                      ? "flex justify-center"
                      : project.images.length === 2
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
                        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  }
                >
                  {project.images.slice(0, 3).map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Project image ${idx + 1}`}
                      className="w-full h-64 border-2 border-white rounded shadow cursor-pointer object-cover"
                      onClick={() => {
                        setModalImg(src);
                        setModalOpen(true);
                      }}
                    />
                  ))}
                </div>
                <div className="text-xs text-white/70 mt-2 text-center">
                  Click images to enlarge.
                </div>
              </Terminal>
            </div>
          )}

          {/* Modal for enlarged image */}
          {modalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setModalOpen(false)}
            >
              <img
                src={modalImg}
                alt="Enlarged"
                className="max-w-full max-h-[80vh] border-4 border-white rounded shadow-lg"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking the image
              />
            </div>
          )}


          <div className="lg:col-span-2 space-y-6">
            <Terminal title="PROJECT_OVERVIEW">
              {sections.map((section, idx) => {
                if (idx < currentStep) {
                  // Already finished, render static bullet list
                  // Split into sentences for bullet points
                  const bullets = section.text
                    ? section.text
                      .replace(/\r?\n/g, ' ')
                      .split(/(?<=[.!?])\s+/)
                      .filter(sentence => sentence.trim() !== '')
                    : [];
                  return (
                    <div key={section.key}>
                      <h3 className="text-white font-bold mb-2">{section.title}</h3>
                      <ul className="list-[circle] pl-6 space-y-2 mb-6 text-sm">
                        {bullets.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  );
                } else if (idx === currentStep) {
                  // Currently animating
                  return (
                    <div key={section.key}>
                      <h3 className="text-white font-bold mb-2">{section.title}</h3>
                      <TerminalText
                        text={section.text || ""}
                        bulletList
                        className="text-sm"
                        onDone={() => {
                          if (currentStep === idx && idx < sections.length - 1) {
                            setCurrentStep(idx + 1);
                          }
                        }}
                      />
                    </div>
                  );
                } else {
                  // Not yet started
                  return null;
                }
              })}
            </Terminal>

            {project.youtube && (
              <Terminal title="DEMO_VIDEO">
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
            {/* SKILLS_USED now comes first */}
            <Terminal title="SKILLS_USED">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold">{project.skills1name || "SKILL1:"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills1 && project.skills1.length > 0 ? (
                      project.skills1.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 border border-white text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-1 border border-white text-xs font-mono text-white/50">
                        None listed
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold">{project.skills2name || "SKILL2:"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills2 && project.skills2.length > 0 ? (
                      project.skills2.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 border border-white text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-1 border border-white text-xs font-mono text-white/50">
                        None listed
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold">{project.skills3name || "SKILL3:"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills3 && project.skills3.length > 0 ? (
                      project.skills3.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 border border-white text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-1 border border-white text-xs font-mono text-white/50">
                        None listed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Terminal>

            {/* QUICK_LINKS now comes after SKILLS_USED */}
            <Terminal title="QUICK_LINKS">
              <div className="space-y-3">
                {project.github || project.demo ? (
                  <>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm"
                      >
                        🐙 View Project Documentation
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm"
                      >
                        🎬 Live Video Demo
                      </a>
                    )}
                  </>
                ) : (
                  <div className="text-center text-white/70 font-mono text-sm py-3 border-2 border-white">
                    None yet, stay tuned!
                  </div>
                )}
              </div>
            </Terminal>

            <Terminal title="PROJECT_STATS">
              <div className="text-xs space-y-1">
                <div>📅 Term: {project.term}</div>
                <div>🏷️ Status: {project.status}</div>
                <div>📝 Last Updated: {project.lastUpdated}</div>
              </div>
            </Terminal>
          </div>
        </div>
      </div >
    </div>
  );
};

export default ProjectDetail;