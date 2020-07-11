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
    ...responsive('borderTop')(all || top),
    ...responsive('borderRight')(all || right),
    ...responsive('borderBottom')(all || bottom),
    ...responsive('borderLeft')(all || left),
    borderWidth: 8,
    borderColor: 'primary',
  };
};
