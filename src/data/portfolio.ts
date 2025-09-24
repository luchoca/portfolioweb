import { Project, Skill, Experience, SocialLink } from '../types';

// Proyectos del portfolio
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con React, Node.js y MongoDB',
    longDescription: 'Desarrollé una plataforma de e-commerce completa con funcionalidades avanzadas como carrito de compras, procesamiento de pagos con Stripe, panel de administración, sistema de autenticación JWT, y gestión de inventario en tiempo real.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/lucianocastro/ecommerce',
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real',
    longDescription: 'Aplicación web moderna para gestión de proyectos con funcionalidades de drag & drop, colaboración en tiempo real usando Socket.io, notificaciones push, y sincronización offline.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma'],
    category: 'web',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/lucianocastro/taskmanager',
    featured: true,
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico con visualizaciones interactivas y predicciones',
    longDescription: 'Dashboard completo para visualización de datos meteorológicos con gráficos interactivos, mapas de calor, predicciones a 7 días, y integración con múltiples APIs meteorológicas.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'D3.js', 'Chart.js', 'OpenWeather API', 'Mapbox'],
    category: 'frontend',
    liveUrl: 'https://weather-dashboard.com',
    githubUrl: 'https://github.com/lucianocastro/weather-dashboard',
    featured: false,
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    description: 'Aplicación móvil de banca con autenticación biométrica y transferencias',
    longDescription: 'Aplicación móvil nativa para iOS y Android con funcionalidades de banca digital, autenticación biométrica, transferencias instantáneas, y notificaciones push seguras.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Biometric Auth'],
    category: 'mobile',
    liveUrl: 'https://banking-app.com',
    githubUrl: 'https://github.com/lucianocastro/banking-app',
    featured: true,
    createdAt: '2024-04-05'
  },
  {
    id: '5',
    title: 'API Gateway',
    description: 'Gateway de API con autenticación, rate limiting y monitoreo',
    longDescription: 'Gateway de API robusto construido con Node.js que incluye autenticación JWT, rate limiting, logging centralizado, monitoreo de performance, y balanceador de carga.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
    category: 'backend',
    liveUrl: 'https://api-gateway.com',
    githubUrl: 'https://github.com/lucianocastro/api-gateway',
    featured: false,
    createdAt: '2024-05-12'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Sitio web personal con animaciones y diseño responsive',
    longDescription: 'Portfolio personal desarrollado con React, TypeScript y Framer Motion, incluyendo animaciones suaves, modo oscuro, formulario de contacto, y optimización SEO.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    category: 'frontend',
    liveUrl: 'https://lucianocastro.dev',
    githubUrl: 'https://github.com/lucianocastro/portfolio',
    featured: false,
    createdAt: '2024-06-01'
  }
];

// Habilidades técnicas
export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
  { id: '2', name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6' },
  { id: '3', name: 'Next.js', level: 85, category: 'frontend', color: '#000000' },
  { id: '4', name: 'Vue.js', level: 80, category: 'frontend', color: '#4FC08D' },
  { id: '5', name: 'Tailwind CSS', level: 95, category: 'frontend', color: '#06B6D4' },
  { id: '6', name: 'Framer Motion', level: 85, category: 'frontend', color: '#0055FF' },
  
  // Backend
  { id: '7', name: 'Node.js', level: 90, category: 'backend', color: '#339933' },
  { id: '8', name: 'Express', level: 88, category: 'backend', color: '#000000' },
  { id: '9', name: 'Python', level: 85, category: 'backend', color: '#3776AB' },
  { id: '10', name: 'Django', level: 80, category: 'backend', color: '#092E20' },
  { id: '11', name: 'FastAPI', level: 75, category: 'backend', color: '#009688' },
  
  // Database
  { id: '12', name: 'PostgreSQL', level: 90, category: 'database', color: '#336791' },
  { id: '13', name: 'MongoDB', level: 85, category: 'database', color: '#47A248' },
  { id: '14', name: 'Redis', level: 80, category: 'database', color: '#DC382D' },
  { id: '15', name: 'Prisma', level: 85, category: 'database', color: '#2D3748' },
  
  // Tools
  { id: '16', name: 'Docker', level: 85, category: 'tools', color: '#2496ED' },
  { id: '17', name: 'AWS', level: 80, category: 'tools', color: '#FF9900' },
  { id: '18', name: 'Git', level: 95, category: 'tools', color: '#F05032' },
  { id: '19', name: 'Jest', level: 85, category: 'tools', color: '#C21325' },
  { id: '20', name: 'Cypress', level: 80, category: 'tools', color: '#17202C' },
  
  // Mobile
  { id: '21', name: 'React Native', level: 85, category: 'mobile', color: '#61DAFB' },
  { id: '22', name: 'Flutter', level: 70, category: 'mobile', color: '#02569B' },
  
  // Design
  { id: '23', name: 'Figma', level: 80, category: 'design', color: '#F24E1E' },
  { id: '24', name: 'Adobe XD', level: 75, category: 'design', color: '#FF61F6' }
];

// Experiencia laboral
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    description: 'Lideré el desarrollo de aplicaciones web y móviles para clientes enterprise, implementando arquitecturas escalables y mejores prácticas de desarrollo.',
    startDate: '2023-01',
    current: true,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Aumenté la performance de la aplicación principal en un 40%',
      'Implementé CI/CD pipeline que redujo el tiempo de deployment en 60%',
      'Mentoré a 3 desarrolladores junior del equipo',
      'Lideré la migración de legacy code a TypeScript'
    ]
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    description: 'Desarrollé funcionalidades core de la plataforma SaaS, trabajando en un equipo ágil de 5 desarrolladores.',
    startDate: '2021-06',
    endDate: '2022-12',
    current: false,
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'Docker'],
    achievements: [
      'Desarrollé el sistema de autenticación y autorización',
      'Implementé real-time notifications con WebSockets',
      'Creé la API REST que maneja 10K+ requests por minuto',
      'Participé en el diseño de la arquitectura de microservicios'
    ]
  },
  {
    id: '3',
    company: 'WebDev Agency',
    position: 'Frontend Developer',
    description: 'Especializado en desarrollo frontend, creé interfaces de usuario modernas y responsive para diversos clientes.',
    startDate: '2020-01',
    endDate: '2021-05',
    current: false,
    technologies: ['React', 'JavaScript', 'CSS3', 'SASS', 'Webpack'],
    achievements: [
      'Desarrollé 15+ sitios web responsive para clientes',
      'Implementé animaciones CSS avanzadas y micro-interacciones',
      'Optimicé el rendimiento de sitios web, mejorando Core Web Vitals',
      'Colaboré estrechamente con diseñadores UX/UI'
    ]
  }
];

// Enlaces sociales
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/lucianocastro',
    icon: 'github',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lucianocastro',
    icon: 'linkedin',
    color: '#0077B5'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/lucianocastro',
    icon: 'twitter',
    color: '#1DA1F2'
  },
  {
    name: 'Email',
    url: 'mailto:luciano@example.com',
    icon: 'mail',
    color: '#EA4335'
  }
];
