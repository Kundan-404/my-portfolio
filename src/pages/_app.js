// // pages/_app.js
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


// pages/_app.js


import '../styles/globals.css'
import ThemeToggle from '../components/ThemeToggle' // Import the ThemeToggle component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ThemeToggle /> {/* Floating button will appear on every page */}
    </>
  )
}

export default MyApp


// import { useEffect, useState } from 'react';
// import Loading from './loading';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   const [showLoading, setShowLoading] = useState(false);

//   useEffect(() => {
//     // Check if the user has visited before
//     const hasVisited = localStorage.getItem('hasVisited');
//     if (!hasVisited) {
//       setShowLoading(true);
//     }
//   }, []);

//   return showLoading ? <Loading /> : <Component {...pageProps} /> ;
// }

// export default MyApp;