"use client"
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase, User, Send, Menu, X } from 'lucide-react';
import ProjectsGallery from './component/ProyectsGallery';
import Article from './component/Article';
import movil from "./assets/moviles.jpg"
import libro from "./assets/ebook-example.jpg"
import calculadora from "./assets/Calculadora.png"
import recetario from "./assets/recetario.jpg"
import shopping from "./assets/shopping.jpg"
import spice from "./assets/spice.webp"
import easy from "./assets/easy_4.png"
import finnest from "./assets/Finest.png"
import study from "./assets/case.png"


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showArticle, setShowArticle] = useState(false)
  const [showProjectsGallery, setShowProjectsGallery] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  if (showArticle) {
    return <Article onBack={() => setShowArticle(false)} />
  }

  if (showProjectsGallery) {
    return <ProjectsGallery projects={projects} onBack={() => setShowProjectsGallery(false)} />
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
              {["inicio", "about", "projects", "contact"].map((item) => (
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
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["inicio", "Sobre Mi", "Proyectos", "Contacto"].map((item) => (
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
      <header
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-[url('/assets/fondo.jpg')] bg-cover bg-fixed"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/50"></div>
        <div className="text-center mb-8 relative z-40">
          <h1 className="text-9xl font-semibold text-white mb-4 animate-fade-in">¡Hola! soy Diana Bernardos</h1>
          <p className="text-4xl text-purple-200 mb-6 animate-fade-in-delay-1">Full Stack Developer & UX/UI Desing</p>
          <div className="flex justify-center gap-6 mb-8 animate-fade-in-delay-2">
            <a
              href="https://github.com/Diana-Bernardos"
              className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/diana-bernardos-moraleda-536378223"
              className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https:dianabernardosm@gmail.com"
              className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200"
            >
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
                ¡Bienvenido a mi universo creativo! Aquí comparto mis nuevas aficiones por el diseño web , mis ideas y
                las experiencias que han moldeado mi carrera profesional. Sumérgete para descubrir qué impulsa mi
                creatividad.Acompáñame en este viaje mientras presento mis experiencias y la inspiración que hay detrás
                de él.
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

          <div className="glass-effect p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Projects gallery"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Explora mi galería donde muestro algunos de mis proyectos . Cada proyecto con un reto distinto siempre pensando en la mejor solución del problema y la mejor experiencia de usuario.

                Don de reflejar mejor  mi pasión por el desarrollo web y el diseño UX/UI.
              </p>

              <button
                onClick={() => setShowProjectsGallery(true)}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
              >
                Ver Galería
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=500"}
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
            <h2 className="text-4xl font-bold text-gray-800">Hablamos</h2>
          </div>
          <div className="glass-effect p-12 rounded-2xl shadow-xl">
            <p className="text-xl text-gray-700 mb-8">Dispuesta a nuevas oportunidades</p>
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
        <div className="text-center text-gray-600">© 2025 Diana Bernardos. Todos los derechos reservados.</div>
      </footer>
    </div>
  )
}

// Update projects array to use public paths instead of imports
const projects = [
  {
    title: "Family Planner",
    description: "Calendario de planificadión familiar, ten todo bajo control,con tu asistente familiar",
    image: movil,
    technologies: ["React", "Node.js", "Mysql", "ollama"],
    link: "https://www.canva.com/design/DAGgfKaN_gE/LP4Oz6uDrQp1Yi5p46ZNUw/edit?utm_content=DAGgfKaN_gE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "Project Sphere",
    description: " Guarda y coparte tur mejores proyectos",
    image: libro,
    technologies: ["React", "Mysql", "JS", "CSS"],
    link: "https://diana-bernardos.github.io/project-promo-X-module-3-team-2/",
  },
  {
    title: "Calculadora cientifica animada",
    description:
      "Una app muy útil en cualquier momento, conoperaciones complicadas para la universidad por si es necesario.",
    image: calculadora,
    technologies: ["React", "JS", "CSS"],
    link: "https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/",
  },
  {
    title: "Recetario Sin Gluten",
    description: "Tu recetario personalizado sin gluten con asistente de cocina solo para ti , crea tus menús.",
    image: recetario,
    technologies: ["React", "TypeScript", "JS", "CSS", "ollama"],
    link: "#",
  },
  {
    title: "My Shopping List",
    description:
      "Tu reVamos a hacer la compra, con shopping list ademas podemos crear un menú para la semana y la lista de mismo para el super .Compartir nuestras listas etc … todo son ventajas",
    image: shopping,
    technologies: ["React", "TypeScript", "JS", "CSS", "ollama"],
    link: "#",
  },
  {
    title: "Spice Developer",
    description: "Presentación de servicios web ",
    image: spice,
    technologies: ["React", "JS", "CSS"],
    link: "#",
  },
  {
    title: "Easy Peasy Cards",
    description: "Crea tu tarjeta de visita personalizada de forma fácil y comoda ",
    image: easy,
    technologies: ["React", "JS", "CSS"],
    link: "https://aidanarr.github.io/project-promo-X-module-2-team-3/",
  },
  {
    title: "FinNest",
    description:
      "Ahorra, para tus vacaciones, tu casa , o un finde, y pide un análisis de tus gastos mensuales a ver como puedes mejorar para lograrlo antes",
    image: finnest,
    technologies: ["React", "JS", "CSS", "ollama", "nodejs"],
    link: "#",
  },
  {
    title: "Case Study",
    description: "Case Study UX/UI  de la APP Family Planner ",
    image: study,
    technologies: ["Figma"],
    link: "#",
  },
]

export default App

