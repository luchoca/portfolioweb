import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, Code, Users, Coffee } from 'lucide-react';
const fotoPerfilUrl = new URL('../assets/foto-perfil.jpeg', import.meta.url).href;

const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '50+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '1+' },
    { icon: Award, label: 'Años de Experiencia', value: '3+' },
    { icon: Coffee, label: 'Mates', value: '1000+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          ref={elementRef}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre <span className="text-gradient">Mí</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Apasionado por crear soluciones digitales innovadoras que marquen la diferencia
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Soy un <strong className="text-primary-600 dark:text-primary-400">Desarrollador Full Stack</strong>con 3 años de experiencia en Sofka. Me formé en un bootcamp donde aprendí bases sólidas en Java, JavaScript, React, Angular, Node.js, SQL, MongoDB y Docker.
                  Trabajo en la billetera digital DALE (Colombia), donde me especializo en Mambu y Framebanking, resolviendo problemas reales en equipo, bajo presión y en contacto directo con clientes.
                  Además, desde hace 2 años soy profesor en Jóvenes Creativos (Fundación ROFE), enseñando HTML, CSS, JavaScript, Node.js y React a nuevos programadores, lo que reforzó mis conocimientos y habilidades de comunicación.
                  Siempre busco estar a la vanguardia, aprender nuevas tecnologías y aportar soluciones efectivas. 🚀.
                </p>
{/* 
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Me enfoco en escribir código limpio, escalable y mantenible, siempre siguiendo las mejores prácticas
                  de desarrollo. Disfruto trabajando en equipo y creo firmemente en la importancia de la colaboración
                  y el aprendizaje continuo.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source,
                  y compartir conocimiento a través de artículos técnicos y charlas en la comunidad.
                </p> */}
              </div>

              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 rounded-2xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-500 dark:from-primary-700 dark:to-primary-500 rounded-2xl transform -rotate-6"></div>

                  {/* Profile image */}
                  <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                    <img src={fotoPerfilUrl} alt="Foto de perfil" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  4+
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  💻
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
