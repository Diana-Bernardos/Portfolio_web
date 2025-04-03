import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ArticleProps {
  onBack: () => void;
}

const Article: React.FC<ArticleProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </button>
        
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6"> Diana Bernardos</h1>
          
          <img
            src="https://images.unsplash.com/photo-1654741735474-827841af7707?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNldmVyYW5jaWF8ZW58MHx8MHx8fDA%3D"
            alt="Diana working"
            className="w-full rounded-xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <h2>Mi Viaje</h2>
            <p>
            He llegado hasta aqui, después de muchos años de experiencia laboral en otro sector que nada tiene que ver. El estar aburrida y estancada tantos años en lo mismo me ha echo ver aún con más lúz lo que soy capaz de hacer y aprender.</p>
            <p>

            Llegue al mundo del desarrollo web de la mano de dos amigos que confiaron en que podia cambiar mi vida, por que no. Laura y Marcos me dijeron:"Adelante tu puedes" </p>
            <p>
            Hoy soy Desarrolladora Web despues de una formación BootCamp y sigo formandome por mi cuenta con cursos certificados, usando y aprendiendo sobre IA asi como realizando proyectos y aplicaciones propias desde el inicio hasta su despliegue.</p>
            <p>
             He descubierto el mundo del Diseño UX/UI y me apasiona, por eso estoy aqui, por que sigo aprendiendo cada día y ahora si me encanta lo que hago .
            </p>

            <h2> Skills</h2>
            <ul>
              <li>Frontend: React,JavaScript,TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Python, RESTful, APIs</li>
              <li>Database: MYSQL</li>
              <li>Desing: Figma, Framer, Webflow, UX/UI</li>
              <li>IA: ChatGpt, LLM ollama, Sonet,ChatBots,n8n</li>
            </ul>

            <h2> Mi Filosofía</h2>
            <p>
            Creo en escribir código limpio y fácil de mantener, así como en crear experiencias de usuario intuitivas. Mi enfoque combina la excelencia técnica con la resolución creativa de problemas para ofrecer las mejores soluciones y experiencias posibles. Diseño y desarrollo van de la mano para garantizar la satisfacción del usuario.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;