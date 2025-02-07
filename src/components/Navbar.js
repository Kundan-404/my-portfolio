import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-darkPrimary">
            <a href="#">Natesh Kumar</a>
          </h1>
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            {/* <ThemeToggle /> */}
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-primary dark:text-darkPrimary" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-primary dark:text-darkPrimary" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block nav-link">About</a>
            <a href="#experience" className="block nav-link">Experience</a>
            <a href="#projects" className="block nav-link">Projects</a>
            <a href="#contact" className="block nav-link">Contact</a>
            
          </div>
        )}
      </div>
    </nav>
  );
}