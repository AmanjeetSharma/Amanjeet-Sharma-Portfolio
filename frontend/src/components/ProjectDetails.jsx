import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }, 300);

    return () => {
      clearTimeout(timer);
      // Re-enable body scroll when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [id]);

  const handleNextImage = () => {
    setSelectedImage(prev => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setSelectedImage(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  const openFullscreen = (imgIndex) => {
    setFullscreenImage(imgIndex);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleClose = () => {
    // Close the modal
    document.body.style.overflow = 'auto';
    
    // Navigate to projects section
    navigate('/#projects', { replace: true });
    
    // Scroll to projects section after a small delay
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-t-accent-purple border-r-accent-blue border-b-accent-purple border-l-accent-blue rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-accent-purple mb-4">Project Not Found</h2>
          <button
            onClick={handleClose}
            className="neumorphic-btn inline-flex items-center px-4 py-2"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
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
            <button
              onClick={handleClose}
              className="neumorphic-btn p-2 rounded-full"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          <div className="p-6">
            {/* Gallery and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="neumorphic-card overflow-hidden mb-6 relative group">
                  <div className="aspect-video bg-primary-dark/50 flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedImage}
                        src={project.images[selectedImage]}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-contain cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openFullscreen(selectedImage)}
                      />
                    </AnimatePresence>
                    
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 neumorphic-btn p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaChevronLeft />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 neumorphic-btn p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  
                  <div className="flex justify-center mt-3 gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === selectedImage ? 'bg-accent-purple w-4' : 'bg-gray-500'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="neumorphic-card aspect-video overflow-hidden cursor-pointer relative"
                      onClick={() => {
                        setSelectedImage(i);
                        document.querySelector('.main-image-container')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                      {i === selectedImage && (
                        <div className="absolute inset-0 border-2 border-accent-purple pointer-events-none" />
                      )}
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
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neumorphic-btn flex items-center px-4 py-2"
                  >
                    <FaExternalLinkAlt className="mr-2 text-accent-blue" />
                    Live Demo
                  </a>
                </div>
              </div>

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

      <AnimatePresence>
        {fullscreenImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <div className="relative max-w-full max-h-full">
              <img
                src={project.images[fullscreenImage]}
                alt={`${project.title} fullscreen`}
                className="max-w-full max-h-[90vh] object-contain"
              />
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(prev => (prev - 1 + project.images.length) % project.images.length);
                  }}
                  className="neumorphic-btn p-3 rounded-full"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(prev => (prev + 1) % project.images.length);
                  }}
                  className="neumorphic-btn p-3 rounded-full"
                >
                  <FaChevronRight />
                </button>
                <button 
                  onClick={closeFullscreen}
                  className="neumorphic-btn p-3 rounded-full"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${index === fullscreenImage ? 'bg-accent-purple w-4' : 'bg-gray-500'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetails;