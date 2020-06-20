/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Spacer = ({ ...props }) => (
  <Box
    {...props}
    sx={{
      borderTop: 'solid',
      borderBottom: 'solid',
      borderWidth: 8,
      borderColor: 'primary',
      background: ({ colors }) => `
        repeating-linear-gradient(
          -45deg,
          ${colors.primary},
          ${colors.primary} 8px,
          ${colors.background} 8px,
          ${colors.background} 32px
        );
      `,
    }}
  />
);

Spacer.defaultProps = {
  p: 3,
};
