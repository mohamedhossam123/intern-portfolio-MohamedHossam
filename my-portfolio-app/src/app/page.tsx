'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, User, Lightbulb, Phone, MapPin, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = ["Software Engineer", "Full Stack Developer", "Problem Solver"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      let currentActive = 'hero';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) { 
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);

    const taglineInterval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased">
     
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .animate-typewriter {
            overflow: hidden; /* Ensures the content is not revealed until the animation */
            border-right: .15em solid orange; /* The typwriter cursor */
            white-space: nowrap; /* Keeps the content on a single line */
            margin: 0 auto; /* Gives that scrolling effect as the typing happens */
            letter-spacing: .05em; /* Adjust as needed */
            animation: 
              typing 3.5s steps(40, end) infinite,
              blink-caret .75s step-end infinite;
        }
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #FBBF24; } /* yellow-300 */
        }
        `}
      </style>

      {/* Header/Navigation */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors">Mohamed Hossam</a>
          <ul className="flex space-x-6">
            <li><a href="#about" className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-indigo-50 ${activeSection === 'about' ? 'text-indigo-600 border-b-2 border-indigo-600' : ''}`}>About</a></li>
            <li><a href="#skills" className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-indigo-50 ${activeSection === 'skills' ? 'text-indigo-600 border-b-2 border-indigo-600' : ''}`}>Skills</a></li>
            <li><a href="#projects" className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-indigo-50 ${activeSection === 'projects' ? 'text-indigo-600 border-b-2 border-indigo-600' : ''}`}>Projects</a></li>
            <li><a href="#contact" className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-indigo-50 ${activeSection === 'contact' ? 'text-indigo-600 border-b-2 border-indigo-600' : ''}`}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="/Me.jpg" 
              alt="Mohamed Hossam Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Hi, I'm <span className="text-yellow-300">Mohamed Hossam</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            A passionate <span className="text-yellow-200 font-semibold animate-typewriter">{taglines[taglineIndex]}</span> creating impactful web solutions.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-400">
            <a
              href="https://github.com/mohamedhossam123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-indigo-600 px-7 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <Github size={22} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-hossam-070a1332a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-blue-700 px-7 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        {/* Background shapes for visual effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full -top-16 -left-16 blur-2xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -bottom-32 -right-32 blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute w-48 h-48 bg-white opacity-5 rounded-full top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 blur-xl animate-pulse delay-500"></div>
        </div>
      </section>

      {/* --- */}

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center space-x-3">
            <User className="text-indigo-600" size={32} />
            <span>About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Hello! I'm **Mohamed Hossam**, a passionate **software engineer** and **full stack developer** based in Giza, Sheikh Zayed.
              I specialize in building robust web applications using modern technologies and frameworks.
            <p>
              My expertise covers both frontend and backend development, including
              <span className="inline-flex items-center gap-2 flex-wrap">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="w-6 h-6 inline-block align-text-bottom" /> React,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" className="w-6 h-6 inline-block align-text-bottom" /> Next.js,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" title="Tailwind CSS" className="w-6 h-6 inline-block align-text-bottom" /> Tailwind CSS,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg" alt=".NET" title=".NET" className="w-6 h-6 inline-block align-text-bottom" /> .NET,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="ASP.NET" title="ASP.NET" className="w-6 h-6 inline-block align-text-bottom" /> ASP.NET,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" title="SQL Server" className="w-6 h-6 inline-block align-text-bottom" /> SQL Server,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" title="Git" className="w-6 h-6 inline-block align-text-bottom" /> Git,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="C#" title="C#" className="w-6 h-6 inline-block align-text-bottom" /> C#,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" alt="C++" title="C++" className="w-6 h-6 inline-block align-text-bottom" /> C++,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" alt="C" title="C" className="w-6 h-6 inline-block align-text-bottom" /> C,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" alt="Python" title="Python" className="w-6 h-6 inline-block align-text-bottom" /> Python,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript" className="w-6 h-6 inline-block align-text-bottom" /> JavaScript,
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" title="TypeScript" className="w-6 h-6 inline-block align-text-bottom" /> TypeScript
              </span>
            </p>
              I enjoy solving complex problems and delivering high-quality solutions.
            </p>
            <p>
              Outside of coding, I love learning new tech, collaborating on innovative projects, and fitness.
            </p>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center space-x-3">
            <Lightbulb className="text-indigo-600" size={32} />
            <span>My Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
              { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
              { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
              { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
              { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg' },
              { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
              { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
              { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' },
              { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg' },
              { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' },
              { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' },
              { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' },
            ].map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <img src={skill.icon} alt={skill.name + ' icon'} className="w-16 h-16 mb-3 object-contain" />
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center space-x-3">
            <Briefcase className="text-indigo-600" size={32} />
            <span>My Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Memzy Project Card */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img
                src="/memzyiconcopyyy.jpg"
                alt="Memzy Project"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Memzy</h3>
                <p className="text-gray-700 text-base mb-4">
                  Memzy is a modern productivity and memory training app designed to help users sharpen their focus and boost cognitive skills. Featuring interactive exercises, progress analytics, and a sleek user experience, Memzy empowers individuals to build better habits and improve memory retention. Built with <span className="font-semibold text-indigo-700">React</span>, <span className="font-semibold text-indigo-700">Next.js</span>, <span className="font-semibold text-indigo-700">.NET</span>, and <span className="font-semibold text-indigo-700">SQL Server</span> for robust performance and scalability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">.NET</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">SQL Server</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mohamedhossam123/memzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-600 hover:text-green-800 font-medium bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Fitlogic Project Card */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img
                src="/fitlogic_logo.png"
                alt="Fitlogic Project"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Fitlogic</h3>
                <p className="text-gray-700 text-base mb-4">
                  Fitlogic is an all-in-one fitness and health management platform that delivers personalized workout plans, nutrition guidance, and progress tracking. With a user-friendly dashboard and smart recommendations, Fitlogic helps users achieve their health goals efficiently. Powered by <span className="font-semibold text-indigo-700">React</span>, <span className="font-semibold text-indigo-700">Next.js</span>, <span className="font-semibold text-indigo-700">.NET</span>, and <span className="font-semibold text-indigo-700">SQL Server</span> for a seamless and secure experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">.NET</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">SQL Server</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mohamedhossam123/fitlogic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-600 hover:text-green-800 font-medium bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center space-x-3">
            <Mail className="text-indigo-600" size={32} />
            <span>Get In Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-center text-gray-700 text-lg mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 text-center text-gray-700 space-y-3">
              <p className="flex items-center justify-center space-x-2">
                <Mail size={22} className="text-indigo-600" />
                <a href="mailto:mohamedhossam25709@gmail.com" className="hover:underline text-indigo-700 font-medium">mohamedhossam25709@gmail.com</a>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <MapPin size={22} className="text-indigo-600" />
                <span>Giza, Sheikh Zayed, Egypt</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <Phone size={22} className="text-indigo-600" />
                <span>+20 123 456 7890 (Optional)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Mohamed Hossam. All rights reserved.</p>
          <div className="flex justify-center space-x-5 mt-4">
            <a href="https://github.com/mohamedhossam123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-hossam-070a1332a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:mohamedhossam25709@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;