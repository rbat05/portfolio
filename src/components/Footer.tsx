import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-white text-white font-mono wireframe-footer z-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div>
            <h3 className="text-xl mb-4 text-center">SITE DIRECTORY</h3>
            <div className="space-y-2 text-center">
              <Link to="/" className="block hover:text-white transition-colors flashing-hover-title">
                [HOME]
              </Link>
              <Link to="/education" className="block hover:text-white transition-colors flashing-hover-title">
                [EDUCATION]
              </Link>
              <Link to="/projects" className="block hover:text-white transition-colors flashing-hover-title">
                [PROJECTS]
              </Link>
              <Link to="/contact" className="block hover:text-white transition-colors flashing-hover-title">
                [CONTACT]
              </Link>
              <div className="text-sm text-white space-y-1">
                🖥️ Best viewed in Netscape Navigator
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-sm">
          <p className="animate-pulse">
            &copy; 2025 Raaghav Batra | Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;