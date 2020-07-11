/** @jsx jsx */

import { Box, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';

export const Tweet = ({ tweet, ...props }) => (
  <Box
    {...props}
    p={4}
    sx={{
      ...border({
        all: true,
      }),
    }}
  >
    <Box
      mb={1}
      sx={{
        fontWeight: 'bold',
      }}
    >
      {tweet.author.username}
    </Box>
    <Text>{tweet.text}</Text>
  </Box>
);
