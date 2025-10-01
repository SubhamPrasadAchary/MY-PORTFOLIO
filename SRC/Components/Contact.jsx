import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen w-full py-20 px-4 sm:px-8 lg:px-12 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-gray-900/30 -z-10"></div>
      <div className="w-full max-w-8xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Contact Form */}
          <div className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-10 rounded-2xl border-2 border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 shadow-[0_0_20px_RGBA(59,130,246,0.3)] hover:shadow-[0_0_30px_RGBA(59,130,246,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-10 rounded-2xl border-2 border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-500">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Let's Connect!</h3>
              <p className="text-lg text-gray-300 mb-10">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-900/50 border-2 border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-800/70 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:acharysubham2803@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    acharysubham2803@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-900/50 border-2 border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-800/70 transition-colors duration-300">
                  <FaPhone className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a
                    href="tel:+91 9717325304"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +91 9717325304
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-900/50 border-2 border-blue-500/50 rounded-full flex items-center justify-center hover:bg-blue-800/70 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
