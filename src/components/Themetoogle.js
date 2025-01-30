import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Check for saved preference on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-neutral hover:bg-white transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-primary" />
      ) : (
        <MoonIcon className="w-6 h-6 text-primary" />
      )}
    </button>
  );
}