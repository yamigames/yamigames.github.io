/** @jsx jsx */

import range from 'ramda/src/range';
import { Box, Flex, Heading, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Spacer } from '../../designSystem/components/Spacer';
import { BackToTopButton } from './BackToTopButton';
import { Bio } from './Bio';
import { ProjectList } from './ProjectList';
import { SocialLinks } from './SocialLinks';
import { TwitterFeed } from './TwitterFeed';

const placeholderTweets = range(1, 10).map(id => ({
  id: `${id}`,
  author: {
    username: 'iamnbutler',
  },
  text: `I'm always surprised when people's process is straightforward and organized. Mine always looks like a hurricane 🌪`,
}));

export const Home = ({
  projects = [],
  socialLinks = [],
  projectsToDisplay,
  ...props
}) => {
  return (
    <Box {...props}>
      <Bio p={4} />
      <Spacer />
      <Heading variant="h2" p={4}>
        Selected Work
      </Heading>
      <ProjectList
        sx={{
          ...border({
            top: true,
          }),
        }}
        {...{ projects, projectsToDisplay }}
      />
      <Spacer />
      <Heading
        variant="h2"
        p={4}
        sx={{
          ...border({
            bottom: true,
          }),
        }}
      >
        Feed
      </Heading>
      <TwitterFeed
        sx={{
          ...border({
            bottom: true,
          }),
        }}
        tweets={placeholderTweets}
      />
      <Heading variant="h2" p={4}>
        Find Me Elsewhere
      </Heading>
      <Flex p={4}>
        <Box>
          <Text>
            I can be pretty intermittent on social media, but feel free to give
            me a follow and I'll try to say hi!
          </Text>
        </Box>
        <SocialLinks links={socialLinks} />
      </Flex>
      <Spacer
        p={6}
        pr={4}
        sx={{
          display: 'flex',
          borderBottomStyle: 'none',
          justifyContent: 'flex-end',
        }}
      >
        <BackToTopButton>Back to Top</BackToTopButton>
      </Spacer>
    </Box>
  );
};
