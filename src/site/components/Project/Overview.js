/** @jsx jsx */

import { Box, Grid, Heading, jsx, Text } from 'theme-ui';

export const Overview = ({
  goal = '',
  roles = [],
  team = [],
  children,
  ...props
}) => (
  <Box {...props}>
    <Heading variant="h3" mb={2}>
      Overview
    </Heading>
    <Text variant="body">{children}</Text>
    <Grid columns="1fr 1fr 1fr" py={2}>
      <Callout title="Goal">{goal}</Callout>
      <Callout title="Roles">{roles.join(', ')}</Callout>
      <Callout title="Team">
        {team.map((teamLine, index) => (
          <Box key={index}>{teamLine}</Box>
        ))}
      </Callout>
    </Grid>
  </Box>
);

const Callout = ({ title = '', children, ...props }) => (
  <Box {...props}>
    <Heading variant="h4" mb={2}>
      {title}
    </Heading>
    <Text variant="caption">{children}</Text>
  </Box>
);
