'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, User, Lightbulb, MapPin, ExternalLink, Menu, X } from 'lucide-react';
import RotatingText from '../components/RotatingText';
import ScrollFloat from '../components/ScrollFloat';
import Particles from '../components/Particle';
import ProjectModal from '../components/ProjectModal';
import RollingGallery from '../components/RollingGallery';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  galleryImages: string[];
}

const projects: Project[] = [
  {
    id: 'memzy',
    name: 'Memzy: Your Personalized Humor Hub',
    description: 'A modern productivity and memory training app designed to help users sharpen their focus and boost cognitive skills.',
    technologies: ['React', 'Next.js', '.NET', 'SQL Server'],
    image: '/memzyiconcopyyy.jpg',
    githubUrl: 'https://github.com/mohamedhossam123/memzy',
    liveDemoUrl: '',
    galleryImages: [
      '/project-images/memzy1.jpeg',
      '/project-images/memzy2.jpeg',
      '/project-images/memzy3.jpeg',
    ],
  },
  {
    id: 'fitlogic',
    name: 'Fitlogic: Beyond Limits',
    description: 'An all-in-one fitness and health platform delivering personalized workout plans and nutrition guidance.',
    technologies: ['React', 'Next.js', '.NET', 'SQL Server'],
    image: '/fitlogic_logo.png',
    githubUrl: 'https://github.com/mohamedhossam123/fitlogic',
    liveDemoUrl: '',
    galleryImages: [
      '/project-images/fitlogic1.png',
      '/project-images/fitlogic2.png',
      '/project-images/fitlogic3.png',
      '/project-images/fitlogic4.png',
    ],
  },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [nameVisible, setNameVisible] = useState(false); // New state for name animation

  const taglines = ["Software Engineer", "Problem Solver", "Fullstack", "Backend", "Frontend"];

  useEffect(() => {
    // Initial scroll handling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      let currentActive = 'hero';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger name reveal animation on mount
    const nameRevealTimeout = setTimeout(() => {
      setNameVisible(true);
    }, 500); // Delay before name starts revealing

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(nameRevealTimeout);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  const openProjectModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-800 to-slate-950 font-inter text-gray-200 antialiased">
      {/* Header/Navigation */}
      <header className={`bg-zinc-800 ${isScrolled ? 'py-2 shadow-xl' : 'py-4'} sticky top-0 z-50 transition-all duration-300`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-teal-400 rounded-md p-2 hover:bg-zinc-700 transition-colors group relative"
            // Adding hover effects for the entire name
            style={{ textShadow: isScrolled ? '0 0 8px rgba(0, 255, 255, 0.5)' : 'none' }} // Subtle glow on scroll
          >
            {'Mohamed Hossam'.split('').map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ease-out ${nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered reveal
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            {/* Added a pseudo-element for a subtle hover glow (requires custom CSS or JIT for dynamic colors) */}
            <span className="absolute inset-0 rounded-md transition-all duration-300 pointer-events-none group-hover:shadow-glow-teal"></span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#about" onClick={() => handleNavLinkClick('about')} className={`flex items-center space-x-2 text-gray-300 hover:text-teal-400 font-medium transition-all duration-300 rounded-md p-2 hover:bg-zinc-700 ${activeSection === 'about' ? 'text-teal-400 bg-zinc-700/30' : ''}`}><User size={18} /><span>About</span></a></li>
            <li><a href="#skills" onClick={() => handleNavLinkClick('skills')} className={`flex items-center space-x-2 text-gray-300 hover:text-teal-400 font-medium transition-all duration-300 rounded-md p-2 hover:bg-zinc-700 ${activeSection === 'skills' ? 'text-teal-400 bg-zinc-700/30' : ''}`}><Lightbulb size={18} /><span>Skills</span></a></li>
            <li><a href="#projects" onClick={() => handleNavLinkClick('projects')} className={`flex items-center space-x-2 text-gray-300 hover:text-teal-400 font-medium transition-all duration-300 rounded-md p-2 hover:bg-zinc-700 ${activeSection === 'projects' ? 'text-teal-400 bg-zinc-700/30' : ''}`}><Briefcase size={18} /><span>Projects</span></a></li>
            <li><a href="#contact" onClick={() => handleNavLinkClick('contact')} className={`flex items-center space-x-2 text-gray-300 hover:text-teal-400 font-medium transition-all duration-300 rounded-md p-2 hover:bg-zinc-700 ${activeSection === 'contact' ? 'text-teal-400 bg-zinc-700/30' : ''}`}><Mail size={18} /><span>Contact</span></a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2 transition-all duration-300">
              {isMobileMenuOpen ? <X size={28} className="rotate-90 transition-transform duration-300" /> : <Menu size={28} className="transition-transform duration-300" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-zinc-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in transition-opacity duration-300">
            <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-gray-300 hover:text-teal-400 focus:outline-none transition-all duration-300">
              <X size={36} className="rotate-90 transition-transform duration-300" />
            </button>
            <ul className="flex flex-col space-y-6 text-center">
              <li><a href="#about" onClick={() => handleNavLinkClick('about')} className={`flex items-center justify-center space-x-3 text-3xl font-bold text-gray-200 hover:text-teal-400 transition-colors transform hover:scale-105 ${activeSection === 'about' ? 'text-teal-400' : ''}`}><User size={28} /><span>About</span></a></li>
              <li><a href="#skills" onClick={() => handleNavLinkClick('skills')} className={`flex items-center justify-center space-x-3 text-3xl font-bold text-gray-200 hover:text-teal-400 transition-colors transform hover:scale-105 ${activeSection === 'skills' ? 'text-teal-400' : ''}`}><Lightbulb size={28} /><span>Skills</span></a></li>
              <li><a href="#projects" onClick={() => handleNavLinkClick('projects')} className={`flex items-center justify-center space-x-3 text-3xl font-bold text-gray-200 hover:text-teal-400 transition-colors transform hover:scale-105 ${activeSection === 'projects' ? 'text-teal-400' : ''}`}><Briefcase size={28} /><span>Projects</span></a></li>
              <li><a href="#contact" onClick={() => handleNavLinkClick('contact')} className={`flex items-center justify-center space-x-3 text-3xl font-bold text-gray-200 hover:text-teal-400 transition-colors transform hover:scale-105 ${activeSection === 'contact' ? 'text-teal-400' : ''}`}><Mail size={28} /><span>Contact</span></a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleCount={300}
            particleSpread={15}
            speed={0.15}
            particleColors={["#a78bfa", "#fde047", "#84d2c5"]}
            moveParticlesOnHover={true}
            particleHoverFactor={0.5}
            alphaParticles={true}
            particleBaseSize={150}
            sizeRandomness={1.5}
            cameraDistance={25}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-teal-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="/Me.jpg"
              alt="Mohamed Hossam Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Hi, I'm <span className="text-amber-300">Mohamed Hossam</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            A passionate{' '}
            <RotatingText
              texts={taglines}
              rotationInterval={3000}
              staggerDuration={0.05}
              staggerFrom="first"
              loop={true}
              auto={true}
              splitBy="words"
              className="inline-block"
              elementLevelClassName="text-amber-200 font-semibold"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            />{' '}
            creating impactful web solutions.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-400">
            <a
              href="https://github.com/mohamedhossam123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-700 text-teal-400 px-7 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <Github size={22} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-hossam-070a1332a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-700 text-blue-400 px-7 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-zinc-900">
        <div className="container mx-auto px-4">
          <ScrollFloat
            textClassName="text-3xl md:text-4xl font-bold text-center text-gray-100"
            containerClassName="flex items-center justify-center space-x-3"
          >
            <User className="text-teal-400" size={36} />
            <span>My Approach to Development</span>
          </ScrollFloat>

          <p className="max-w-3xl mx-auto text-center text-lg text-gray-300 mt-4 mb-16 leading-relaxed">
            For me, software engineering is more than just writing code—it's a craft centered on building valuable, high-quality experiences. My work is guided by a few core principles that ensure every project is both technically sound and genuinely useful.
          </p>

          {/* Core Philosophies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Problem Solving */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="inline-block bg-zinc-700 text-teal-400 p-4 rounded-full mb-4">
                <Lightbulb size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Deep Problem-Solving</h3>
              <p className="text-gray-300 leading-relaxed">
                I actively train my problem-solving skills to continuously improve in both my daily life and coding.
              </p>
            </div>

            {/* Card 2: Quality Code */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="inline-block bg-zinc-700 text-teal-400 p-4 rounded-full mb-4">
                <Code size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Quality From Front to Back</h3>
              <p className="text-gray-300 leading-relaxed">
                My passion is full-stack development. I ensure quality across the entire user journey—from a well-structured <strong className="font-medium text-teal-300">.NET</strong> backend to a responsive and intuitive <strong className="font-medium text-teal-300">React</strong> user interface.
              </p>
            </div>

            {/* Card 3: Continuous Growth */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="inline-block bg-zinc-700 text-teal-400 p-4 rounded-full mb-4">
                <Briefcase size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Purposeful Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                The tech landscape is always evolving, and so am I. I am committed to continuous learning and staying current with New Tech to deliver modern applications for any challenge.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-16">
            <a
              href="/MAINMohamedHossamCV.pdf"
              download
              className="inline-flex items-center gap-x-3 bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <User size={22} />
              <span>Download My CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gradient-to-r from-zinc-900 via-gray-900 to-slate-950 animate-fade-in">
        <div className="container mx-auto px-4">
          <ScrollFloat
            textClassName="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12"
            containerClassName="flex items-center justify-center space-x-3"
          >
            <Lightbulb className="text-teal-400" size={32} />
            <span>Technical Skills</span>
          </ScrollFloat>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 text-center mb-6">Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' },
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
                { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
              ].map((skill, index) => (
                <div key={skill.name} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <img src={skill.icon} alt={skill.name + ' icon'} className="w-16 h-16 mb-4 object-contain" />
                  <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400 text-center mb-6">Frameworks & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg' },
                { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' },
              ].map((tool, index) => (
                <div key={tool.name} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <img src={tool.icon} alt={tool.name + ' icon'} className="w-16 h-16 mb-4 object-contain" />
                  <h3 className="text-lg font-semibold text-gray-100">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <ScrollFloat
            textClassName="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12"
            containerClassName="flex items-center justify-center space-x-3"
          >
            <Briefcase className="text-teal-400" size={32} />
            <span>My Projects</span>
          </ScrollFloat>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.name} Project`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-base mb-4">
                    {project.description} Built with{' '}
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="font-semibold text-teal-300">{tech}</span>
                        {idx < project.technologies.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                    .
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-zinc-700 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-medium bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-medium bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center space-x-2 text-gray-500 font-medium bg-zinc-700 px-4 py-2 rounded-lg cursor-not-allowed"
                        title="Live demo not available yet"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo (Coming Soon)</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-gray-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <ScrollFloat
            textClassName="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12"
            containerClassName="flex items-center justify-center space-x-3"
          >
            <Mail className="text-teal-400" size={32} />
            <span>Get In Touch</span>
          </ScrollFloat>
          <div className="max-w-2xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-lg">
            <p className="text-center text-gray-300 text-lg mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            (Its not working at the moment)</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-200 bg-zinc-700 text-gray-100"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-200 bg-zinc-700 text-gray-100"
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-zinc-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-200 bg-zinc-700 text-gray-100"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 text-center text-gray-300 space-y-3">
              <p className="flex items-center justify-center space-x-2">
                <Mail size={22} className="text-teal-400" />
                <a href="mailto:mohamedhossam25709@gmail.com" className="hover:underline text-teal-300 font-medium">mohamedhossam25709@gmail.com</a>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <MapPin size={22} className="text-teal-400" />
                <span>Giza, Sheikh Zayed, Egypt</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mohamed Hossam. All rights reserved.</p>
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

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        title={currentProject ? `Images for ${currentProject.name}` : 'Project Images'}
      >
        {currentProject && (
          <RollingGallery
            images={currentProject.galleryImages}
            autoplay={true}
            pauseOnHover={true}
          />
        )}
      </ProjectModal>
    </div>
  );
};

export default App;