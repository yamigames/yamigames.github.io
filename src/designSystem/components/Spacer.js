/** @jsx jsx */

import { Box, jsx, useThemeUI } from 'theme-ui';

export const Spacer = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Box
      {...props}
      sx={{
        borderTop: 'solid',
        borderBottom: 'solid',
        borderWidth: 8,
        borderColor: 'primary',
        background: `
          repeating-linear-gradient(
            -45deg,
            ${theme.colors.primary},
            ${theme.colors.primary} 8px,
            ${theme.colors.background} 8px,
            ${theme.colors.background} 32px
          );
        `,
      }}
    />
  );
};

Spacer.defaultProps = {
  p: 3,
};
