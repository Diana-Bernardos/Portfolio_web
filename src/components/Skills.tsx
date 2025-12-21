import React from 'react';
import { Component, FileCode2, Code, Server, Database, Paintbrush, Layers, Figma, Bot, Globe, Frame } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    { icon: <Component className="w-8 h-8" />, name: "React" },
    { icon: <FileCode2 className="w-8 h-8" />, name: "JavaScript" },
    { icon: <Code className="w-8 h-8" />, name: "HTML" },
    { icon: <Server className="w-8 h-8" />, name: "Node.js" },
    { icon: <Database className="w-8 h-8" />, name: "MySQL" },
    { icon: <Paintbrush className="w-8 h-8" />, name: "CSS" },
    { icon: <Layers className="w-8 h-8" />, name: "Tailwind" },
    { icon: <Figma className="w-8 h-8" />, name: "Figma" },
    { icon: <Bot className="w-8 h-8" />, name: "Ollama" },
    { icon: <Globe className="w-8 h-8" />, name: "Webflow" },
    { icon: <Frame className="w-8 h-8" />, name: "Framer" }
  ];

  // Duplicate for infinite scroll
  const extendedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Tech Stack & Herramientas
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12">
          {extendedSkills.map((skill, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center justify-center group/item transition-transform hover:scale-110 duration-300 cursor-pointer"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 mb-4 group-hover/item:border-purple-500/50 group-hover/item:shadow-purple-500/20 transition-all">
                <div className="text-gray-600 dark:text-gray-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">
                  {skill.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex">
           {extendedSkills.map((skill, index) => (
            <div
              key={`clone-${index}`}
              className="mx-8 flex flex-col items-center justify-center group/item transition-transform hover:scale-110 duration-300 cursor-pointer"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 mb-4 group-hover/item:border-purple-500/50 group-hover/item:shadow-purple-500/20 transition-all">
                <div className="text-gray-600 dark:text-gray-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">
                  {skill.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
