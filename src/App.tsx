import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase, User, Send, Menu, X, Moon, Sun, FileDown } from 'lucide-react';
import Article from './component/Article'
import ProjectsGallery from './component/ProyectsGallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (showArticle) {
    return <Article onBack={() => setShowArticle(false)} />;
  }

  if (showProjects) {
    return <ProjectsGallery onBack={() => setShowProjects(false)} />;
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-purple-800 dark:text-purple-400">DB</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Inicio', 'Sobre Mi', 'Proyectos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <a
                href="/assets/docs/CV.pdf"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                download= "CV.pdf"
                
              >
                <FileDown className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <a
                href="/path-to-your-cv.pdf"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                download
              >
                <FileDown className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with new elegant background */}
      <header id="inicio" className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-[url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80&auto=format')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-600/20 to-black/70 backdrop-blur-[2px]"></div>
        <div className="text-center mb-8 relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Hola soy Diana Bernardos
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-200 mb-6 animate-fade-in-delay-1">
          Frontend Developer & UX/UI Design 
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 animate-fade-in-delay-2">
            <a href="https://github.com/Diana-Bernardos" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200 p-2">
              <Github className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/diana-bernardos-moraleda-536378223" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200 p-2">
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="https://dianabernardosm@gmail.com" className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200 p-2">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 animate-fade-in-delay-2 border border-white/20 hover:border-white/40"
          >
            Descubre mi trabajo
          </button>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-300" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Sobre Mi</h2>
          </div>
          <div className="glass-effect dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1609813744174-a0df83d477fe?w=900&auto=format&fit=crohttps://images.unsplash.com/photo-1742196644267-f11e1e262431?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZvdG9zJTIwZGUlMjBwdWVydGFzJTIwZW50cmUlMjBhYmllcnRhcyUyMGRlJTIwY3Jpc3RhbCUyMGNvbiUyMGNvbG9yaWRvfGVufDB8fDB8fHwwp&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZvdG98ZW58MHx8MHx8fDA%3D"
                alt="Professional portrait"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              ¡Bienvenido a mi universo creativo! Aquí comparto mi afición por el diseño web , mis ideas y las experiencias que han moldeado mi carrera profesional. Sumérgete para descubrir qué impulsa mi creatividad.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Acompáñame en este viaje mientras presento mis experiencias y la inspiración que hay detrás de ellas. 
              </p>
              <button
                onClick={() => setShowArticle(true)}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
              >
                Conoce más sobre mí
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Proyectos Destacados</h2>
          </div>
          <div className="glass-effect dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxtaXMlMjBwcm95ZWN0b3MlMjB3ZWJ8ZW58MHx8MHx8fDA%3D"
                alt="Project showcase"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Mi Portafolio de Proyectos</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <p>Aqui muestro algunos de mis proyectos personales.</p>
                 <p>Cada proyecto refleja mi pasión por crear experiencias digitales, con un reto distinto y una problematica distinta a solucionar.</p>
                
                
              </p>
              <button
                onClick={() => setShowProjects(true)}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
              >
                Ver Todos los Proyectos
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Send className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Hablamos</h2>
          </div>
          <div className="glass-effect dark:bg-gray-800/50 p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Dispuesta a colaborar con nuevos equipos y proyectos para poner a disposición todo mi potencial. 
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-xl text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contáctame
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-900">
        <div className="text-center text-gray-600 dark:text-gray-400">
          © 2025 Diana Bernardos. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;