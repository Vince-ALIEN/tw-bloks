module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}', // Chemin des fichiers source
      './build/tw-container/**/*.{js,jsx,ts,tsx}', // Chemin des fichiers source
      './**/*.php', // Chemin des fichiers PHP
  ],
  theme: {
      extend: {},
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
  },
  plugins: [],
}
