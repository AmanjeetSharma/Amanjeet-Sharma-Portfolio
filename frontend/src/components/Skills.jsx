import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiExpress, SiBootstrap, SiTailwindcss, SiMysql, SiMongodb, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { skills } from "../constants";
import { red } from "@mui/material/colors";

// Mapping icons based on the 'icon' value in skills
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
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        {skills.map((category) => (
          <div key={category.category} className="my-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6"
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => {
                const IconComponent = iconComponents[skill.icon?.toLowerCase()] || FaReact;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="neumorphic-card p-6 flex flex-col items-center justify-center text-center"
                  >
                    <IconComponent className="text-4xl mb-3 text-accent-blue" />
                    <h3 className="font-medium">{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
