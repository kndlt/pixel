'use client';

import { useRef, useEffect, useState } from 'react';
import { ParticleState } from '@/lib/types';

interface ParticleSystemProps {
  state: ParticleState;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ParticleSystem({ state }: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const colors = {
      idle: ['#ffd700', '#ffb347', '#4a6cf7'],
      thinking: ['#9333ea', '#4a6cf7', '#ffd700'],
      responding: ['#ffd700', '#ffb347', '#e8f5e8']
    };

    const getParticleCount = () => {
      if (state.thinking) return 25;
      if (state.responding) return 20;
      return 15;
    };

    const getParticleColor = () => {
      if (state.thinking) return colors.thinking[Math.floor(Math.random() * colors.thinking.length)];
      if (state.responding) return colors.responding[Math.floor(Math.random() * colors.responding.length)];
      return colors.idle[Math.floor(Math.random() * colors.idle.length)];
    };

    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * dimensions.width,
      y: y ?? Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * (state.thinking ? 2 : 0.5),
      vy: (Math.random() - 0.5) * (state.thinking ? 2 : 0.5),
      life: 0,
      maxLife: 100 + Math.random() * 100,
      size: 1 + Math.random() * (state.responding ? 4 : 2),
      opacity: 0,
      color: getParticleColor()
    });

    const updateParticles = () => {
      const targetCount = getParticleCount();
      
      // Add particles if needed
      while (particlesRef.current.length < targetCount) {
        particlesRef.current.push(createParticle());
      }

      // Update existing particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update opacity based on life cycle
        const lifeRatio = particle.life / particle.maxLife;
        if (lifeRatio < 0.1) {
          particle.opacity = lifeRatio * 10;
        } else if (lifeRatio > 0.9) {
          particle.opacity = (1 - lifeRatio) * 10;
        } else {
          particle.opacity = 0.3 + Math.sin(particle.life * 0.1) * 0.2;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;

        return particle.life < particle.maxLife;
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = state.thinking ? 15 : 8;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add extra glow for responding state
        if (state.responding) {
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.shadowBlur = 25;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      render();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, state]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
