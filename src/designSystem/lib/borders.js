export const border = ({ top, right, bottom, left, all }) => {
  const borderStyle = 'solid';

  return {
    ...(all || top ? { borderTop: borderStyle } : {}),
    ...(all || right ? { borderRight: borderStyle } : {}),
    ...(all || bottom ? { borderBottom: borderStyle } : {}),
    ...(all || left ? { borderLeft: borderStyle } : {}),
    borderWidth: 8,
    borderColor: 'primary',
  };
};
