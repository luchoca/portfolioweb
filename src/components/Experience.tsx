import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experiences } from '../data/portfolio';
import { Calendar, Award, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0) {
      return `${years} año${years > 1 ? 's' : ''}${months > 0 ? ` y ${months} mes${months > 1 ? 'es' : ''}` : ''}`;
    }
    return `${months} mes${months > 1 ? 'es' : ''}`;
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
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
              Mi <span className="text-gradient">Experiencia</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un recorrido por mi trayectoria profesional y los proyectos que han marcado mi crecimiento
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                        {experience.current && (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                            Actual
                          </span>
                        )}
                      </div>

                      {/* Duration */}
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {formatDate(experience.startDate)} - {' '}
                          {experience.endDate ? formatDate(experience.endDate) : 'Presente'}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{getDuration(experience.startDate, experience.endDate)}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Tecnologías:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary-500" />
                          Logros destacados:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              variants={achievementVariants}
                              className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                            >
                              <ChevronRight className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Crecimiento Continuo
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Mi experiencia me ha enseñado la importancia de la adaptabilidad y el aprendizaje continuo. 
                Cada proyecto es una oportunidad para crecer y mejorar, y siempre estoy buscando nuevos 
                desafíos que me permitan expandir mis habilidades y contribuir de manera más efectiva.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Años de experiencia
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Proyectos completados
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Clientes satisfechos
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
