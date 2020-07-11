/** @jsx jsx */

import { Box, Flex, jsx, Text } from 'theme-ui';

export const SocialLinks = ({ links, ...props }) => (
  <Flex
    {...props}
    sx={{
      flex: '1 1 auto',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }}
  >
    {links.map(link => (
      <Box key={link.service} sx={{ flex: '1 0 auto' }}>
        <Text variant="h3">
          <a
            href={link.url}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {link.service}
          </a>
        </Text>
      </Box>
    ))}
  </Flex>
);
