// src/hooks/useScrollAnimation.js
import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting (in view), update the state
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible so it doesn't re-animate
          observer.unobserve(entry.target);
        }
      },
      // You can customize the trigger point here
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  // Return the ref for the element and the visibility state
  return [ref, isVisible];
};