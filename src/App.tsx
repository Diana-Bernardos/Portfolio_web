"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Briefcase,
  User,
  Send,
  Menu,
  Moon,
  Sun,
  Download,
} from "lucide-react"
import libro from "./assets/ebook-example.jpg"
import spice from "./assets/spice.webp"
import easyCards from "./assets/easy_4.png"
import FinNest from "./assets/Finnest.jpg"
import ollamachat from "./assets/Ollama chat .jpg"
import calculadora from "./assets/Calculadora.png"
import profilePic from "./assets/161449179.jpeg"
import n8n from "./assets/n8n.jpg"
import family from "./assets/family-logo.png"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "Project Sphere",
    description: "Aplicación web para gestionar proyectos personales con React",
    tech: ["React", "JavaScript", "CSS"],
    image: libro,
    link: "https://diana-bernardos.github.io/project-promo-X-module-3-team-2/",
  },
  {
    title: "Spice Developers",
    description: "Aplicación móvil para la gestión de agendas familiares",
    tech: ["React", "JavaScript", "CSS"],
    image: spice,
    link: "https://ellisoalgo.github.io/project-grupo-2/",
  },
  {
    title: "Easy Peasy Cards",
    description: "Generador de tarjetas de visita personalizadas",
    tech: ["JavaScript", "CSS", "HTML"],
    image: easyCards,
    link: "https://aidanarr.github.io/project-promo-X-module-2-team-3/",
  },
  {
    title: "FinNest",
    description: " Dashboar para gestión de finanzas personales",
    tech: ["modelo de IA local (Ollama)", "Tailwind CSS", "React", "Tour de bienvenida interactivo"],
    image: FinNest,
    link: "https://finnest-2.onrender.com",
  },
  {
    title: "Chatbot-App",
    description: " Chatbot personal para consultas rapidas",
    tech: ["modelo de IA local (Ollama)", " CSS", "JavaScript", "HTML"],
    image: ollamachat,
    link: "",
  },
  {
    title: "Calculadora ",
    description:
      " Calculadora cientifica , con funciones complejas para cursos mas avanzados, puedes usarla en tu movil",
    tech: [" CSS", "JavaScript", "HTML"],
    image: calculadora,
    link: "https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/",
  },
  {
    title: "Family-Planner ",
    description:
      " Family Planner es una aplicación móvil desarrollada con React Native y Expo diseñada para facilitar la organización familiar. Permite a las familias gestionar calendarios compartidos, eventos personales, listas de compras, actividades escolares y recibir notificaciones de recordatorio.Esta aplicación está diseñada para ser altamente personalizable y adaptable a las necesidades específicas de cada familia, facilitando la organización y coordinación de actividades diarias, escolares y de planificación en un solo lugar.Ademas tiene implementado un asistente personal con LLM de Ollama, para que sea todavia más util",
    tech: ["React Native", "TypeScript","ollama"],
    image: family,
    link: "https://www.canva.com/design/DAGgfKaN_gE/r6LhVstvPKNO9xYvlLNX1w/view?utm_content=DAGgfKaN_gE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h21c5263177",
  },
  {
    title: "n8n_planner_bot ",
    description:
      " Automatiza la creacion de plaes diaros inteligentes, utilizando n8n.Google Calendar: Recupera eventos programados del día ,Notion: Obtiene tareas pendientes y su estado,Gmail: Recopila emails importantes sin responder. Function Node (Preparación):Combina datos de todas las fuentes,estructura la información para la IA y formatea datos para procesamiento. Despues conecta con HuggingFace, para porcesar y analizar la informacion generando recomendaciones inteligentes.La distribucion de la informacion se realiza a traves de Telegram al que se envian notificaciones diarias , en Notion nos crea paginas estructuradas con el plan del dia y el ultimo Function node adapta el contenido para cada plataforma.  ",
    tech: [" n8n", "JavaScript"],
    image: n8n,
    link: "",
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"} bg-opacity-90 shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className={`text-2xl font-bold ${darkMode ? "text-white" : "text-purple-600"}`}>
                DB
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={toggleDarkMode} className={`mr-4 ${darkMode ? "text-yellow-300" : "text-gray-800"}`}>
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <a href="./assets/Currículum Vitae.pdf" download className={`mr-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                <Download className="h-6 w-6" />
              </a>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className={`${darkMode ? "text-white" : "text-gray-800"} hover:text-purple-600`}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} block px-3 py-2 rounded-md text-base font-medium`}
              >
                Sobre mi
              </a>
              <a
                href="#projects"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} block px-3 py-2 rounded-md text-base font-medium`}
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-purple-600"} block px-3 py-2 rounded-md text-base font-medium`}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 dark:to-gray-800/30"></div>
        <div className="text-center mb-8 relative z-10">
          <div className="p-0 m-0 mx-auto mb-12 rounded-full aspect-square w-64 h-64 overflow-hidden object-cover ring-4 ring-purple-600 dark:ring-gray-700 shadow-xl animate-float">
            <img src={profilePic || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">Diana Bernardos</h1>
          <p className="text-2xl text-purple-200 dark:text-purple-300 mb-6 animate-fade-in-delay-1">
            Full Stack Developer
          </p>
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
              href="https://www.dianabernardosm@gmail.com"
              className="text-white hover:text-purple-300 transition-colors transform hover:scale-110 duration-200"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className={`py-24 px-4 ${darkMode ? "bg-gray-800" : "bg-gradient-to-br from-purple-100 to-pink-100"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className={`w-8 h-8 ${darkMode ? "text-purple-400" : "text-purple-600"} mr-3`} />
            <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Sobre mi</h2>
          </div>
          <div className={`glass-effect p-8 rounded-2xl shadow-xl ${darkMode ? "bg-gray-700" : ""}`}>
            <p className={`text-lg ${darkMode ? "text-gray-800" : "text-gray-700"} leading-relaxed mb-6`}>
              Apasionada por el desarrollo de aplicaciones web modernas y eficientes, especializada en React y
              JavaScript. Desarrollo de aplicaciones con IA generativa, Chatbots y automatizaciones, para mejorar
              procesos y la experiencia del usuario.
            </p>
            <p className={`text-lg ${darkMode ? "text-gray-800" : "text-gray-700"} leading-relaxed`}>
              Actualmente buscando nuevas oportunidades para contribuir a proyectos innovadores y colaborar con nuevos
              equipos.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-24 px-4 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-pink-100 to-red-100"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className={`w-8 h-8 ${darkMode ? "text-purple-400" : "text-purple-600"} mr-3`} />
            <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Mis Proyectos</h2>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`glass-effect rounded-xl shadow-lg overflow-hidden ${darkMode ? "bg-gray-800" : ""}`}>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className={`text-2xl font-semibold ${darkMode ? "text-gray-800" : "text-gray-800"} mb-3`}>
                        {project.title}
                      </h3>
                      <p className={`${darkMode ? "text-gray-600" : "text-gray-600"} mb-4`}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-1.5 ${darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-600"} rounded-full text-sm font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className={`inline-flex items-center ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"} font-medium`}
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 px-4 ${darkMode ? "bg-gray-800" : "bg-gradient-to-b from-red-100 to-white"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Send className={`w-8 h-8 ${darkMode ? "text-purple-400" : "text-purple-600"} mr-3`} />
            <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>¡¡Hablamos!!</h2>
          </div>
          <div className={`glass-effect p-12 rounded-2xl shadow-xl ${darkMode ? "bg-gray-700" : ""}`}>
            <p className={`text-xl ${darkMode ? "text-gray-700" : "text-gray-700"} mb-8`}>
              Siempre estoy dispuesta a nuevos proyectos y oportunidades.
            </p>
            <a
              href="mailto:contact@example.com"
              className={`inline-flex items-center justify-center px-8 py-4 ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-600 hover:bg-purple-700"} text-white rounded-xl text-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
            >
              Contactame 
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white to-purple-100"}`}>
        <div className={`text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          © {new Date().getFullYear()} Diana Bernardos. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App

