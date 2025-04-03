import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import movil from "./assets/moviles.jpg"
import libro from "./assets/ebook-example.jpg"
import calculadora from "./assets/Calculadora.png"
import recetario from "./assets/recetario.jpg"
import shopping from "./assets/shopping.jpg"
import spice from "./assets/spice.webp"
import easy from "./assets/easy_4.png"
import finnest from "./assets/Finest.png"
import study from "./assets/case.png"

interface ProjectsGalleryProps {
  onBack: () => void;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onBack }) => {
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
  ];
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-8 group transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        
        <div className="glass-effect rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Featured Projects</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore my latest work and personal projects. Each project represents a unique challenge 
            and demonstrates different aspects of my technical expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="glass-effect rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="glass-effect rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      Live Demo <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      <Github className="w-3 h-3 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;