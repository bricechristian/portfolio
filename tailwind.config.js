module.exports = {
  mode: 'jit',
  corePlugins: {
    container: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#292929',
      'white': '#ffffff',
      'yellow': '#FFC400',
      'red': '#DE350B',
      'blue': '#0052CC'
    },    
    fontFamily: {
      body: ['MBKaos', 'sans-serif'],
      heading: ['NewYork', 'serif'],
      caps: ['TSBlock', 'sans-serif']
    },
    extend: {
      
    },
  },
  plugins: [],
}
