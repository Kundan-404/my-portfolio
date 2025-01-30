import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}