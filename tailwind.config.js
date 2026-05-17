/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        leaf: '#2F5D50',
        honey: '#D98E04',
        wheat: '#F2D8A7',
        ink: '#1F2933',
        muted: '#6B7280',
        line: '#E5E0D8'
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
