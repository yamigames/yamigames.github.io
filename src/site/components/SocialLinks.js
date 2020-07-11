/** @jsx jsx */

import { Box, Flex, jsx, Text } from 'theme-ui';
import { Link } from '../../designSystem/components/Link';

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
          <Link external to={link.url}>
            {link.service}
          </Link>
        </Text>
      </Box>
    ))}
  </Flex>
);
