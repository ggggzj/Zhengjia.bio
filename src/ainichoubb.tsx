import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Calendar,
  Code,
  Cpu,
  Wrench,
  Layers,
  Terminal,
  Brain,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  Smartphone,
  Database,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

const LINKS = {
  email: 'mailto:zguo7940@usc.edu',
  phone: 'tel:+13236986485',
  linkedin: 'https://www.linkedin.com/in/zhengjiaguo/',
  github: 'https://github.com/ggggzj',
  scholar: 'https://scholar.google.com/citations?user=7hLJq8UAAAAJ'
};

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

  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'SolaView',
      location: 'Toronto, Canada',
      period: 'Aug 2026 – Present',
      current: true,
      Icon: Smartphone,
      tech: ['Flutter', 'Supabase', 'PostgreSQL', 'iOS', 'Android'],
      bullets: [
        'Shipped features and fixes to a bilingual Flutter and Supabase app for finding courts, organizing games, and trading gear',
        'Optimized Flutter map cold-start by deferring tile loads until remote config resolved, cutting redundant requests 50%',
        'Diagnosed a silent CDN failure serving corrupt map tiles behind HTTP 200, then blocked recurrence with a regression test',
        'Prevented an insecure Flutter Web release in code review by finding Supabase JWT session restore on anonymous pages',
        'Refactored duplicated auth and loading logic into one reusable Flutter widget, shipping a global create action on iOS and Android',
        'Shipped Frisbee as a new sport end to end with an additive PostgreSQL migration, adding no table, RPC, or type change'
      ]
    },
    {
      role: 'AI Engineer Intern',
      company: 'GenseeAI',
      location: 'Los Angeles, CA',
      period: 'May 2026 – Aug 2026',
      current: false,
      Icon: Brain,
      tech: ['Python', 'SQLAlchemy', 'Postgres', 'SQLite', 'Claude API', 'Gemini', 'JSON Schema'],
      bullets: [
        'Built two nightly LLM pipelines in Python, SQLAlchemy, Postgres and SQLite that triage Hacker News and attribute GitHub traffic',
        'Cut projected LLM cost from $120 to $11 /month by replacing a 400-items/day design estimate with 121 hours of measured traffic',
        'Made provider swaps a config change by putting Claude and Gemini behind one Python interface with a shared JSON Schema',
        'Caught a free model asserting a sharp increase from an empty baseline by replaying stored prompts, keeping Claude in production',
        'Recovered a launched archive dying at exit 126 before any logging ran, restoring collection to 28 straight nights, zero failures',
        'Kept LLM mistakes reversible by letting the model write only the judgment layer, above raw API facts and pure Python transforms'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Holiday Sunshine Global Travel Service',
      location: 'Beijing, China',
      period: 'Aug 2022 – Sep 2022',
      current: false,
      Icon: Database,
      tech: ['Python', 'Data Pipelines', 'Automation'],
      bullets: [
        'Reduced manual log processing time by 60% with a Python script that cleaned and organized daily user logs',
        'Lowered processing errors 15% with reusable data-loading and error-handling utilities for an internal tool',
        'Saved 4 hours per week for product and engineering staff with an automated weekly reporting script',
        'Accelerated the end-to-end pipeline 25% by tracing and fixing broken parsing logic in the existing workflow'
      ]
    }
  ];

  const currentProject = {
    title: 'BingoCareer — H-1B Job Search Platform',
    subtitle: 'Mar 2026 – Present',
    tagline: 'Chrome Extension · Web App · Backend',
    description:
      'A visa-sponsorship job platform built across a Manifest V3 Chrome extension, a React web app, and a FastAPI backend — all reading from one Postgres dataset distilled from raw DOL filings, so every sponsorship badge traces back to a real employer record.',
    link: 'https://chromewebstore.google.com/detail/h1b-checker-for-linkedin/fjlefpeahmeahjbadnnogdnailahdafe',
    linkLabel: 'Chrome Web Store',
    tech: ['Chrome Extension (MV3)', 'React', 'FastAPI', 'PostgreSQL', 'pandas', 'Vercel', 'Ollama'],
    features: [
      'Built a visa-sponsorship job platform across a Chrome extension, a React web app, a FastAPI backend, all on one Postgres dataset',
      'Shipped a Manifest V3 Chrome extension that flags visa-sponsorship history across 4 job boards, reaching 70+ users',
      'Built the employer lookup behind every badge in pandas and PostgreSQL, turning 555 MB of DOL Excel into 72K queryable records',
      'Validated a Python rule-based denial classifier at F1 0.95 on a held-out set, scored once after six rounds on a separate dev split',
      'Benchmarked local Ollama 7B and 14B models against those Python rules on one eval set, and kept the rules after both only tied on F1',
      'Cut false sponsorship-denial flags from 694 to 153 across 8,607 live postings by adding regex exceptions for ATS legal boilerplate',
      'Shipped a React job feed on Vercel crawling 43 ATS boards on a schedule, with each employer’s H-1B filing count per posting'
    ]
  };

  const featuredProjects = [
    {
      title: 'CoffeeCompass',
      subtitle: 'RAG Search Application',
      date: 'Feb 2026 – May 2026',
      description:
        'Bilingual semantic search over coffee shops: an LLM slot-extractor turns a free-form query into a typed filter schema, then pgvector ANN search and SQL filters run together behind FastAPI.',
      tech: ['FastAPI', 'pgvector', 'PostgreSQL', 'gpt-4o-mini', 'HNSW', 'k6'],
      highlights: [
        'Served RAG search over 100+ venues at p95 under 250 ms by pairing pgvector ANN search with SQL filters in FastAPI',
        'Ingested 100 shops in under 10 minutes for under $0.50 with a Places API, gpt-4o-mini extraction, and UPSERT pipeline',
        'Cut prompt-tag errors 80% with an LLM slot-extractor parsing English and Chinese queries into a typed filter schema',
        'Reduced p95 latency 30% with an HNSW index, LRU-cached slot outputs, and batched embeddings, verified by a k6 load test'
      ]
    },
    {
      title: 'Semantic-Aware Image Compression & Restoration',
      subtitle: 'Deep Learning Pipeline',
      date: 'Feb 2025 – May 2025',
      description:
        'A compression pipeline that scores which regions of an image actually matter, spends bits there, and restores the rest with diffusion-based super-resolution.',
      tech: ['SegFormer', 'InstructBLIP', 'GPT-4o', 'SUPIR', 'PyTorch'],
      highlights: [
        'Cut bitrate up to 99.5% (4 MB to 20 KB) with a SegFormer, InstructBLIP, and GPT-4o pipeline scoring region importance',
        'Beat a JPEG baseline at equal file size on 100 images, cutting LPIPS 0.41 to 0.36 and raising SSIM 0.51 to 0.63',
        'Cut rating inconsistency with schema-driven GPT-4o prompts, and restored detail with SUPIR diffusion-based restoration'
      ]
    },
    {
      title: 'Tipplers — Interactive Cocktail Map for LA',
      subtitle: 'Side Project · Live Beta',
      date: '2025',
      link: 'https://ggggzj.github.io/Tipplers-Cocktail-Map/',
      description:
        "An interactive web app for exploring Los Angeles's cocktail scene — secret speakeasies to rooftop lounges — on one map-driven, filterable experience.",
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google Maps API'],
      highlights: [
        'Interactive map with custom markers and real-time open hours',
        'Smart filtering by price, rating, atmosphere, and cocktail type',
        'Personalized recommendations and a saved-favorites system',
        'Responsive design across desktop and mobile'
      ]
    }
  ];

  const earlierProjects = [
    {
      title: 'Customer Segmentation & Classification',
      date: 'Feb 2025',
      description:
        'Customer personality analysis on a marketing dataset (2,240 entries × 28 features), covering segmentation and education-level prediction.',
      tech: ['Python', 'K-Means', 'KNN', 'PCA'],
      highlights: [
        'PCA for dimensionality reduction (28 → 2 components)',
        'K-Means clustering into 5 groups (silhouette 0.62)',
        'KNN education classifier at 82% accuracy'
      ]
    },
    {
      title: 'Collaborative BIM & AR Building Maintenance',
      date: 'Jan 2023 – May 2025',
      description:
        'AR-integrated facility maintenance system built as an undergraduate thesis, targeting blueprint management and spatial visualization.',
      tech: ['Unity3D', 'Vuforia SDK', 'C#', 'AR'],
      highlights: [
        'Real-time 2D blueprint recognition',
        'Overlaid 3D pipeline models for visualization',
        'Mobile camera integration for on-site operations'
      ]
    },
    {
      title: 'Intelligent Robotics for Warehouse Logistics',
      date: 'Mar 2022 – Sep 2022',
      description:
        'An intelligent logistics robot that automates block transportation in a warehouse simulation.',
      tech: ['Python', 'C', 'LAB color space', 'Computer Vision'],
      highlights: [
        '100% block recognition accuracy',
        '90% precision on grasping tasks',
        'Awarded First Prize for project excellence'
      ]
    },
    {
      title: 'Intelligent Control for Smart Ventilation',
      date: 'Apr 2021 – Sep 2021',
      description:
        'An intelligent ventilation system with automated control mechanisms for energy efficiency.',
      tech: ['Arduino', 'C', 'IoT', 'Sensors'],
      highlights: [
        'Under 1s response latency',
        'Multi-input control for adaptive regulation',
        'Awarded First Prize for innovation'
      ]
    }
  ];

  const skills = [
    {
      category: 'Languages',
      Icon: Terminal,
      items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'C', 'Go', 'C#', 'SQL', 'Bash', 'HTML', 'CSS']
    },
    {
      category: 'AI / ML',
      Icon: Cpu,
      items: [
        'GenAI & AI-assisted development tools',
        'Claude API',
        'OpenAI API',
        'Embeddings',
        'pgvector',
        'RAG',
        'JSON Schema'
      ]
    },
    {
      category: 'Technologies',
      Icon: Code,
      items: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'AWS', 'PyTorch', 'Linux', 'Unity']
    },
    {
      category: 'Tools',
      Icon: Wrench,
      items: ['pytest', 'Git', 'GitHub Actions (CI/CD)', 'Beautiful Soup', 'Psycopg2', 'Elastic Beanstalk']
    },
    {
      category: 'Concepts',
      Icon: Layers,
      items: [
        'Data Structures & Algorithms',
        'Object-Oriented Design',
        'Design Patterns',
        'Distributed Systems',
        'Microservices',
        'CI/CD',
        'Agile'
      ]
    }
  ];

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
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
              {navItems.map((item) => (
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
              {navItems.map((item) => (
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 py-4 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent animate-pulse">
            Zhengjia Guo
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700">
            Software Engineer · AI Engineer | MS Computer Science @ USC
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
            I build LLM pipelines, RAG search, and full-stack products — and I like the parts where a
            measurement changes the design.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={LINKS.email} className="flex items-center gap-2 bg-pink-100 text-black px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <Mail size={20} />
              zguo7940@usc.edu
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-100 text-black px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-100 text-black px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <Github size={20} />
              GitHub
            </a>
            <a href={LINKS.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-100 text-black px-6 py-3 rounded-full hover:bg-pink-200 transition-all border border-pink-200">
              <GraduationCap size={20} />
              Google Scholar
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
                  <p className="text-sm text-gray-600">Jan 2024 – Dec 2026 • Los Angeles, CA</p>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Coursework:</strong> Analysis of Algorithms, Operating Systems, Computer Networks,
                    Database Systems, Web Technologies, Deep Learning
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-black">
                <Brain className="text-pink-500" />
                What I Work On
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• LLM pipelines with measured cost and reversible failure modes</p>
                <p>• RAG and vector search (pgvector, embeddings, typed filter schemas)</p>
                <p>• Full-stack products: React, FastAPI, PostgreSQL</p>
                <p>• Cross-platform mobile with Flutter and Supabase</p>
                <p>• Data pipelines that turn messy public datasets into queryable records</p>
                <p>• Computer vision and deep learning for compression and restoration</p>
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
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 p-3 rounded-full flex-shrink-0">
                    <exp.Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-pink-500">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-gray-700 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location} • {exp.period}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs border border-pink-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Now Building */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <Sparkles className="text-pink-500" size={24} />
              Now Building
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-pink-500 leading-tight">{currentProject.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{currentProject.tagline}</p>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mt-2 border border-green-200">
                    {currentProject.subtitle}
                  </span>
                </div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all whitespace-nowrap"
                >
                  <ExternalLink size={16} />
                  {currentProject.linkLabel}
                </a>
              </div>

              <p className="text-gray-700 mb-6 text-base leading-relaxed">{currentProject.description}</p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm border border-pink-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-3 text-gray-800">What I Built</h5>
                <div className="space-y-2">
                  {currentProject.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <Briefcase className="text-pink-500" size={24} />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xl font-bold text-pink-500 leading-tight">{project.title}</h4>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 flex-shrink-0 mt-1"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{project.subtitle}</p>
                  <p className="text-xs text-gray-500 mb-4">{project.date}</p>
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
                  <div className="space-y-2 mt-auto">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earlier Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Earlier Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earlierProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-pink-500 leading-tight">{project.title}</h4>
                    {project.highlights.some((h) => h.includes('Prize')) && (
                      <Award className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{project.date}</p>
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
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
            {skills.map(({ category, Icon, items }, index) => (
              <div
                key={category}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-pink-100 ${
                  index === skills.length - 1 && skills.length % 2 === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-black">
                  <Icon className="text-pink-500" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            I'm always open to discussing new opportunities, collaborations, and innovative projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={LINKS.email} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Mail className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">Email</h3>
              <p className="text-gray-600 text-sm">zguo7940@usc.edu</p>
            </a>
            <a href={LINKS.phone} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Phone className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">Phone</h3>
              <p className="text-gray-600 text-sm">(+1) 323-698-6485</p>
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Linkedin className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">LinkedIn</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                Profile <ExternalLink size={14} />
              </div>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group">
              <Github className="mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-bold mb-2 text-black">GitHub</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                Projects <ExternalLink size={14} />
              </div>
            </a>
          </div>
          <div className="mt-6">
            <a
              href={LINKS.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors text-sm"
            >
              <GraduationCap size={18} />
              Google Scholar <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2026 Zhengjia Guo. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
