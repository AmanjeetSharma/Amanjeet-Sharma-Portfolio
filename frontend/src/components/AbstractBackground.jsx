import React, { useEffect, useRef } from 'react';

const AbstractBackground = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Starfield parameters
    const stars = [];
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 1000);

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        hue: 220 + Math.random() * 50, // Blue/purple hue range
        saturation: 70 + Math.random() * 30,
        lightness: 40 + Math.random() * 40
      });
    }

    // Smoke particles (Nebula Clouds)
    const smokeParticles = [];
    const maxSmoke = 10;

    // Shooting stars
    const shootingStars = [];

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 5, 15, 0.3)'; // Dark purple-black background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `hsla(${star.hue}, ${star.saturation}%, ${star.lightness}%, 0.8)`;
        ctx.fill();

        // Move stars
        star.x += star.vx / 100;
        star.y += star.vy / 100;

        // Reset stars that go off screen
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      // Nebula Cloud (Mist)
      for (let i = 0; i < smokeParticles.length; i++) {
        const p = smokeParticles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 30%, ${p.alpha})`;
        ctx.fill();
        p.x += Math.cos(p.angle) * 0.5;
        p.y -= p.speed;
        p.size += 0.1;
        p.alpha *= 0.98;
        p.life--;

        if (p.life <= 0 || p.alpha <= 0.01) {
          smokeParticles.splice(i, 1);
        }
      }

      // Shooting Stars
      if (Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 150 + 50,
          speed: Math.random() * 5 + 3,
          hue: 200 + Math.random() * 50
        });
      }

      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y + star.length);
        ctx.strokeStyle = `hsla(${star.hue}, 100%, 70%, 1)`;
        ctx.lineWidth = 2;
        ctx.stroke();

        star.x -= star.speed;
        star.y += star.speed;

        if (star.y > canvas.height) {
          shootingStars.splice(index, 1);
        }
      });

      // Add nebula effect (smoke)
      if (Math.random() > 0.97 && smokeParticles.length < maxSmoke) {
        smokeParticles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 50,
          size: 10 + Math.random() * 30,
          speed: 0.5 + Math.random() * 2,
          angle: Math.random() * Math.PI * 2,
          hue: 240 + Math.random() * 60, // Blue/purple hue
          alpha: 0.1 + Math.random() * 0.3,
          life: 100 + Math.random() * 100
        });
      }

      // Add subtle blue/purple glow effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(40, 20, 80, 0.05)');
      gradient.addColorStop(1, 'rgba(10, 5, 15, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -1
    }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <div style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        width: '100%'
      }}>
        {children}
      </div>
    </div>
  );
};

export default AbstractBackground;
