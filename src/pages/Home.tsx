import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `Welcome to my digital showcase...

I'm Raaghav Batra, a passionate Mechatronics Engineer with a love for creating innovative solutions and exploring the intersection of technology and creativity.

Currently pursuing my Bachelor's degree in Mechatronics Engineering with a focus on smart systems, control logic, and hardware-software end-to-end integration.

> Status: Available for internships and collaboration
> Location: Auckland, New Zealand
> Interests: Electronics, robotics, and building cool stuff 

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
    }, 5);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen pt-10 text-white">
      <div className="min-h-screen pt-10 lg:pt-24 text-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2">
          <div className="text-center mb-8">
            <div className="inline-block w-full">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-mono font-bold text-black break-words">
                RAAGHAV BATRA
              </h1>
              <div className="text-xl sm:text-3xl md:text-4xl font-mono mb-2 sm:mb-3 text-black">
                MECHATRONICS ENGINEER
              </div>
              <div className="mb-14 sm:mb-24">
                <span className="font-mono text-base sm:text-xl text-black">
                  Glad to have you here — explore my portfolio!
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="md:col-span-2">
              <Terminal title="PROFILE" className="h-full">
                <div className="text-justify text-xs sm:text-sm leading-relaxed break-words max-h-full overflow-auto">
                  {(() => {
                    const lines = displayText.split(/\n/g);
                    return lines.map((line, idx) => {
                      // If last line, add cursor at end
                      if (idx === lines.length - 1) {
                        return (
                          <span key={idx}>
                            {line}
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>█</span>
                            <br />
                          </span>
                        );
                      }
                      return (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      );
                    });
                  })()}
                </div>
              </Terminal>
            </div>

            <div className="space-y-4 md:space-y-6">
              <Terminal title="QUICK_ACCESS">
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xs sm:text-sm">
                    <span className="text-white">📚 Education:</span> 8.00 GPA
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-white">🚀 Projects:</span> 3+ Complete
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-white">💼 Status:</span> Available
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-white">📧 Contact:</span> Ready
                  </div>
                </div>
              </Terminal>

              <Terminal title="SYSTEM_INFO">
                <div className="text-[10px] sm:text-xs space-y-1">
                  <div>OS: Portfolio v2.4</div>
                  <div>Runtime: React.js</div>
                  <div>Memory: Yes</div>
                  <div>Uptime: 24/7</div>
                  <div>Last Boot: {new Date().toLocaleDateString()}</div>
                </div>
              </Terminal>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-16">
            <a
              href="/Raaghav_Batra_CV.pdf"
              download
              className="inline-block border-2 border-black bg-white text-black font-mono px-4 sm:px-6 py-2 text-sm sm:text-base transition-all duration-200 wireframe-button flashing-hover"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;