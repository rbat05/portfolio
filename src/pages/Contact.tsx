import React from 'react';
import Terminal from '../components/Terminal';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:john.doe@email.com',
      handle: 'john.doe@email.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/johndoe',
      handle: '/in/johndoe'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/johndoe',
      handle: '@johndoe'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      url: 'https://youtube.com/@johndoe',
      handle: '@johndoe'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black text-green-400' : 'bg-gray-50 text-purple-600'
      }`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-mono font-bold mb-4 wireframe-heading ${isDarkMode ? 'text-green-400' : 'text-purple-600'
            }`}>
            CONTACT_PROTOCOL.EXE
          </h1>
          <div className={`font-mono ${isDarkMode ? 'text-green-300' : 'text-purple-500'
            }`}>
            Establishing communication channels...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Terminal title="CONNECT.TXT">
              <div className="space-y-4">
                <div className="text-xl font-bold text-green-400">
                  📬 Let's connect like it's 1999.
                </div>
                <div className="text-sm text-green-300">
                  Choose your preferred communication protocol below.
                  All channels are monitored and responses are guaranteed
                  within 24 hours (or less if I'm not debugging something).
                </div>
                <div className="text-xs text-green-500 mt-4">
                  🔒 Secure connection established<br />
                  🌐 All protocols available<br />
                  ⚡ Real-time response enabled
                </div>
              </div>
            </Terminal>
          </div>

          <div>
            <Terminal title="SOCIAL_LINKS.DAT">
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{link.icon}</span>
                      <div>
                        <div className="font-bold text-green-400 group-hover:text-black">
                          {link.name}
                        </div>
                        <div className="text-sm text-green-300 group-hover:text-black">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Terminal>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-green-400 px-6 py-3">
            <div className="font-mono text-sm text-green-300">
              💡 Pro tip: Email is the fastest way to reach me for professional inquiries
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Terminal title="STATUS.LOG" className="inline-block">
            <div className="text-xs space-y-1">
              <div>🟢 Online Status: Available</div>
              <div>📍 Location: University Campus</div>
              <div>⏰ Response Time: &lt; 24 hours</div>
              <div>💬 Preferred Method: Email</div>
            </div>
          </Terminal>
        </div>
      </div>
    </div>
  );
};

export default Contact;