import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      
      {/* <Divider />  */}
      
      <About />
      
      {/* <Divider flip={true} /> Between About & Experience */}
      
      <Experience />
      
      {/* <Divider /> Between Experience & Projects */}
      
      <Projects />
      
      {/* <Divider flip={true} /> Between Projects & Contact */}
      
      <Contact />
      <Footer />
      
    </div>
  );
}