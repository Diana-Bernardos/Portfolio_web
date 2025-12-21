import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80&auto=format" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/20 to-gray-900/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-purple-200 font-medium mb-4 tracking-wider uppercase">
            Portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Diana Bernardos</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Frontend Developer & UX/UI Designer
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/Diana-Bernardos" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/diana-bernardos-moraleda-536378223" },
            { icon: Mail, href: "mailto:dianabernardosm@gmail.com" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <item.icon className="w-6 h-6 text-white group-hover:text-purple-300" />
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToAbout}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          Descubre mi trabajo
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </header>
  );
}
