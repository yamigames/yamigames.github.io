/** @jsx jsx */

import { Avatar, Box, Flex, Heading, jsx, Text } from 'theme-ui';
import profileImage from './profile.jpg';

export const Bio = ({ ...props }) => (
  <Flex {...props}>
    <Box>
      <Heading mb={16} mr={6} variant="h2">Hey There,</Heading>
      <Text  mb={16} variant="body">
        I'm a product designer living in California. I use rapid iteration and
        prototyping to help teams build powerful products. I've worked at places
        like Facebook and Format.
      </Text>
      <Text variant="body">
        Read More &rarr;
      </Text>
    </Box>
    <Box
      sx={{
        flex: '1 0 auto',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          '::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 196,
            height: 196,
            borderRadius: 9999,
            backgroundColor: 'primary',
            opacity: 0.85,
          },
        }}
      >
        <Avatar src={profileImage} width={196} height={196} />
      </Box>
    </Box>
  </Flex>
);
