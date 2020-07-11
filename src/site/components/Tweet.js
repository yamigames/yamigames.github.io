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
      p={1}
      sx={{
        ...border({
          all: true,
        }),
        borderRadius: 36,
        position: 'absolute',
        top: '-24px',
        left: '-24px',
        backgroundColor: 'background',
      }}
    >
      <Icon.Twitter />
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
