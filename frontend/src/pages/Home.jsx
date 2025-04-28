import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      {/* <Achievements /> */}
      <Contact />
    </>
  );
};

export default Home;