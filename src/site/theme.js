export const PRIMARY = '#2f80ed';

const headingFontStack = `'Fira Sans', sans-serif`;

const bodyFontStack = `'Bitter', serif`;

const typeScale = [
  {
    fontFamily: headingFontStack,
    fontSize: 48.83,
    fontWeight: 900,
    lineHeight: 56,
  },
  {
    fontFamily: headingFontStack,
    fontSize: 39.06,
    fontWeight: 700,
    lineHeight: 48,
  },
  {
    fontFamily: headingFontStack,
    fontSize: 31.15,
    fontWeight: 700,
    lineHeight: 40,
  },
  {
    fontFamily: bodyFontStack,
    fontSize: 25,
    fontWeight: 400,
    lineHeight: 40,
  },
  {
    fontFamily: bodyFontStack,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
  },
].reverse(); // Reversed to ensure that stack is listed from large to small

export const theme = {
  fonts: {
    heading: headingFontStack,
    body: bodyFontStack,
  },
  fontSizes: typeScale.map(x => x.fontSize),
  fontWeights: typeScale.map(x => x.fontWeight),
  lineHeights: typeScale
    .map(x => x.lineHeight)
    .map(lineHeight => `${lineHeight}px`),
  colors: {
    text: PRIMARY,
    background: 'white',
    primary: PRIMARY,
    modes: {
      dark: {
        background: 'black',
      },
      inverted: {
        text: 'white',
        background: PRIMARY,
        primary: 'white',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 'body',
      fontWeight: 'body',
    },
  },
  text: {
    h1: {
      fontFamily: 'heading',
      fontSize: 4,
      fontWeight: 4,
      lineHeight: 4,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 3,
      lineHeight: 3,
    },
    h3: {
      fontFamily: 'heading',
      fontSize: 2,
      fontWeight: 2,
      lineHeight: 2,
    },
    body: {
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 0,
      lineHeight: 0,
    },
    caption: {
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: 0,
      lineHeight: 0,
    },
  },
  buttons: {
    primary: {
      fontFamily: 'heading',
      backgroundColor: 'background',
      color: 'text',
      borderRadius: 0,
    },
  },
};
