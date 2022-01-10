export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 84, 104
  ],
  styles: {
    h1: {
      fontSize: [7, 8, 9],
      fontFamily: 'Arial, system-ui',
      margin: '10px 10px'
    },
    a: {
      textDecoration: 'none',
      fontSize: [3, 4, 5],
      fontFamily: 'Arial, system-ui',
      color: 'text',
      ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
}