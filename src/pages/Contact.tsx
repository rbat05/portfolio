import Terminal from '../components/Terminal';

const Contact = () => {

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
    }
  ];

  return (
    <div className="min-h-screen pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4 text-black">
            CONTACT_PROTOCOL.EXE
          </h1>
          <div className="font-mono text-black">
            Choose your preferred communication protocol below.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
          <Terminal title="SOCIAL_LINKS.DAT">
            <div className="flex flex-col justify-start space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <div className="font-bold text-white group-hover:text-black">
                        {link.name}
                      </div>
                      <div className="text-sm text-white group-hover:text-black">
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
    </div>
  );
};

export default Contact;