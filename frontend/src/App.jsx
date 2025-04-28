import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import AbstractBackground from './components/AbstractBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Background layer */}
        <AbstractBackground />

        {/* Content layer */}
        <div className="bg-primary-dark/95 text-gray-200 relative">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
