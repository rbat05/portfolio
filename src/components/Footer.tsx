import { Link } from 'react-router-dom';

const Footer = () => {
  // No dark mode switching, only static dark styling
  return (
    <footer className="bg-black border-t border-green-400 text-green-400 font-mono mt-16 wireframe-footer">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg mb-4"> SITE DIRECTORY</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-green-300 transition-colors">
                [HOME]
              </Link>
              <Link to="/education" className="block hover:text-green-300 transition-colors">
                [EDUCATION]
              </Link>
              <Link to="/projects" className="block hover:text-green-300 transition-colors">
                [PROJECTS]
              </Link>
              <Link to="/contact" className="block hover:text-green-300 transition-colors">
                [CONTACT]
              </Link>
            </div>
          </div>

          <div className="ml-40">
            <h3 className="text-lg mb-4"> HOSTING INFO</h3>
            <a
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-green-300 transition-colors mb-4"
            >
              📁 Hosted on GitHub
            </a>
            <div className="text-sm text-green-500 space-y-1">
              <p>🖥️ Best viewed in Netscape Navigator</p>
              <p>👨‍💻 Webmaster: John Doe</p>
              <p>📅 Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-green-400 text-center text-sm">
          <p className="animate-pulse">
            &copy; 2024 John Doe Portfolio | Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;