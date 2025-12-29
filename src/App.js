
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  Cpu, 
  BookOpen, 
  Award,
  Code,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Send,
  User,
  Home,
  ShieldCheck,
  Zap,
  Filter,
  Image as ImageIcon,
  FileText
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollCertificates = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id 
          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      <Icon size={16} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  const certificates = [
    {
      title: "Machine Learning",
      issuer: "Coursera",
      date: "2024",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop",
      desc: "Comprehensive masterclass on Python & R for Data Science.",
      pdf: "/certs/Machine_Learning.pdf"
    },
    {
      title: "Data Analytics and Visualisation",
      issuer: "Tata(Forage)",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
      desc: "In-depth training on Python libraries like Pandas & Numpy.",
      pdf: "/certs/Forage_Job_Simulation.jpg"
    },
    {
      title: "Python",
      issuer: "Sololearn",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
      desc: "Created interactive dashboards to reveal business insights.",
      pdf: "/certs/Python.pdf"
    },
    {
      title: "Intro to SQL",
      issuer: "Coursera",
      date: "2022",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop",
      desc: "Mastering database management and complex queries.",
      pdf: "/certs/SQL.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            DJ.
          </div>
          <div className="flex gap-2 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
            <NavLink id="home" icon={Home} label="Home" />
            <NavLink id="about" icon={User} label="About" />
            <NavLink id="skills" icon={Cpu} label="Skills" />
            <NavLink id="projects" icon={Briefcase} label="Projects" />
            <NavLink id="Quests" icon={Code} label="Quests" />
            <NavLink id="Cert" icon={ShieldCheck} label="Certificate" />
            <NavLink id="contact" icon={Mail} label="Contact" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Drashti Jivani
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              An aspiring <span className="text-white font-medium">Data Scientist</span> and <span className="text-white font-medium">ML Engineer</span> crafting intelligent solutions with Python and Computer Vision.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Send size={18} /> Let's Connect
              </button>
              
              <a 
                href="/Drashti_Jivani.pdf" 
                download="Drashti_Jivani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="flex gap-6 pt-8 text-slate-400">
              <a href="https://github.com/drshtijivan" className="hover:text-cyan-400 transition-colors hover:scale-110 transform"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/drashti-j-7a856a242/" className="hover:text-cyan-400 transition-colors hover:scale-110 transform"><Linkedin size={24} /></a>
              <a href="mailto:jivanidrashti2004@gmail.com" className="hover:text-cyan-400 transition-colors hover:scale-110 transform"><Mail size={24} /></a>
            </div>
          </div>

          <div className="relative z-0 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-500 ml-2 font-mono">developer_profile.py</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex">
                  <span className="text-violet-400 w-24">class</span>
                  <span className="text-yellow-400">Drashti_Jivani</span>
                </div>
                <div className="flex pl-4">
                  <span className="text-slate-500 w-24">role</span>
                  <span className="text-green-400">"Data Science Enthusiast"</span>
                </div>
                <div className="flex pl-4">
                  <span className="text-slate-500 w-24">education</span>
                  <span className="text-green-400">"B.E. Information Technology"</span>
                </div>
                <div className="flex pl-4">
                  <span className="text-slate-500 w-24">location</span>
                  <span className="text-green-400">"Surat, Gujarat, India"</span>
                </div>
                <div className="flex pl-4">
                  <span className="text-slate-500 w-24">skills</span>
                  <span className="text-cyan-400">['Python', 'ML', 'OpenCV', 'React']</span>
                </div>
                <div className="pl-4 text-slate-600 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm h-full">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-cyan-400" />
                About Me
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                I am a dedicated developer passionate about <strong className="text-cyan-400">Artificial Intelligence</strong> and <strong className="text-violet-400">Data Science</strong>. 
                My expertise lies in building intelligent solutions using Python, Computer Vision, and Machine Learning algorithms. 
                I thrive on transforming raw data into actionable insights and solving complex problems through code.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-cyan-400"><Code2 size={20}/></div>
                  <div>
                    <h4 className="font-semibold text-white">Technical Expertise</h4>
                    <p className="text-sm text-slate-400">Python, Machine Learning, NLP</p>
                    <p className="text-xs text-slate-500">Computer Vision & Deep Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-violet-400"><Briefcase size={20}/></div>
                  <div>
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-sm text-slate-400">Intern at SAP, Oasis Infobyte</p>
                    <p className="text-xs text-slate-500">Multiple Certifications in Data Science</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Block (Replaces Stats) */}
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="text-violet-400" />
                Education
              </h3>
              
              <div className="space-y-8">
                {/* Degree */}
                <div className="relative pl-6 border-l-2 border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
                  <h4 className="text-lg font-bold text-white">Bachelor of Engineering</h4>
                  <div className="text-cyan-400 text-sm mb-1">G H Patel College of Engineering & Technology</div>
                  <div className="text-slate-500 text-xs mb-3">Anand • 2021-2025</div>
                  
                  <div className="space-y-2">
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-sm text-slate-300 font-medium">Major: Information Technology</div>
                      <div className="text-xs text-cyan-400 mt-1">CGPA: 8.92 / 10</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="text-sm text-slate-300 font-medium">Minor: Internet of Things</div>
                      <div className="text-xs text-violet-400 mt-1">CGPA: 8.22 / 10</div>
                    </div>
                  </div>
                </div>

                {/* School */}
                <div className="relative pl-6 border-l-2 border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900"></div>
                  <h4 className="text-lg font-bold text-white">Higher Secondary (HSC) & SSC</h4>
                  <div className="text-violet-400 text-sm mb-1">Ashadeep Vidhyalay-4</div>
                  <div className="text-slate-500 text-xs mb-3">Surat</div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">HSC (2021)</span>
                      <span className="text-white font-mono font-bold">87.07%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">SSC (2019)</span>
                      <span className="text-white font-mono font-bold">92.16%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Tech */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Languages & Web</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'PHP'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-colors group">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Science & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'OpenCV', 'EasyOCR', 'YOLO', 'TensorFlow'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-fuchsia-500/50 transition-colors group">
              <div className="w-12 h-12 bg-fuchsia-500/10 rounded-lg flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Jupyter', 'Google Colab', 'Streamlit', 'MySQL', 'Git', 'Xampp'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-400">Showcasing my journey in code</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
              View Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Twitter Sentiment Analysis",
                desc: "Processed 1.6M tweets to predict public sentiment using Logistic Regression and TF-IDF.",
                tech: ["NLP", "Python", "ML"],
                color: "cyan",
                date: "Dec 2025"
              },
              {
                title: "Shipping Label OCR System",
                desc: "Production-ready pipeline extracting Waybill IDs from complex labels using OpenCV & EasyOCR.",
                tech: ["Computer Vision", "Streamlit", "OCR"],
                color: "violet",
                date: "Oct 2025"
              },
              {
                title: "Handwritten Digit Recognition",
                desc: "Build an AI application to recognizing multi-digit numbers from multi-form inputs like user's drawing, image and audio by integrating image data processing and speech to text translation using a custom trained CNN.",
                tech: ["Deep Learning", "CNN", "PyAudio"],
                color: "violet",
                date: "Sep 2025"
              },
              {
                title: "AI-Powered Meeting Task Assigner",
                desc: "Built a Streamlit app using OpenAI Whisper and SVM to transcribe meetings and auto-assign tasks to the team members based on skill matching.",
                tech: ["OpenAI Whisper", "Scikit-learn", "Streamlit"],
                color: "cyan",
                date: "Oct 2025"
              },
              {
                title: "Cat vs Dog Image Classifier",
                desc: "A high-accuracy Deep Learning model capable of distinguishing between cats and dogs in real-time. Built using Convolutional Neural Networks (CNN) and trained on a large dataset of animal images.",
                tech: ["Python", "TensorFlow", "Keras"],
                color: "cyan",
                date: "Jan 2025"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1">
                <div className={`absolute top-0 left-0 w-1 h-full bg-${project.color}-500 transition-all group-hover:w-2`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">{project.date}</span>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className={`text-xs font-medium px-2.5 py-0.5 rounded border border-${project.color}-500/20 bg-${project.color}-500/10 text-${project.color}-300`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithmic Quests Section (New Tasks Section) */}
      <section className="py-20 bg-slate-900/20" id='Quests'>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Algorithmic Quests</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Task 1: Email Spam */}
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-green-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">96.77% Acc</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Email Spam Prediction</h3>
              <p className="text-sm text-slate-400 mb-3">
                Classified emails as spam or ham using <span className="text-slate-200">Logistic Regression</span> based on content features.
              </p>
            </div>

            {/* Task 2: Movie Genre */}
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-yellow-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                  <Filter size={20} />
                </div>
                <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded">82.93% Acc</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Movie Genre Prediction</h3>
              <p className="text-sm text-slate-400 mb-3">
                Predicted movie genres solely from textual descriptions using <span className="text-slate-200">Support Vector Machines (SVM)</span>.
              </p>
            </div>

            {/* Task 3: Credit Card Fraud */}
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded">99.87% Max Acc</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Credit Card Fraud Detection</h3>
              <p className="text-sm text-slate-400 mb-3">
                Comparative analysis of 3 models. <span className="text-slate-200">Random Forest</span> achieved the highest accuracy.
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500"><span>Logistic Regression</span> <span>99.49%</span></div>
                <div className="flex justify-between text-xs text-white"><span>Random Forest</span> <span>99.87%</span></div>
                <div className="flex justify-between text-xs text-slate-500"><span>Decision Tree</span> <span>99.79%</span></div>
              </div>
            </div>

            {/* Task 4: Customer Churn */}
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                  <Zap size={20} />
                </div>
                <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-1 rounded">86.65% Acc</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Customer Churn Prediction</h3>
              <p className="text-sm text-slate-400 mb-3">
                Analyzed customer behavior to predict churn using a <span className="text-slate-200">Random Forest Classifier</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience & Internships</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                role: "Intern",
                company: "SAP",
                date: "Nov 2024 - April 2025",
                tasks: [
                 " Developed a movie and Book recommendation system using machine learning algorithms with an interactive UI for displaying movie details, providing a seamless user experience."
                ],
                icon: Briefcase
              },
              {
                role: "Data Science Intern",
                company: "Oasis Infobyte",
                date: "May 2024",
                tasks: [
                  "Executed Iris Data Classification using statistical modeling techniques.",
                  "Performed extensive Unemployment Data exploration and visualization.",
                  "Built a Car Price Prediction model utilizing advanced regression analysis."


                ],
                icon: Database
              },
              {
                role: "Tech A Intern",
                company: "Tech A",
                date: "April 2024",
                tasks: [
                 "Conducted Water Quality Data Analysis with different charts and graphs.",
                  "Implemented Housing Price Prediction models using Regression algorithms.",
                  "Developed a Titanic Survival Prediction system using Machine Learning classifiers."
                ],
                icon: Code2
              }
            ].map((exp, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)] shrink-0">
                    <exp.icon size={18} />
                  </div>
                  {i !== 2 && <div className="w-0.5 h-full bg-slate-800 my-2"></div>}
                </div>
                <div className="pb-8 w-full">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-cyan-400 text-sm mb-4">{exp.company} • {exp.date}</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="leading-relaxed pl-1">{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Gallery Section */}
      <section className="py-20 relative" id="Cert">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Certifications</h2>
              <p className="text-slate-400">Continuous learning & achievements</p>
            </div>
            
            {/* Scroll Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scrollCertificates('left')}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollCertificates('right')}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="min-w-[300px] md:min-w-[350px] bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden snap-center group hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 z-20 bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono border border-slate-800">
                    {cert.date}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                     <div>
                        <div className="text-xs text-violet-400 font-bold mb-1 uppercase tracking-wider">{cert.issuer}</div>
                        <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                     </div>
                     <a 
                       href={cert.pdf} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                       title="View Certificate"
                     >
                       <ExternalLink size={16} />
                     </a>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I'm currently looking for new opportunities in Data Science and Machine Learning. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
              <a href="mailto:jivanidrashti2004@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all w-full md:w-auto">
                <div className="p-2 bg-cyan-500/10 rounded-full text-cyan-400"><Mail size={20} /></div>
                <div className="text-left">
                  <div className="text-xs text-slate-500">Email Me</div>
                  <div className="text-sm font-medium">jivanidrashti2004@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+918160829064" className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all w-full md:w-auto">
                <div className="p-2 bg-violet-500/10 rounded-full text-violet-400"><Phone size={20} /></div>
                <div className="text-left">
                  <div className="text-xs text-slate-500">Call Me</div>
                  <div className="text-sm font-medium">(+91) 8160829064</div>
                </div>
              </a>

               <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all w-full md:w-auto rounded-xl w-full md:w-auto">
                <div className="p-2 bg-fuchsia-500/10 rounded-full text-fuchsia-400"><MapPin size={20} /></div>
                <div className="text-left">
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="text-sm font-medium">Surat, Gujarat</div>
                </div>
              </div>
            </div>

            <a 
              href="mailto:jivanidrashti2004@gmail.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <p>© 2025 Drashti Jivani. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
