/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Icon = ({ children, size, ...props }) => (
  <Box {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      {children}
    </svg>
  </Box>
);

Icon.defaultProps = {
  size: 26,
};
