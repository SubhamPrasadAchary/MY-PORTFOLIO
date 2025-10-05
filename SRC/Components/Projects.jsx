import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'LIVEFIT',
      description:
        'LiveFit is a smart calorie and nutrition tracker that simplifies healthy living.',
      technologies: ['JavaScript', 'CSS', 'MongoDB', 'HTML'],
      github: 'https://github.com/SubhamPrasadAchary/LIVEFIT.git',
    
    },
    {
      title: 'RUMBLE-ROULETTE',
      description:
        'Experience the thrill of roulette with this interactive online game!',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/SubhamPrasadAchary/RUMBLE-ROULETTE-.git',
      live: 'https://rumble-roulette.vercel.app/',
    },
    {
      title: 'Easy Veggie',
      description:
        'The vegetable cart adding interface provides a clean and intuitive way for users to select and add fresh vegetables to their shopping cart.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SubhamPrasadAchary/EAZY-VEGGIE.git',
      live: '',
    },
    {
      title: 'MY Portfolio',
      description:
        'A modern and responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/SubhamPrasadAchary/MY-PORTFOLIO.git',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="relative min-h-screen w-full py-8 px-4 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900/30 -z-10"></div>
      <div className="w-full max-w-8xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-full flex flex-col bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02]"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-500 to-cyan-500 border-b-2 border-blue-500"></div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-lg text-gray-300 mb-6 flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-blue-900/50 text-blue-200 border border-blue-500/50 rounded-full text-base font-medium hover:bg-blue-800/70 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 mt-auto pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-blue-900/50 px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub size={24} className="text-blue-400" />
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
