import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// Import the profile image with a fallback
import profileImage from '/avatar.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 pb-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Subham A"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffffff?text=Profile+Photo';
                  }}
                />
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up bg-black/50 p-8 rounded-2xl shiny-border shiny-border-hover order-1 md:order-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm{' '}
              <span className="gradient-text">Subham </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              I build exceptional digital experiences
            </p>
            <p className="text-lg text-gray-400">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] border-2 border-transparent hover:border-white/20"
              >
                View Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] border-2 border-transparent hover:border-white/20"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/SubhamPrasadAchary"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-blue-400 transition-all duration-300"
                title="GitHub Profile"
              >
                <FaGithub size={28} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/subhamachary"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-blue-400 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={28} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/SubhamPrasadAc1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-blue-400 transition-all duration-300"
                title="Twitter Profile"
              >
                <FaTwitter size={28} className="group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
