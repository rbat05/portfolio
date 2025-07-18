import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 font-mono flex items-center justify-center z-50 bg-black text-white">
      <div className="max-w-4xl w-full p-8 flex flex-col items-center justify-center">
        <div className="mt-4 text-lg text-center animate-pulse">
          RAAGHAV BATRA<br />MECHATRONICS ENGINEER<br />Portfolio Website
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;