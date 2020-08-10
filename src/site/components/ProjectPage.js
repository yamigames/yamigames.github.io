/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';
import { Inset } from '../../designSystem/components/Inset';
import { Spacer } from '../../designSystem/components/Spacer';

export const ProjectPage = ({
  project,
  overview,
  body,
  footer,
  children,
  ...props
}) => (
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
    <Inset>{overview}</Inset>
    <Spacer />
    <Inset
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      {body}
    </Inset>
    <Inset>{footer}</Inset>
  </Box>
);
