// Define your custom animations here
const animations = {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      easeUp: {
        '0%': { transform: 'translateY(100%)', opacity: '0'},
        '100%': { transform: 'translateY(0)', opacity: '1' },
      }
    },
    animation: {
      fadeIn: 'fadeIn 3s ease-in-out',
      easyUp: 'easeUp 2s ease-in-out'
    },
  };
  
  export default animations;