/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';

export const ProjectPage = ({ title, children, ...props }) => (
  <Box {...props}>
    <Box
      p={4}
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Heading variant="h3">{title}</Heading>
    </Box>
    <Box p={4}>{children}</Box>
  </Box>
);
