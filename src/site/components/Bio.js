/** @jsx jsx */

import { Box, jsx, Text } from 'theme-ui';

export const Bio = ({ ...props }) => (
  <Box {...props}>
    <Text
      sx={{
        fontSize: 4,
      }}
    >
      Hey,
    </Text>
    <Text>
      I'm a product designer living in California. I use rapid iteration and
      prototyping to help teams build powerful products. I've worked at places
      like Facebook and Format.
    </Text>
  </Box>
);
