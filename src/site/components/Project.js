/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Project = ({ project, ...props }) => (
  <Box {...props}>{project.name}</Box>
);
