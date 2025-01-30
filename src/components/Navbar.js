import ThemeToggle from "./Themetoogle";
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

    useEffect(() => {

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setVisible(true);
        }
  
        // Always show navbar when at top
        if (currentScrollY === 0) {
          setVisible(true);
        }
  
        lastScrollY.current = currentScrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`fixed backdrop-blur-sm w-full z-10 transition-transform duration-300 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="max-w-4xl border-solid solid; mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold"> <a href="">Natesh Kumar</a></h1>
            <div className="space-x-6 text-lg font-semibold">
              {/* <a href="#about" className="hover:text-tertiary">About</a>
              <a href="#experience" className="hover:text-tertiary">Experience</a>
              <a href="#projects" className="hover:text-tertiary">Projects</a>
              <a href="#contact" className="hover:text-tertiary">Contact</a> */}

                <a href="#about" className="nav-link">About</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
                {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </nav>
    );
}