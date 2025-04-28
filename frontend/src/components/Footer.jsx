import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-gray-200">Amanjeet</span>{' '}
              <span className="gradient-text">Sharma</span>
            </h3>

            <p className="text-gray-300 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/amanjeetSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-btn p-3 rounded-full"
            >
              <FaGithub className="text-accent-purple" />
            </a>
            <a
              href="https://linkedin.com/in/amanjeet-sharma-20b75a252"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-btn p-3 rounded-full"
            >
              <FaLinkedin className="text-accent-blue" />
            </a>
            <a
              href="https://x.com/amanjeetsharma_"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-btn p-3 rounded-full"
            >
              <FaTwitter className="text-accent-purple" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-btn p-3 rounded-full"
            >
              <FaInstagram className="text-accent-blue" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-dark mt-8 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Amanjeet Sharma. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;