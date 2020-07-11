/** @jsx jsx */

import { Box, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Icon } from '../../designSystem/components/Icon';

export const Tweet = ({ tweet, ...props }) => (
  <Box
    {...props}
    sx={{
      position: 'relative',
      ...border({
        all: true,
      }),
    }}
    p={4}
  >
    <Box
      sx={{
        ...border({
          all: true,
        }),
        borderRadius: 9999,
        position: 'absolute',
        top: -32,
        left: -32,
        width: 64,
        height: 64,
        textAlign: 'center',
        backgroundColor: 'background',
      }}
    >
      <Icon.Twitter
        sx={{
          position: 'absolute',
          top: 12,
          left: 12,
        }}
      />
    </Box>
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
