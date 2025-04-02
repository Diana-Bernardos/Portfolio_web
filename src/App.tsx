import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase, User, Send, Menu, X } from 'lucide-react';
import Article from './component/Article';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (showArticle) {
    return <Article onBack={() => setShowArticle(false)} />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-purple-800">DB</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-purple-600 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-[url('./assets/fondo.jpg')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/50"></div>
        <div className="text-center mb-8 relative z-40">
          <h1 className="text-8xl font-semibold text-white mb-4 animate-fade-in">¡Hola! soy Diana Bernardos</h1>
          <p className="text-4xl text-purple-200 mb-6 animate-fade-in-delay-1">Full Stack Developer & UX/UI Desing</p>
          <div className="flex justify-center gap-6 mb-8 animate-fade-in-delay-2">
            <a href="https://github.com/Diana-Bernardos" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/diana-bernardos-moraleda-536378223" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https:dianabernardosm@gmail.com" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-300" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Sobre mi</h2>
          </div>
          <div className="glass-effect p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=1000&fit=crop"
                alt="Professional portrait"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ¡Bienvenido a mi universo creativo! Aquí comparto mis nuevas aficiones por el diseño web , mis ideas y las experiencias que han moldeado mi carrera profesional. Sumérgete para descubrir qué impulsa mi creatividad.Acompáñame en este viaje mientras presento mis experiencias y la inspiración que hay detrás de él. 
              </p>
              
              <button
                onClick={() => setShowArticle(true)}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
              >
                Descubre más
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Proyectos </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group glass-effect rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Ver Proyecto <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Send className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Let's Connect</h2>
          </div>
          <div className="glass-effect p-12 rounded-2xl shadow-xl">
            <p className="text-xl text-gray-700 mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-xl text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-b from-white to-purple-50">
        <div className="text-center text-gray-600">
          © 2024 Diana Bernardos. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=400&fit=crop",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad095?w=800&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    link: "#"
  }
];

export default App;