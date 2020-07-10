import React from 'react';
import { Box, Heading } from 'theme-ui';

export const Sidebar = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading variant="h3">Nate Butler</Heading>
    </Box>
  );
};

Sidebar.defaultProps = {
  p: 1,
};
