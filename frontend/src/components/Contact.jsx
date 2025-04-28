import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-400">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="neumorphic-btn p-3 rounded-full mr-4">
                  <FaEnvelope className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:amansharma23503@gmail.com" className="hover:text-accent-blue transition-colors">
                    amansharma23503@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="neumorphic-btn p-3 rounded-full mr-4">
                  <FaPhone className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+917413995089" className="hover:text-accent-purple transition-colors">
                    +91 7413995089
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="neumorphic-btn p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Punjab, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="neumorphic-card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark border border-primary-light focus:border-accent-blue focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark border border-primary-light focus:border-accent-purple focus:outline-none transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark border border-primary-light focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark border border-primary-light focus:border-accent-purple focus:outline-none transition-colors"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="neumorphic-btn flex items-center justify-center w-full py-3 px-6 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;