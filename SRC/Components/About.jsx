import { FaGraduationCap, FaSchool, FaUniversity, FaCertificate } from 'react-icons/fa';
import amityLogo from '../assets/amity-logo.jpg';
import manavbharatiLogo from '../assets/manavbharati-logo.jpg';
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

  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science',
      institution: 'Amity University',
      duration: '2022 - 2026',
      score: 'CGPA: 7.2',
      logo: amityLogo,
      alt: 'Amity University Logo'
    },
    {
      id: 2,
      degree: 'Class 12th (CBSE)',
      institution: 'Manav Bharati India International School',
      duration: '2020 - 2021',
      score: 'Percentage: 79.6%',
      logo: manavbharatiLogo,
      alt: 'Manav Bharati School Logo'
    },
    {
      id: 3,
      degree: 'Class 10th (CBSE)',
      institution: 'Manav Bharati India International School',
      duration: '2018 - 2019',
      score: 'Percentage: 86.8%',
      logo: manavbharatiLogo,
      alt: 'Manav Bharati School Logo'
    }
  ]

  const certificates = [
    {
      id: 1,
      name: 'Web Development Intern',
      issuer: 'Jabsz Gaming Studios LLP',
      YEAR: '2025',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB']
    },
    {
      id: 2,
      name: 'Web Development Bootcamp',
      issuer: 'Udemy',
      YEAR: '2025',
      skills: ['HTML', 'CSS','Tailwind CSS','JavaScript', 'React', 'MongoDB','MySql','Node.js']
    },
    {
      id: 3,
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      YEAR: '2024',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      id: 4,
      name: 'Introduction to Internet of Things',
      issuer: 'NPTEL',
      YEAR: '2024',
      skills: ['Embedded Systems', 'Arduino', 'Raspberry Pi', 'MQTT', 'IoT Protocols', 'Sensor Networks', 'Cloud Integration']
    },
    {
      id: 5,
      name: ' CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy program',
      YEAR: '2025',
      skills: ['Network Fundamentals', 'IP Addressing', 'VLANs', 'Network Security', 'IoT Protocols', 'Subnetting', 'Network Troubleshooting']
    }
  ]

  return (
    <section id="about" className="pt-0 px-4 sm:px-6 lg:px-8 mt-8 flex">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="space-y-12">
          {/* About Text */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
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
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
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

          {/* Education Section */}
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">
              <FaGraduationCap className="inline-block mr-3 text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900/50 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center p-2 border border-white/10">
                    <img 
                      src={edu.logo} 
                      alt={edu.alt} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-blue-300 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-300">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.duration}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Section */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl mt-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                <FaCertificate className="inline-block mr-3 text-blue-400" />
                Certifications
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Certificate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Issuer</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">YEAR</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Skills</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900/50 divide-y divide-gray-700">
                    {certificates.map((cert) => (
                      <tr key={cert.id} className="hover:bg-gray-800/50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">{cert.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-blue-300">{cert.issuer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{cert.YEAR}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
