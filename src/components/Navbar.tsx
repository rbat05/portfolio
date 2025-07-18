import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const WireframeSmiley = () => {
    const [wink, setWink] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setWink(true);
        setTimeout(() => setWink(false), 500);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <span className="ml-3 font-mono text-2xl text-white">
        {wink ? ';-0' : ':-)'}
      </span>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-white border-b-1 z-40 wireframe-nav">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white flashing-hover-title font-mono text-xl transition-colors "
            >
              RAAGHAV.BATRA's PORTFOLIO
            </Link>
            <WireframeSmiley />
          </div>

          <div className="flex items-center space-x-2">
            {[
              { path: '/education', label: 'EDUCATION' },
              { path: '/projects', label: 'PROJECTS' },
              { path: '/contact', label: 'CONTACT' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 font-mono text-sm border-1 transition-all duration-200 wireframe-button flashing-hover ${isActive(path)
                  ? 'bg-white text-black border-white'
                  : 'text-white border-white hover:bg-white hover:text-black'
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