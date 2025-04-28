import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-accent-purple mb-4">Project Not Found</h2>
          <Link
            to="/#projects"
            className="neumorphic-btn inline-flex items-center px-4 py-2"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-primary-dark rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-primary-dark/90 backdrop-blur-sm z-10 p-6 border-b border-primary-light flex justify-between items-start">
          <h1 className="text-3xl font-bold gradient-text">{project.title}</h1>
          <Link
            to="/#projects"
            className="neumorphic-btn p-2 rounded-full"
          >
            <FaTimes className="text-lg" />
          </Link>
        </div>

        <div className="p-6">
          {/* Gallery and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="neumorphic-card overflow-hidden mb-6">
                <div className="aspect-video bg-primary-dark/50 flex items-center justify-center">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="neumorphic-card aspect-video overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorphic-btn flex items-center px-4 py-2"
                >
                  <FaGithub className="mr-2 text-accent-purple" />
                  View Code
                </a>
                {/* <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorphic-btn flex items-center px-4 py-2"
                >
                  <FaExternalLinkAlt className="mr-2 text-accent-blue" />
                  Live Demo
                </a> */}
              </div>
            </div>

            {/* Timeline Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Project Includes:</h3>
              <Timeline position="alternate">
                {project.features.map((feature, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="primary" className="!bg-accent-purple" />
                      {index < project.features.length - 1 && (
                        <TimelineConnector className="!bg-accent-blue/50" />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="neumorphic-card p-4 mb-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-accent-blue">{feature.title}</h4>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>

          {/* Technologies */}
          <div className="neumorphic-card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary-dark text-sm border border-accent-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;