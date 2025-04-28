import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import amanjeetPhoto from "../assets/amanjeet-photo.jpg";

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const floating = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div className="space-y-6">
            <motion.h1 className="text-4xl md:text-6xl font-bold" variants={item}>
              Hi, I'm <span className="gradient-text">Amanjeet Sharma</span>
            </motion.h1>

            <motion.h2 className="text-2xl md:text-3xl text-gray-200" variants={item}>
              Full Stack Developer
            </motion.h2>

            <motion.p className="text-white max-w-lg" variants={item}>
              Passionate about creating elegant solutions to complex problems.
              Skilled in Java, JavaScript, and modern web technologies.
            </motion.p>

            <motion.div className="flex space-x-4" variants={item}>
              <motion.a
                href="#contact"
                className="neumorphic-btn text-accent-blue hover:text-accent-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>

              <motion.a
                href="https://github.com/amanjeetSharma"
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic-btn p-3 rounded-full"
                whileHover={{ y: -3 }}
              >
                <FaGithub className="text-accent-purple" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/amanjeet-sharma-20b75a252"
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic-btn p-3 rounded-full"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="text-accent-blue" />
              </motion.a>

              <motion.a
                href="mailto:amansharma23503@gmail.com"
                className="neumorphic-btn p-3 rounded-full"
                whileHover={{ y: -3 }}
              >
                <FaEnvelope className="text-accent-purple" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Floating background glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple blur-lg opacity-20 -z-10"
                variants={floating}
                animate="float"
              />

              {/* Perfect circle photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light shadow-neumorphic">
                <img
                  src={amanjeetPhoto}
                  alt="Amanjeet Sharma"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -top-3 -left-3 neumorphic-btn px-3 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <span className="text-xs font-bold gradient-text">JAVA</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 neumorphic-btn px-3 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring" }}
              >
                <span className="text-xs font-bold gradient-text">REACT</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-accent-blue text-xl" />
            </motion.div>
            <span className="text-xs mt-2 text-amber-200">Scroll Down</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;