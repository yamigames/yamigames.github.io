/** @jsx jsx */

import { Avatar, Box, Flex, Heading, jsx, Text } from 'theme-ui';

export const Bio = ({ ...props }) => (
  <Flex {...props}>
    <Box mr={6}>
      <Heading variant="h3">Hey There,</Heading>
      <Text>
        I'm a product designer living in California. I use rapid iteration and
        prototyping to help teams build powerful products. I've worked at places
        like Facebook and Format.
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
            opacity: 0.75,
          },
        }}
      >
        <Avatar
          src="https://pbs.twimg.com/profile_images/1136268289707991040/LgGISM7w_400x400.jpg"
          width={196}
          height={196}
        />
      </Box>
    </Box>
  </Flex>
);
