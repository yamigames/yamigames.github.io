/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Logo = ({ ...props }) => (
  <Box
    {...props}
    sx={{
      width: 36,
      height: 36,
    }}
    m={2}
    bg="primary"
  ></Box>
);
