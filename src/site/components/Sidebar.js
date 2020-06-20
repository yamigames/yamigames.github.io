import React from 'react';
import { Box } from 'theme-ui';

export const Sidebar = ({ ...props }) => {
  return <Box {...props}>Nate Butler</Box>;
};

Sidebar.defaultProps = {
  p: 1,
};
