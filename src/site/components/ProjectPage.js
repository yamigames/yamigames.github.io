/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';

export const ProjectPage = ({ project, children, ...props }) => (
  <Box {...props}>
    <Box
      p={4}
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Heading variant="h3">{project.name}</Heading>
    </Box>
    <Box p={4}>{children}</Box>
  </Box>
);
