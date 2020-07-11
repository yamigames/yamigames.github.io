/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Icon = ({ children, size, ...props }) => (
  <Box {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      {children}
    </svg>
  </Box>
);

Icon.defaultProps = {
  size: 24,
};
