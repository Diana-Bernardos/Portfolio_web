import React from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <Send className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hablemos</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes una idea o proyecto en mente? Estoy disponible para colaborar y crear algo increíble juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <a href="mailto:dianabernardosm@gmail.com" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">dianabernardosm@gmail.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/diana-bernardos-moraleda-536378223" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium">Diana Bernardos</p>
                </div>
              </a>

              <a href="https://github.com/Diana-Bernardos" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-medium">@Diana-Bernardos</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-purple-600 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">¿Listo para empezar?</h3>
              <p className="text-purple-100 mb-8 text-lg">
                Estoy buscando nuevas oportunidades y retos. Si crees que encajo en tu equipo, ¡no dudes en contactarme!
              </p>
            </div>

            <a
              href="mailto:dianabernardosm@gmail.com"
              className="relative z-10 w-full py-4 bg-white text-purple-600 rounded-xl font-bold text-center hover:bg-purple-50 transition-colors shadow-lg"
            >
              Enviar Mensaje
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
