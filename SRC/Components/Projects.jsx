import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import livefitImg from '../assets/livefit.jpg';
import rouletteImg from '../assets/roulette.jpg';
import veggieImg from '../assets/veggie.jpg';
import portfolioImg from '../assets/portfolio.jpg';

const Projects = () => {

  const projects = [
    {
      title: 'LIVEFIT',
      description:
        'LiveFit is a smart calorie and nutrition tracker that simplifies healthy living.',
      technologies: ['JavaScript', 'CSS', 'MongoDB', 'HTML'],
      github: 'https://github.com/SubhamPrasadAchary/LIVEFIT.git',
      image: livefitImg,
      alt: 'LiveFit - Nutrition Tracker'
    },
    {
      title: 'RUMBLE-ROULETTE',
      description:
        'Experience the thrill of roulette with this interactive online game!',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/SubhamPrasadAchary/RUMBLE-ROULETTE-.git',
      live: 'https://rumble-roulette.vercel.app/',
      image: rouletteImg,
      alt: 'Rumble Roulette Game'
    },
    {
      title: 'Easy Veggie',
      description:
        'The vegetable cart adding interface provides a clean and intuitive way for users to select and add fresh vegetables to their shopping cart.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SubhamPrasadAchary/EAZY-VEGGIE.git',
      live: '',
      image: veggieImg,
      alt: 'Easy Veggie - Online Vegetable Store'
    },
    {
      title: 'MY Portfolio',
      description:
        'A modern and responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/SubhamPrasadAchary/MY-PORTFOLIO.git',
      live: '#',
      image: portfolioImg,
      alt: 'My Portfolio Website'
    },
  ]

  return (
    <section id="projects" className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900/30 -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-full flex flex-col bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 md:h-52 lg:h-56 overflow-hidden border-b border-gray-700/50">
                <img 
                  src={project.image} 
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-base md:text-lg text-gray-300 mb-4 flex-1 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-200 text-xs sm:text-sm rounded-full border border-blue-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                <div className="flex gap-3 mt-auto pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/70 px-4 py-2.5 rounded-lg transition-all duration-200"
                  >
                    <FaGithub size={18} className="text-blue-400" />
                    <span>View Code</span>
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-500/20"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
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
