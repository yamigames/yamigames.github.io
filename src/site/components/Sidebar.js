/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';

export const Sidebar = ({ ...props }) => (
  <Box {...props}>
    <Heading variant="h3">Nate Butler</Heading>
  </Box>
);

Sidebar.defaultProps = {
  p: 1,
};
