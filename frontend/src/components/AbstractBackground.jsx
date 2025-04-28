import Spaceship from "../assets/spaceship.png"; 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_STARS = 50;
const NUM_PLANETS = 4;
const NUM_SHOOTING_STARS = 4;

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < NUM_STARS; i++) {
    stars.push({
      id: `star-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

const generateShootingStars = () => {
  const shooting = [];
  for (let i = 0; i < NUM_SHOOTING_STARS; i++) {
    shooting.push({
      id: `shooting-${i}`,
      startX: Math.random() * 100,
      startY: Math.random() * 20,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      delay: Math.random() * 10,
    });
  }
  return shooting;
};

const generatePlanets = () => [
  { id: "planet-1", x: 86, y: 25, size: 55, color: "#6fc3df", ring: false },
  { id: "planet-2", x: 40, y: 50, size: 35, color: "#ff4d4d", ring: false },
  { id: "planet-3", x: 67, y: 92, size: 25, color: "#ffd93d", ring: true },
  { id: "planet-4", x: 7, y: 15, size: 90, color: "#33ff57", ring: true },
];

export default function AbstractBackground() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setStars(generateStars());
    setShootingStars(generateShootingStars());
    setPlanets(generatePlanets());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Glowing Sun Peeking */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-10%",
          left: "-20%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle at center, #ffb347, #ffcc33, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.8,
        }}
      />
      
      {/* Sun Flare Rays */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,200,0,0.5) 0%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.7,
          mixBlendMode: "screen",
        }}
      />

      {/* Black Hole (New Addition) */}
      <div className="absolute" style={{
        top: "70%",
        left: "96%",
        width: "100px",
        height: "100px",
        zIndex: 5
      }}>
        {/* Event Horizon (Dark Core) */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, #000000, #111111)",
          borderRadius: "50%",
          boxShadow: "0 0 0 2px #6fc3df",
        }}></div>        
        
        {/* Gravitational Lens Effect */}
        <div style={{
          position: "absolute",
          width: "230px",
          height: "230px",
          background: "radial-gradient(circle, transparent 40%, rgba(100, 200, 255, 0.1) 70%)",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(5px)",
        }}></div>
      </div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px white`,
          }}
        />
      ))}

      {/* Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{
            position: "absolute",
            top: `${planet.y}%`,
            left: `${planet.x}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            background: `radial-gradient(circle at 30% 30%, white, ${planet.color})`,
            borderRadius: "50%",
            boxShadow: `0 0 20px ${planet.color}`,
          }}
        >
          {/* Asteroid belt */}
          {planet.ring && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${planet.size * 2}px`,
                height: `${planet.size * 0.7}px`,
                border: "2px solid rgba(255,255,255,0.4)",
                borderRadius: "50%",
                transform: "translate(-50%, -50%) rotateX(60deg)",
                pointerEvents: "none",
              }}
            >
              {/* Asteroids */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={`asteroid-${i}`}
                  style={{
                    position: "absolute",
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 5 + 3}px`,
                    height: `${Math.random() * 5 + 3}px`,
                    backgroundColor: "gray",
                    borderRadius: "50%",
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shoot) => (
        <motion.div
          key={shoot.id}
          initial={{
            top: `${shoot.startY}%`,
            left: `${shoot.startX}%`,
            width: "2px",
            height: "120px",
            background: "linear-gradient(white, transparent)",
            opacity: 0,
            rotate: 45,
            position: "absolute",
          }}
          animate={{
            top: `${shoot.endY}%`,
            left: `${shoot.endX}%`,
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: shoot.delay,
            duration: 2,
            repeat: Infinity,
            repeatDelay: shoot.delay + 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Larger Spaceship */}
      <motion.div
        className="absolute"
        style={{
          bottom: "10%",
          left: "50%",
          width: "150px",
          height: "150px",
          transform: "translateX(-50%)",
        }}
      >
        <motion.img 
          src={Spaceship}
          alt="Spaceship"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            bottom: "0",
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}