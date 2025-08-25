// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // It's good practice to include ts/tsx for future-proofing
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        // --- YOUR EXISTING ANIMATIONS (Still useful!) ---
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        // --- NEW, MORE POLISHED "FADE IN" ANIMATION ---
        // Adds a subtle scale effect for a smoother "pop"
        'fade-in-up-scale': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },

        // --- NEW: CINEMATIC BACKGROUND PAN ---
        // For making the hero image feel alive and dynamic
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        
        // --- NEW: SHIMMERING TEXT GRADIENT ---
        // For making text with a gradient background animated and eye-catching
        'text-gradient': {
          'to right': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
      },
      animation: {
        // --- YOUR EXISTING ANIMATIONS ---
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-left': 'fade-in-left 1s ease-out forwards',
        'fade-in-right': 'fade-in-right 1s ease-out forwards',

        // --- NEW ANIMATION UTILITIES ---
        'fade-in-up-scale': 'fade-in-up-scale 0.8s ease-out forwards',
        'background-pan': 'background-pan 15s ease-in-out infinite alternate',
        'text-gradient': 'text-gradient 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}