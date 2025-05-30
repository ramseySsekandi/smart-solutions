"use client";
import { ArrowUpToLine, SquareArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the window
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="py-2.5 px-5 me-2 mb-2 flex gap-1 text-sm font-medium text-gray-300 focus:outline-none rounded-full border border-gray-300 hover:bg-gray-300 hover:text-green-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:-translate-y-1 transition-transform duration-300"
        >
          <ArrowUpToLine size={24} /> Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
