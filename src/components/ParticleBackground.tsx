
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random color
      const colors = [
        'rgba(102, 126, 234, 0.6)',
        'rgba(118, 75, 162, 0.5)',
        'rgba(240, 147, 251, 0.4)',
        'rgba(75, 172, 254, 0.5)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 15000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleBackground;
