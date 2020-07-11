/** @jsx jsx */

import range from 'ramda/src/range';
import { Box, Flex, Grid, Heading, jsx, Text } from 'theme-ui';
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

const mediaLinks = [
  {
    title: `Make a Facebook avatar for chat, Instagram, Twitter and more. Here's how`,
    year: 2020,
    publication: 'CNET',
  },
  {
    title:
      'You can now have your very own digital avatar on Facebook and Messenger',
    year: 2020,
    publication: 'USA Today',
  },
  {
    title: `Facebook's Design Team Releases Abstract, iOS 11-Inspired iPhone Wallpapers`,
    year: 2018,
    publication: 'Design Taxi',
  },
  {
    title: `Facebook's Design Team Releases Abstract, iOS 11-Inspired iPhone Wallpapers`,
    year: 2017,
    publication: 'The Verge',
  },
  {
    title: 'Facebook encourages text statuses with new colored backgrounds',
    year: 2016,
    publication: 'Techcrunch',
  },
  {
    title: 'Facebook encourages text statuses with new colored backgrounds',
    year: 2016,
    publication: 'USA Today',
  },
];

export const Home = ({
  projects = [],
  socialLinks = [],
  contactLinks = [],
  projectsToDisplay,
  ...props
}) => (
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
    <Heading
      variant="h2"
      p={4}
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      Find Me Elsewhere
    </Heading>
    <Flex p={4}>
      <Box>
        <Text>
          I can be pretty intermittent on social media, but feel free to give me
          a follow and I'll try to say hi!
        </Text>
      </Box>
      <SocialLinks links={socialLinks} />
    </Flex>
    <Flex p={4}>
      <Box>
        <Heading variant="h3" mb={4}>
          Get In Touch.
        </Heading>
        <Text>
          I'm currently working on Internal Tools @ Facebook, but if you want to
          get in touch feel free to reach out.
        </Text>
      </Box>
      <SocialLinks links={contactLinks} />
    </Flex>
    <Box p={4}>
      <Heading variant="h3">In Media.</Heading>
      <Box>
        {mediaLinks.map((link, index) => (
          <Grid key={index} columns="3fr 1fr 1fr" py={2}>
            <Box>{link.title}</Box>
            <Box>{link.year}</Box>
            <Box>{link.publication}</Box>
          </Grid>
        ))}
      </Box>
    </Box>
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
