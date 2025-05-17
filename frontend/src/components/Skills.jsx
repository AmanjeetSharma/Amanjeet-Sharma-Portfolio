import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiIntellijidea,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skills } from "../constants";

const iconComponents = {
  java: FaJava,
  javascript: SiJavascript,
  cplusplus: SiCplusplus,
  html5: FaHtml5,
  nodejs: FaNodeJs,
  react: FaReact,
  express: SiExpress,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  mongodb: SiMongodb,
  github: FaGithub,
  vscode: VscVscode,
  intellij: SiIntellijidea,
  redux: SiRedux,
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsPopupOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSkill(null);
    setIsLoading(false);
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        {skills.map((category) => (
          <div key={category.category} className="my-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center text-lg sm:text-xl font-semibold mb-4 text-gray-100"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 shadow-md">
                <FaCode className="text-white text-md sm:text-lg" />
              </div>
              <h3 className="gradient-text">{category.category}</h3>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6">
              {category.skills.map((skill, index) => {
                const IconComponent =
                  iconComponents[skill.icon?.toLowerCase()] || FaReact;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="neumorphic-card p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
                    onClick={() => handleSkillClick(skill)}
                  >
                    <IconComponent className="text-2xl sm:text-3xl mb-2 text-accent-blue" />
                    <h3 className="font-medium text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                      {skill.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            <div className="w-full h-[1px] bg-purple-500 backdrop-blur-md rounded my-10 sm:my-12"></div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupOpen && selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative shadow-2xl text-white"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 shadow-lg"
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  <div className="flex items-center mb-4">
                    {iconComponents[selectedSkill.icon?.toLowerCase()] && (
                      <div className="text-3xl sm:text-4xl mr-4 text-accent-blue">
                        {React.createElement(
                          iconComponents[selectedSkill.icon.toLowerCase()]
                        )}
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                      {selectedSkill.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-6">
                    {selectedSkill.description}
                  </p>

                  <a
                    href={selectedSkill.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:opacity-90 transition text-sm sm:text-base"
                  >
                    View Documentation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
