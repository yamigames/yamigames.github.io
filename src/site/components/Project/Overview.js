/** @jsx jsx */

import { Box, Grid, jsx } from 'theme-ui';
import { Caption } from '../../../designSystem/components/Caption';
import { Copy } from '../../../designSystem/components/Copy';

export const Overview = ({
  goal = '',
  roles = [],
  team = [],
  children,
  ...props
}) => (
  <Box {...props}>
    <Copy headline="Overview" mb={4}>
      {children}
    </Copy>
    <Grid columns="1fr 1fr 1fr">
      <Caption headline="Goal">{goal}</Caption>
      <Caption headline="Roles">{roles.join(', ')}</Caption>
      <Caption headline="Team">
        {team.map((teamLine, index) => (
          <Box key={index}>{teamLine}</Box>
        ))}
      </Caption>
    </Grid>
  </Box>
);
