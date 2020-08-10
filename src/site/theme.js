export const PRIMARY = 'rgba(47, 128, 237, 1)';
export const SECONDARY = 'rgba(47, 128, 237, 0.7)';

const headingFontStack = `'Raleway', sans-serif`;

const bodyFontStack = `'Bitter', serif`;

const codeFontStack = `'Fira Code', serif`;

const typeScale = [
  {
    fontFamily: headingFontStack,
    fontSize: 32.04,
    fontWeight: 700,
    lineHeight: 48,
  },
  {
    fontFamily: headingFontStack,
    fontSize: 28.48,
    fontWeight: 700,
    lineHeight: 40,
  },
  {
    fontFamily: headingFontStack,
    fontSize: 25.31,
    fontWeight: 600,
    lineHeight: 32,
  },
  {
    fontFamily: headingFontStack,
    fontSize: 22.5,
    fontWeight: 600,
    lineHeight: 32,
  },
  {
    fontFamily: bodyFontStack,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
  },
  {
    fontFamily: bodyFontStack,
    fontSize: 17.78,
    fontWeight: 400,
    lineHeight: 32,
  },
  {
    fontFamily: codeFontStack,
    fontSize: 17.78,
    fontWeight: 400,
    lineHeight: 24,
  },
].reverse(); // Reversed to ensure that stack is listed from large to small

export const theme = {
  fonts: {
    heading: headingFontStack,
    body: bodyFontStack,
    code: codeFontStack,
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
      fontSize: 6,
      fontWeight: 6,
      lineHeight: 6,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: 5,
      fontWeight: 5,
      lineHeight: 5,
    },
    h3: {
      fontFamily: 'heading',
      fontSize: 4,
      fontWeight: 4,
      lineHeight: 4,
    },
    h4: {
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 3,
      lineHeight: 3,
    },
    body: {
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 1,
      lineHeight: 2,
    },
    caption: {
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 1,
      lineHeight: 1,
    },
    code: {
      fontFamily: 'code',
      fontSize: 0,
      fontWeight: 1,
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
