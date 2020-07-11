export const border = ({ top, right, bottom, left, all }) => {
  const borderStyle = 'solid';

  const responsive = property => show => ({
    [property]: Array.isArray(show)
      ? show.map(value => {
          if (value === null) {
            return null;
          }

          if (!value) {
            return 'none';
          }

          return borderStyle;
        })
      : show
      ? borderStyle
      : void 0,
  });

  return {
    ...responsive('borderTopStyle')(all || top),
    ...responsive('borderRightStyle')(all || right),
    ...responsive('borderBottomStyle')(all || bottom),
    ...responsive('borderLeftStyle')(all || left),
    borderWidth: 8,
    borderColor: 'primary',
  };
};
