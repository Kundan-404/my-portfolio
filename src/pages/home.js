import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}