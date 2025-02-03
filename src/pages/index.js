import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  return (
    <SplashScreen />

    // <div className="font-sans">
    //   {/* <SplashScreen /> */}
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Experience />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}