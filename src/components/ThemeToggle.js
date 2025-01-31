// import { useState, useEffect } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     localStorage.setItem('darkMode', !darkMode);
//     document.documentElement.classList.toggle('dark', !darkMode);
//   };

//   // Check for saved preference on mount
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedDarkMode);
//     document.documentElement.classList.toggle('dark', savedDarkMode);
//   }, []);

//   // return (
//   //   <button
//   //     onClick={toggleDarkMode}
//   //     className="p-2 rounded-full bg-neutral hover:bg-white transition-colors"
//   //     aria-label="Toggle Dark Mode"
//   //   >
//   //     {darkMode ? (
//   //       <SunIcon className="w-8 h-6 text-primary" />
//   //     ) : (
//   //       <MoonIcon className="w-6 h-6 text-primary" />
//   //     )}
//   //   </button>
//   // );

//   // return (
//   //   <button
//   //     onClick={toggleDarkMode}
//   //     className="p-2 flex bg-neutral rounded-lg border border-gray-400 transition-colors"
//   //     aria-label="Toggle Dark Mode"
//   //   >
//   //     <SunIcon className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-yellow-500"}`} />
//   //     <span className="text-gray-500">|</span>
//   //     <MoonIcon className={`w-6 h-6 ${darkMode ? "text-blue-500" : "text-gray-400"}`} />
//   //   </button>
//   // );



//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p-2 flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-400 transition-colors"
//       aria-label="Toggle Dark Mode"
//     >
//       <SunIcon className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-yellow-500"}`} />
//       <span className="text-gray-500">|</span>
//       <MoonIcon className={`w-6 h-6 ${darkMode ? "text-blue-500" : "text-gray-400"}`} />
//     </button>
//   );
// }


import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  // Check localStorage for theme preference
  const [darkMode, setDarkMode] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 rounded-full border border-gray-400 shadow-lg transition-all hover:scale-105"
      aria-label="Toggle Dark Mode"
    >
      <SunIcon className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-yellow-500"}`} />
      <span className="text-gray-500">|</span>
      <MoonIcon className={`w-6 h-6 ${darkMode ? "text-blue-500" : "text-gray-400"}`} />
    </button>
  );
}
