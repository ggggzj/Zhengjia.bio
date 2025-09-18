import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  Code,
  Database,
  Brain,
  Award,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Product Recommendation System",
      description: "Built a collaborative filtering recommendation engine for an online retail platform using machine learning algorithms to analyze user behavior and purchase patterns.",
      tech: ["Python", "scikit-learn", "pandas", "Flask", "PostgreSQL", "Redis"],
      highlights: ["Improved user engagement by 25%", "Real-time recommendation API", "A/B tested recommendation algorithms"]
    },
    {
      title: "Real-Time Chat Application with Video Calling",
      description: "Developed a full-stack messaging platform with real-time communication features including text messaging, file sharing, and video conferencing capabilities.",
      tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express"],
      highlights: ["Supports 100+ concurrent users", "End-to-end encryption", "Cross-platform compatibility"]
    },
    {
      title: "Task Management Dashboard with Analytics",
      description: "Created a comprehensive project management tool with team collaboration features, task tracking, and performance analytics for small to medium-sized teams.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Chart.js", "Docker", "AWS"],
      highlights: ["Interactive data visualizations", "Role-based access control", "Automated progress reporting"]
    },
    {
      title: "Personal Finance Tracker Mobile App",
      description: "Designed and developed a cross-platform mobile application for expense tracking, budget management, and financial goal setting with intuitive user interface.",
      tech: ["React Native", "TypeScript", "Firebase", "Expo", "Redux"],
      highlights: ["95% user retention rate", "Offline data synchronization", "Secure transaction categorization"]
    },
    {
      title: "Weather Monitoring IoT System",
      description: "Implemented an IoT-based weather station that collects environmental data and provides real-time monitoring through a web dashboard with historical trend analysis.",
      tech: ["Arduino", "Raspberry Pi", "Python", "MQTT", "InfluxDB", "Grafana"],
      highlights: ["24/7 data collection", "Remote monitoring capabilities", "Predictive weather alerts"]
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "SQL", "HTML", "CSS", "Bash", "Go"],
    "Technologies": ["React.js", "Node.js", "Django", "Flask", "Express.js", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Git", "Linux", "REST APIs", "GraphQL"]
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Zhengjia Guo
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-pink-500 ${
                    activeSection === item ? 'text-pink-500' : 'text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mb-4 p-4 border border-gray-200">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-pink-500 text-black"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-pink-50/30"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent animate-pulse">
            Zhengjia Guo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Full-Stack Developer & AI/ML Engineer | Building the Future with Code
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:zguo7940@usc.edu" className="flex items-center gap-2 bg-pink-100 text-pink-700 px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <Mail size={20} />
              zguo7940@usc.edu
            </a>
            <a href="tel:3236986485" className="flex items-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all border border-gray-200">
              <Phone size={20} />
              (323) 698-6485
            </a>
            <a href="https://www.linkedin.com/in/zhengjiaguo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-100 text-pink-700 px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/ggggzj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all border border-gray-200">
              <Github size={20} />
              GitHub
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-pink-500 hover:text-pink-600 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-black">
                <Calendar className="text-pink-500" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-pink-500">University of Southern California</h4>
                  <p className="text-gray-700">Master of Science in Computer Science</p>
                  <p className="text-sm text-gray-600">Jan 2024 - Dec 2026 • Los Angeles, California</p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Relevant Coursework:</strong> Analysis of Algorithms, Operating System, Computer Networks, Database Systems
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-black">
                <Brain className="text-pink-500" />
                Interests & Hobbies
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• Machine Learning & Deep Learning</p>
                <p>• Computer Vision & AR/VR Development</p>
                <p>• Full-Stack Web & Mobile Development</p>
                <p>• Cloud Computing & DevOps</p>
                <p>• Blockchain & Cryptocurrency</p>
                <p>• Open Source Contributions & Tech Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full">
                <Database className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-pink-500">Data Analyst Intern</h3>
                <p className="text-xl text-gray-700 mb-2">Holiday Sunshine Global Travel Service</p>
                <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin size={16} />
                  Beijing, China • Aug 2022 – Sep 2022
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    Engineered a Python-based feedback analysis pipeline using pandas and openpyxl to clean and aggregate voice/chatbot logs, helping product teams identify key user pain points and reduce unresolved interaction cases by 15%.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    Created Excel pivot tables and charts to highlight performance gaps across user queries, categorizing misrecognitions into four main causes through keyword matching and frequency analysis.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    Enhanced NLP system accuracy by 5% (from 85% to 90%) by proposing and deploying revisions to six standard questions in the production database, validated via A/B testing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-pink-500 leading-tight">{project.title}</h3>
                  {project.highlights.some(h => h.includes("Prize")) && (
                    <Award className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                  )}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs border border-pink-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-black">
                  <Code className="text-pink-500" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="bg-pink-50 text-black px-4 py-2 rounded-full text-sm border border-pink-200 hover:border-pink-400 hover:bg-pink-100 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            I'm always open to discussing new opportunities, collaborations, and innovative projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:zguo7940@usc.edu" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Mail className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">Email</h3>
              <p className="text-gray-600 text-sm">zguo7940@usc.edu</p>
            </a>
            <a href="tel:3236986485" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Phone className="mx-auto mb-4 text-black group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">Phone</h3>
              <p className="text-gray-600 text-sm">(323) 698-6485</p>
            </a>
            <a href="https://www.linkedin.com/in/zhengjiaguo" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Linkedin className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">LinkedIn</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                Profile <ExternalLink size={14} />
              </div>
            </a>
            <a href="https://github.com/ggggzj" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Github className="mx-auto mb-4 text-black group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">GitHub</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                Projects <ExternalLink size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Zhengjia Guo. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;