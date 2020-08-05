/** @jsx jsx */

import { Box, jsx } from 'theme-ui';
import { border } from '../';

export const Spacer = ({ ...props }) => (
  <Box
    {...props}
    sx={{
      ...border({
        top: true,
        bottom: true,
      }),
      background: ({ colors }) => `
        repeating-linear-gradient(
          -45deg,
          ${colors.primary},
          ${colors.primary} 8px,
          ${colors.background} 8px,
          ${colors.background} 40px
        );
      `,
    }}
  />
);

Spacer.defaultProps = {
  p: 3,
};

Spacer.Large = props => <Spacer {...props} p={4} />;
