import React, { useState } from 'react';
import { Briefcase, ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images (assuming they are in src/assets)
import family from "../assets/family.png"
import libro from "../assets/ebook-example.jpg"
import calculadora from "../assets/Calculadora.png"
import finnest from "../assets/Finest.png"
import recetario from "../assets/recetario.png"
import shopping from "../assets/shopping.jpg"
import spice from "../assets/spice.webp"
import easy from "../assets/easy_4.png"
import study from "../assets/case.png"
import img3225 from "../assets/img3255.webp"
import asistDom from "../assets/asistDom.png"
import PacMan from "../assets/PacMan.png"

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Family Planner",
      description: "Calendario de planificación familiar, ten todo bajo control con tu asistente familiar.",
      longDescription: "Una aplicación completa para la gestión familiar que permite coordinar horarios, tareas y eventos. Incluye un asistente basado en IA para sugerir actividades y optimizar el tiempo.",
      image: family,
      technologies: ["React", "Node.js", "Axios", "JavaScript", "CSS", "Ollama"],
      liveUrl: "https://familyca.netlify.app/",
      githubUrl: "https://www.canva.com/design/DAGgfKaN_gE/r6LhVstvPKNO9xYvlLNX1w/view",
      featured: true
    },
    {
      title: "Project Sphere",
      description: "Guarda y comparte tus mejores proyectos.",
      longDescription: "Plataforma colaborativa para desarrolladores donde pueden exhibir sus proyectos, recibir feedback y encontrar colaboradores.",
      image: libro,
      technologies: ["React", "MySQL", "CSS", "JavaScript"],
      liveUrl: "https://diana-bernardos.github.io/project-promo-X-module-3-team-2/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Calculadora Científica",
      description: "Calculadora animada con operaciones complejas.",
      image: calculadora,
      technologies: ["React", "JS", "CSS"],
      liveUrl: "https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "FinNest Dashboard",
      description: "Análisis de gastos y metas de ahorro.",
      image: finnest,
      technologies: ["React", "MySQL", "Node.js", "JS", "Ollama"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Recetario Sin Gluten",
      description: "Tu recetario personalizado sin gluten con asistente de cocina solo para ti , crea tus menús.",
      image: recetario,
      technologies: ["React", "spoonacularRecipesAPI", "ollama", "Tailwind CSS", "Supabase"],
      liveUrl: "https://mis-recetas-gluten-free.vercel.app/",
      githubUrl: "https://github.com/Diana-Bernardos/mis-recetas-gluten-free.git",
      featured: false
    },
    {
      title: "My Shopping List",
      description: "Gestión de listas de compra y menús semanales.",
      image: shopping,
      technologies: ["React", "TypeScript", "Ollama"],
      liveUrl: "https://v0-mobile-shopping-app-seven.vercel.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Spice Developer",
      description: "Presentación de equipo de servicios web.",
      image: spice,
      technologies: ["React", "JS", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Easy Peasy Cards",
      description: "Generador de tarjetas de visita digitales.",
      image: easy,
      technologies: ["React", "JS", "CSS"],
      liveUrl: "https://aidanarr.github.io/project-promo-X-module-2-team-3/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Case Study Family Planner",
      description: "Estudio UX/UI de la App Family Planner.",
      image: study,
      technologies: ["Figma", "UX Research"],
      liveUrl: "https://v0-ux-ui-expert-review-8btb2bjgp-dianas-projects-b7ad46ac.vercel.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Rick and Morty API",
      description: "Explorador de personajes de la serie.",
      image: img3225,
      technologies: ["React", "JS", "SCSS"],
      liveUrl: "https://rick-and-morty-nu-eight.vercel.app/",
      githubUrl: "https://rick-and-morty-nu-eight.vercel.app/",
      featured: false
    },
    {
      title:"SmartHome AI",
      description:"Asitente Domotico AI ",
      image: asistDom,
      technologies:  ["React", "Python", "Tailwind","Ollama Phi3","FastApi"],
      liveUrl: "https://smart-home-ai-1-r8m0nnuor-dianas-projects-b7ad46ac.vercel.app/",
      githubUrl: "https://github.com/Diana-Bernardos/Portfolio_web.git",
      featured: false
    },

    {
      title:"PacMan",
      description:"Juego interactivo PacMan ",
      image: PacMan,
      technologies:  ["PyGame", "Python", "Numpy"],
      liveUrl: "#",
      githubUrl: "https://diana-bernardos.github.io/PacMan/",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-16"
        >
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
            <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Proyectos</h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-6 py-3 border border-white/30 rounded-full backdrop-blur-sm">
                    Ver Detalles
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pl-2 border-l-4 border-purple-500">
          Más Proyectos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Ver más</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs text-gray-500 dark:text-gray-500 bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>

              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      Ver Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
