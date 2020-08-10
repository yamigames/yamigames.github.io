/** @jsx jsx */

import { Box, Heading, jsx, Text } from 'theme-ui';

export const Caption = ({ headline, children, ...props }) => (
  <Box {...props}>
    {headline ? (
      <Heading variant="h4" mb={2}>
        {headline}
      </Heading>
    ) : null}
    <Text variant="caption">{children}</Text>
  </Box>
);
