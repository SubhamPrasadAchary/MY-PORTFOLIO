import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'About', href: '#about', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Projects', href: '#projects', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Contact', href: '#contact', gradient: 'from-yellow-400 to-orange-500' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-xl py-2' : 'bg-black/80 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300"
          >
            SA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-5 py-3 rounded-xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  activeLink === link.name 
                    ? `bg-gradient-to-r ${link.gradient} shadow-lg shadow-${link.gradient.split(' ')[1].split('-')[1]}-500/50`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false)
                  setActiveLink(link.name)
                }}
                className={`block w-full text-center py-4 px-6 rounded-xl text-lg font-bold text-white transition-all duration-300 ${
                  activeLink === link.name 
                    ? `bg-gradient-to-r ${link.gradient} shadow-lg`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
