/** @jsx jsx */

import range from 'ramda/src/range';
import { Box, Flex, Grid, Heading, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Inset } from '../../designSystem/components/Inset';
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
    <Inset>
      <Bio />
    </Inset>
    <Spacer />
    <Inset>
      <Heading variant="h2">Selected Work</Heading>
    </Inset>
    <ProjectList
      sx={{
        ...border({
          top: true,
        }),
      }}
      {...{ projects, projectsToDisplay }}
    />
    <Spacer />
    <Inset
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Heading variant="h2">Feed</Heading>
    </Inset>
    <TwitterFeed
      sx={{
        ...border({
          bottom: true,
        }),
      }}
      tweets={placeholderTweets}
    />
    <Inset
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Heading variant="h2">Find Me Elsewhere</Heading>
    </Inset>
    <Inset>
      <Flex>
        <Box>
          <Text>
            I can be pretty intermittent on social media, but feel free to give
            me a follow and I'll try to say hi!
          </Text>
        </Box>
        <SocialLinks links={socialLinks} />
      </Flex>
    </Inset>
    <Inset>
      <Flex>
        <Box>
          <Heading variant="h3" mb={4}>
            Get In Touch.
          </Heading>
          <Text>
            I'm currently working on Internal Tools @ Facebook, but if you want
            to get in touch feel free to reach out.
          </Text>
        </Box>
        <SocialLinks links={contactLinks} />
      </Flex>
    </Inset>
    <Inset>
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
    </Inset>
    <Spacer.Large
      sx={{
        display: 'flex',
        borderBottomStyle: 'none',
        justifyContent: 'flex-end',
      }}
    >
      <BackToTopButton>Back to Top</BackToTopButton>
    </Spacer.Large>
  </Box>
);
