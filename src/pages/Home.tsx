import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `Welcome to my digital workspace...

I'm John Doe, a passionate Software Engineer with a love for creating 
innovative solutions and exploring the intersection of technology and creativity.

Currently pursuing my Bachelor's degree in Computer Engineering with a focus on 
full-stack development, algorithms, and system design.

> Status: Available for internships and collaboration
> Location: University of Engineering
> Interests: Retro computing, open source, and building cool stuff

Type 'help' for navigation or explore using the menu above.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black text-green-400' : 'bg-gray-50 text-purple-600'
      }`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className={`text-6xl font-mono font-bold mb-4 wireframe-heading ${isDarkMode ? 'text-green-400' : 'text-purple-600'
              }`}>
              RAAGHAV BATRA
            </h1>
            <div className={`text-2xl font-mono mb-8 wireframe-subheading ${isDarkMode ? 'text-green-300' : 'text-purple-500'
              }`}>
              MECHATRONICS ENGINEER
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Terminal title="PROFILE.TXT" className="h-full">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>█</span>
              </pre>
            </Terminal>
          </div>

          <div className="space-y-6">
            <Terminal title="QUICK_ACCESS.EXE">
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-green-300">📚 Education:</span> 3.85 GPA
                </div>
                <div className="text-sm">
                  <span className="text-green-300">🚀 Projects:</span> 3+ Complete
                </div>
                <div className="text-sm">
                  <span className="text-green-300">💼 Status:</span> Available
                </div>
                <div className="text-sm">
                  <span className="text-green-300">📧 Contact:</span> Ready
                </div>
              </div>
            </Terminal>

            <Terminal title="SYSTEM_INFO.LOG">
              <div className="text-xs space-y-1">
                <div>OS: Portfolio v2.0</div>
                <div>Runtime: React.js</div>
                <div>Memory: ∞ Coffee</div>
                <div>Uptime: 24/7</div>
                <div>Last Boot: {new Date().toLocaleDateString()}</div>
              </div>
            </Terminal>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-green-400 px-6 py-3">
            <div className="font-mono text-sm text-green-300">
              💡 Pro tip: Use the navigation menu above to explore my work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;