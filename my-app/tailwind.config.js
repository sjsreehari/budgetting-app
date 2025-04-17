/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          'deep-teal': '#0A3D62',
          'soft-gray': '#F4F5F7',
          'warm-beige': '#F5E8C7',
          'muted-coral': '#F28C82',
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-out',
          'slide-up': 'slideUp 0.8s ease-out',
          'scale-up': 'scaleUp 0.8s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          scaleUp: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }