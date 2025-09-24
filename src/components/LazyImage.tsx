import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/api/placeholder/400/300',
  fallback = '/api/placeholder/400/300',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setImageSrc(fallback);
        setIsError(true);
        onError?.();
      };
      img.src = src;
    }
  }, [isInView, src, fallback, onLoad, onError]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0.7 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Loading shimmer effect */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 shimmer" />
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Error al cargar imagen
          </span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
