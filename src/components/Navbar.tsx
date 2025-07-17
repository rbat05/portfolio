import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const WireframeSmiley = () => {
    const [wink, setWink] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setWink(true);
        setTimeout(() => setWink(false), 500); // wink lasts 0.5s
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <span className={`ml-3 font-mono text-2xl ${isDarkMode ? 'text-green-400' : 'text-purple-600'}`}>
        {wink ? ';-0' : ':-)'}
      </span>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-black border-green-400' : 'bg-white border-purple-600'} border-b-2 z-40 wireframe-nav`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className={`${isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-purple-600 hover:text-purple-500'} font-mono text-xl transition-colors`}
            >
              JOHN.DOE
            </Link>
            <WireframeSmiley />
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={toggleTheme}
              className={`px-3 py-2 font-mono text-sm border-2 transition-all duration-200 mr-4 ${isDarkMode
                ? 'text-green-400 border-green-400 hover:bg-green-400 hover:text-black'
                : 'text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
            >
              {/* {isDarkMode ? <Sun size={16} /> : <Moon size={16} />} */}
            </button>
            {[
              { path: '/education', label: 'EDUCATION' },
              { path: '/projects', label: 'PROJECTS' },
              { path: '/contact', label: 'CONTACT' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 font-mono text-sm border-2 transition-all duration-200 wireframe-button ${isActive(path)
                  ? isDarkMode
                    ? 'bg-green-400 text-black border-green-400'
                    : 'bg-purple-600 text-white border-purple-600'
                  : isDarkMode
                    ? 'text-green-400 border-green-400 hover:bg-green-400 hover:text-black'
                    : 'text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white'
                  }`}
              >
                [{label}]
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;