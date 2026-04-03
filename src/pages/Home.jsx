import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skill";
import Education from "../components/Education";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
  
      <Contact />
      <Footer />
    </>
  );
}

export default Home;