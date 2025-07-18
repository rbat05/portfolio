import React, { useState, useEffect } from 'react';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, title = "TERMINAL", className = "" }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`wireframe-terminal ${className} border-black bg-black border-2`}>
      <div className="px-4 py-2 flex justify-between items-center bg-white text-black">
        <span className="font-mono font-bold">{title}</span>
        <span className="font-mono text-sm">{time}</span>
      </div>
      <div className="p-6 font-mono text-white">
        {children}
      </div>
    </div>
  );
};

export default Terminal;