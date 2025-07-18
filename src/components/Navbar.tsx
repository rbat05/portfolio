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

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-white border-b-1 z-40 wireframe-nav">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Title: R.Batra on mobile, full on desktop */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white flashing-hover-title font-mono text-xl transition-colors block lg:hidden"
            >
              R.Batra
            </Link>
            <Link
              to="/"
              className="text-white flashing-hover-title font-mono text-xl transition-colors hidden lg:block"
            >
              RAAGHAV.BATRA's PORTFOLIO
            </Link>
            {/* Hide emoticon on mobile */}
            <span className="hidden lg:inline-block"><WireframeSmiley /></span>
          </div>

          {/* Hamburger menu for mobile, links for desktop */}
          <div className="flex items-center">
            {/* Hamburger icon (Unicode) for mobile */}
            <button
              className="text-white text-3xl px-2 py-1 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </button>
            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-2">
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
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="lg:hidden absolute right-4 top-14 bg-black border-2 border-white rounded-md shadow-lg z-50">
            <div className="flex flex-col">
              {[
                { path: '/education', label: 'EDUCATION' },
                { path: '/projects', label: 'PROJECTS' },
                { path: '/contact', label: 'CONTACT' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-6 py-3 font-mono text-base border-b border-white last:border-b-0 wireframe-button flashing-hover text-white hover:bg-white hover:text-black transition-all duration-200`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;