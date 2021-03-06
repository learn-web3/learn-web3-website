export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  lightGrey: '212, 212, 212',
  dark: '7, 7, 8',
  cream: '255, 251, 243',
  blue: '39, 68, 148',
  yellow: '235, 211, 0',
  fadedYellow: '255, 230, 181',
  burntYellow: '239, 182, 51',
  orange: '255,102,0',
  darkOrange: '248, 81, 62',
  green: '78, 234, 118',
  pink: '255, 51, 102',
}

export const fonts = {
  size: {
    tiny: '10px',
    small: '14px',
    medium: '16px',
    h1: '60px',
    h2: '50px',
    h3: '40px',
    h4: '32px',
    h5: '24px',
    h6: '20px',
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  family: {
    OpenSans: '"Open Sans", sans-serif',
    Eczar: '"Eczar", serif',
  },
}

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out',
}

export const responsive = {
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px',
  },
  sm: {
    min: 'min-width: 639px',
    max: 'max-width: 640px',
  },
  md: {
    min: 'min-width: 959px',
    max: 'max-width: 960px',
  },
  lg: {
    min: 'min-width: 1023px',
    max: 'max-width: 1024px',
  },
  xl: {
    min: 'min-width: 1399px',
    max: 'max-width: 1400px',
  },
}

export const globalStyle = `
  @import url('https://fonts.googleapis.com/css?family=Eczar:600,700,800|Open+Sans:400,700,800');

  html, body, #___gatsby {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.family.OpenSans};
    font-style: normal;
    font-stretch: normal;
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.size.medium};
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;  
  }

  button {
    border-style: none;
    line-height: 1em;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    width: 100%;
    height: 100%;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
    padding: 0;
    margin: 0.7em 0;
  }

  h1 {
    font-size: ${fonts.size.h1}
  }
  h2 {
    font-size: ${fonts.size.h2}
  }
  h3 {
    font-size: ${fonts.size.h3}
  }
  h4 {
    font-size: ${fonts.size.h4}
  }
  h5 {
    font-size: ${fonts.size.h5}
  }
  h6 {
    font-size: ${fonts.size.h6}
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;  
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }


  input {
    -webkit-appearance: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }
`
