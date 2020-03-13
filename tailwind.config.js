/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont',],
      'serif': ['Georgia', 'Cambria',],
      'mono': ['Poppins','Helvetica Neue','Helvetica','Arial','sans-serif']
          },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  variants: {},
  plugins: []
}
