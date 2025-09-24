# Portfolio Personal - Luciano Castro

Un portfolio web moderno y profesional desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsive**: Mobile-first con diseño adaptativo
- **Modo Oscuro/Claro**: Toggle persistente con preferencias del sistema
- **Animaciones Suaves**: Framer Motion para transiciones fluidas
- **Formulario de Contacto**: Validación con React Hook Form
- **SEO Optimizado**: Meta tags dinámicos y estructura semántica
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste optimizado
- **Performance**: Lazy loading de imágenes y componentes

## 🛠️ Tecnologías

- **React 18** con hooks modernos
- **TypeScript** para tipado estático
- **Tailwind CSS** para styling
- **Framer Motion** para animaciones
- **React Hook Form** para formularios
- **React Router** para navegación
- **Lucide React** para iconos
- **Vite** como bundler

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/lucianocastro/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección sobre mí
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Portfolio de proyectos
│   ├── Experience.tsx  # Experiencia laboral
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── LazyImage.tsx   # Componente de imagen lazy
│   └── Loading.tsx     # Componente de carga
├── contexts/           # Contextos de React
│   └── ThemeContext.tsx # Contexto del tema
├── hooks/              # Hooks personalizados
│   ├── useIntersectionObserver.ts
│   ├── useScrollToSection.ts
│   └── useSEO.ts
├── types/              # Definiciones de TypeScript
│   └── index.ts
├── data/               # Datos estáticos
│   └── portfolio.ts
├── utils/              # Utilidades
├── assets/             # Recursos estáticos
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Tu paleta de colores personalizada
  }
}
```

### Contenido
Modifica los datos en `src/data/portfolio.ts` para personalizar:
- Proyectos
- Habilidades
- Experiencia laboral
- Enlaces sociales

### Imágenes
Reemplaza las imágenes placeholder en `public/` con tus propias imágenes.

## 📱 Responsive Design

El portfolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels en elementos interactivos
- Contraste de colores optimizado
- Estructura semántica HTML
- Focus indicators visibles

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`

### GitHub Pages
1. Ejecuta `npm run build`
2. Sube el contenido de `dist/` a tu repositorio
3. Configura GitHub Pages

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: luciano@example.com
- **LinkedIn**: [linkedin.com/in/lucianocastro](https://linkedin.com/in/lucianocastro)
- **GitHub**: [github.com/lucianocastro](https://github.com/lucianocastro)

---

Hecho con ❤️ y mucho café ☕
