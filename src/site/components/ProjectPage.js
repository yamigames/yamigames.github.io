/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';
import { Inset } from '../../designSystem/components/Inset';

export const ProjectPage = ({ project, children, ...props }) => (
  <Box {...props}>
    <Inset
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Heading variant="h2">{project.name}</Heading>
    </Inset>
    <Inset>{children}</Inset>
  </Box>
);
