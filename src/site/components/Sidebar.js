/** @jsx jsx */

import { Box, Flex, Heading, jsx, Text } from 'theme-ui';
import { Inset } from '../../designSystem/components/Inset';
import { Link } from '../../designSystem/components/Link';
import { socialLinks } from '../config';
import { Logo } from './Logo';

const navigationLinks = [
  {
    title: 'About',
  },
  {
    title: 'Work',
  },
  {
    title: 'Feed',
  },
  {
    title: 'Connect',
  },
];

export const Sidebar = ({ ...props }) => (
  <Inset {...props}>
    <Flex
      sx={{
        height: '100%',
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <Heading
          variant="h2"
          sx={{
            flex: '0 1 auto',
          }}
        >
          Nate Butler
        </Heading>
        <Flex
          sx={{
            flex: '1 1 auto',
            flexDirection: 'column',
          }}
        >
          {navigationLinks.map(link => (
            <Text key={link.title} variant="h3" py={2}>
              {link.title}
            </Text>
          ))}
        </Flex>
        <Box
          sx={{
            flex: '0 1 auto',
          }}
        >
          <Flex>
            {socialLinks
              .filter(link => link.showInSidebar)
              .map(link => (
                <Text key={link.service} variant="h3" mr={4}>
                  <Link external to={link.url}>
                    {link.service}
                  </Link>
                </Text>
              ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Inset>
);
