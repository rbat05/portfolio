import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `Welcome to my digital showcase...

I'm Raaghav Batra, a passionate Mechatronics Engineer with a love for creating 
innovative solutions and exploring the intersection of technology and creativity.

Currently pursuing my Bachelor's degree in Mechatronics Engineering with a  
focus on smart systems, control logic, and hardware-software end-to-end integration.

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
    <div className="min-h-screen pt-40 text-white">
      <div className="max-w-6xl mx-auto px-4 py-">
        <div className="text-center mb-12 ">
          <div className="inline-block ">
            <h1 className="text-8xl font-mono font-bold text-black ">
              RAAGHAV BATRA
            </h1>
            <div className="text-4xl font-mono mb-3 text-black">
              MECHATRONICS ENGINEER
            </div>
            <div className="mb-4">
              <span className="font-mono text-xl text-black">
                Glad to have you here — explore my portfolio!
              </span>
            </div>

          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Terminal title="PROFILE" className="h-full">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>█</span>
              </pre>
            </Terminal>
          </div>

          <div className="space-y-6">
            <Terminal title="QUICK_ACCESS">
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-white">📚 Education:</span> 8.00 GPA
                </div>
                <div className="text-sm">
                  <span className="text-white">🚀 Projects:</span> 3+ Complete
                </div>
                <div className="text-sm">
                  <span className="text-white">💼 Status:</span> Available
                </div>
                <div className="text-sm">
                  <span className="text-white">📧 Contact:</span> Ready
                </div>
              </div>
            </Terminal>

            <Terminal title="SYSTEM_INFO">
              <div className="text-xs space-y-1">
                <div>OS: Portfolio v2.4</div>
                <div>Runtime: React.js</div>
                <div>Memory: Yes</div>
                <div>Uptime: 24/7</div>
                <div>Last Boot: {new Date().toLocaleDateString()}</div>
              </div>
            </Terminal>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="/Raaghav_Batra_CV.pdf"
            download
            className="inline-block border-2 border-black bg-white text-black font-mono px-6 py-2 transition-all duration-200 wireframe-button flashing-hover"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;