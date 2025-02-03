import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 4000); // Total animation duration
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center overflow-hidden">
      {/* Background graphics */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* NK logo animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="text-8xl font-bold text-white relative z-10"
      >
        <span className="inline-block">N</span>
        <span className="inline-block">K</span>
      </motion.div>

      {/* Name animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-4xl font-bold text-white space-x-4">
          {"Natesh Kumar".split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.5 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}