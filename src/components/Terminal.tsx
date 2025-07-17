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
    <div className={`wireframe-terminal ${className} border-green-400 bg-black border-2`}>
      <div className="px-4 py-2 flex justify-between items-center bg-green-400 text-black">
        <span className="font-mono font-bold">{title}</span>
        <span className="font-mono text-sm">{time}</span>
      </div>
      <div className="p-6 font-mono text-green-400">
        {children}
      </div>
    </div>
  );
};

export default Terminal;