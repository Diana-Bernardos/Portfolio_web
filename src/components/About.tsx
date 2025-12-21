import React, { useState } from 'react';
import { User, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function About() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-16"
        >
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
            <User className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Sobre Mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1609813744174-a0df83d477fe?w=900&auto=format&fit=crop&q=60"
              alt="Diana Bernardos"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Frontend Developer & UX/UI Enthusiast
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              ¡Bienvenido a mi universo creativo! Aquí comparto mi pasión por el diseño web, mis ideas y las experiencias que han moldeado mi carrera profesional.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Me especializo en crear interfaces intuitivas y atractivas, combinando código limpio con diseño centrado en el usuario.
            </p>
            
            <button
              onClick={() => setShowFullStory(true)}
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              Conoce mi historia
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {showFullStory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowFullStory(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowFullStory(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Mi Viaje Profesional</h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1654741735474-827841af7707?w=900&auto=format&fit=crop&q=60"
                    alt="Working"
                    className="w-full h-64 object-cover rounded-xl mb-8"
                  />
                  
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">El Cambio</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    He llegado hasta aquí después de muchos años de experiencia laboral en otro sector. El sentirme estancada me hizo ver con más luz lo que soy capaz de hacer y aprender. Llegué al mundo del desarrollo web de la mano de amigos que confiaron en mí.
                  </p>

                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Actualidad</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Hoy soy Desarrolladora Web después de una formación intensiva (Bootcamp) y sigo formándome por mi cuenta, aprendiendo sobre IA y realizando proyectos propios desde el inicio hasta su despliegue.
                  </p>

                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Filosofía</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creo en escribir código limpio y fácil de mantener, así como en crear experiencias de usuario intuitivas. Mi enfoque combina la excelencia técnica con la resolución creativa de problemas.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
