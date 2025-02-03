import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Loading() {
  const router = useRouter();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      // Redirect to the main page if the user has visited before
      router.push('/');
    } else {
      // Mark the user as having visited
      localStorage.setItem('hasVisited', 'true');

      // Simulate an animation delay
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 3000); // 3 seconds for the animation

      // Redirect to the main page after the animation
      const redirectTimer = setTimeout(() => {
        router.push('/');
      }, 2000); // 4 seconds total (3s animation + 1s delay)

      return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white animate-fade-in">
          Natesh Kumar
        </h1>
      </div>
    </div>
  );
}