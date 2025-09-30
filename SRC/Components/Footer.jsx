import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-500 shadow-[0_-5px_20px_rgba(59,130,246,0.3)] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Subham A</h3>
            <p className="text-gray-400">
              Building exceptional digital experiences, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-900/50 border border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-900/50 border border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-900/50 border border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500/30 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Subham A. Made with{' '}
            <FaHeart className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
