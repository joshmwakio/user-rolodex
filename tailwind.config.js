module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Gilroy':['Gilroy','sans-serif'],
        'Roboto':['Roboto', 'sans-serif']
      },
      colors:{
         Indepedence:'#45455F',
        'Carolina-Blue':'#3994c6'
        
      },
      'boxShadow':{
          default:'0px 1px 4px rgba(82, 158, 223, 0.6)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
