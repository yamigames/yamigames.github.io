/** @jsx jsx */

import { Box, Heading, jsx, Text } from 'theme-ui';

export const Copy = ({ headline, children, ...props }) => (
  <Box {...props}>
    {headline ? (
      <Heading variant="h3" mb={2}>
        {headline}
      </Heading>
    ) : null}
    <Text variant="body">{children}</Text>
  </Box>
);
