import { motion } from "framer-motion";
import { achievements } from "../constants";
import { FaTrophy, FaCertificate, FaCode, FaLeaf, FaBook } from "react-icons/fa";

const Achievements = () => {
  const getIcon = (achievement) => {
    if (achievement.includes("community")) return <FaLeaf className="text-accent-purple" />;
    if (achievement.includes("questions")) return <FaCode className="text-accent-blue" />;
    if (achievement.includes("Certified")) return <FaCertificate className="text-accent-purple" />;
    return <FaTrophy className="text-accent-blue" />;
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark/90">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="gradient-text">Achievements</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neumorphic-card p-6 flex items-start"
            >
              <div className="mr-4 mt-1">
                {getIcon(achievement)}
              </div>
              <p className="text-gray-400">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;