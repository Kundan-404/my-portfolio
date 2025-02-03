import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const router = useRouter();
  const [showNK, setShowNK] = useState(true);
  const [showName, setShowName] = useState(false);
  const name = "Natesh Kumar".split('');

  useEffect(() => {
    // Animation sequence
    setTimeout(() => {
      setShowNK(false); // Hide NK logo
      setShowName(true); // Show full name
    }, 2000);
    
    setTimeout(() => router.push('/home'), 4000);
  }, [router]);

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* NK Logo Animation */}
      <AnimatePresence>
        {showNK && (
          <motion.div 
            key="nk-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ 
              scale: 0,
              opacity: 0,
              transition: { duration: 0.5 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-8xl font-bold text-white">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="inline-block"
              >
                N
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="inline-block"
              >
                K
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Name Animation */}
      <AnimatePresence>
        {showName && (
          <motion.div 
            key="full-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-4xl font-bold text-white text-center">
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ 
                    opacity: 0,
                    y: index % 2 === 0 ? 100 : -100,
                    x: index % 2 === 0 ? -100 : 100
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    x: 0
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 120
                  }}
                  className="inline-block mx-1"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 h-1 bg-accent"
      />
    </div>
  );
}