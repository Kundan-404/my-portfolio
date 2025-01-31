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
