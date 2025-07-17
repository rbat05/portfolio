import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
  isDarkMode?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, isDarkMode = true }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showASCII, setShowASCII] = useState(false);

  const steps = [
    '> Initializing system...',
    '> Loading engineering modules...',
    '> Compiling portfolio data...',
    '> Establishing connection...'
  ];

  const asciiArt = `
  ██████╗ ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
  ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
  ██████╔╝██║  ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
  ██╔═══╝ ██║  ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
  ██║     ██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
  ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        typeText(steps[currentStep], () => {
          setCurrentStep(currentStep + 1);
        });
      } else if (!showASCII) {
        setShowASCII(true);
        setTimeout(() => {
          setDisplayText(prev => prev + '\n> Access granted. Redirecting...');
          setTimeout(() => {
            onComplete();
          }, 1000);
        }, 1000);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentStep, showASCII, onComplete]);

  const typeText = (text: string, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setDisplayText(prev => prev + '\n');
        setTimeout(callback, 300);
      }
    }, 50);
  };

  return (
    <div className={`fixed inset-0 font-mono flex items-center justify-center z-50 ${isDarkMode ? 'bg-black text-green-400' : 'bg-gray-50 text-purple-600'
      }`}>
      <div className="max-w-4xl w-full p-8">
        <div className="mb-8">
          <pre className="text-sm leading-relaxed whitespace-pre-wrap">
            {displayText}
            <span className="animate-pulse">█</span>
          </pre>
        </div>

        {showASCII && (
          <div className="text-green-400 text-center animate-pulse">
            <pre className="text-xs leading-none whitespace-pre font-mono">
              {asciiArt}
            </pre>
            <div className="mt-4 text-lg">
              JOHN DOE - SOFTWARE ENGINEER
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;