"use client"
import { ArrowLeft, ExternalLink } from "lucide-react"

// Using the same project type from your main file
interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

interface ProjectsGalleryProps {
  projects: Project[]
  onBack: () => void
}

export default function ProjectsGallery({ projects, onBack }: ProjectsGalleryProps) {
  return (
    <div className="min-h-screen bg-[url('/assets/fondo.jpg')] bg-cover bg-fixed py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/50"></div>

      {/* Header with back button */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center text-white hover:text-purple-300 transition-all mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Portfolio
        </button>

        {/* Gallery content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold text-white text-center mb-12">Galería de Proyectos</h1>

          {/* Projects grid with glass effect */}
          <div className="glass-effect rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group glass-effect rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
        </div>
      </div>
    </div>
  )
}

