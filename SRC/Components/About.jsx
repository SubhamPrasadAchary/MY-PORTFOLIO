const About = () => {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 bg-black/50 p-8 rounded-2xl shiny-border shiny-border-hover">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with expertise in building modern web
              applications. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend
              technologies, I create seamless digital experiences that users
              love. I'm constantly learning and staying up-to-date with the
              latest technologies and best practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-black/50 p-8 rounded-2xl shiny-border shiny-border-hover">
            <h3 className="text-2xl font-bold mb-6 text-white">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transform hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
