/** @jsx jsx */

import { lighten } from '@theme-ui/color';
import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Box, Flex, Heading, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Icon } from '../../designSystem/components/Icon';
import { Inset } from '../../designSystem/components/Inset';
import { Link } from '../../designSystem/components/Link';

const projectEntryHover = () => ({
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: lighten('primary', 0.38),
  },
});

export const ProjectList = ({ projects = [], projectsToDisplay, ...props }) => {
  const [showMore, setShowMore] = useState(false);

  const shownProjects = showMore ? projects : take(projectsToDisplay, projects);
  const hiddenProjects = drop(projectsToDisplay, projects);

  return (
    <Box {...props}>
      {shownProjects.map((project, index) => (
        <ProjectEntry
          key={project.id}
          sx={{
            ...border({
              bottom: index !== shownProjects.length - 1,
            }),
          }}
          {...{ project }}
        />
      ))}
      {!showMore && (
        <Inset
          sx={{
            ...border({
              top: true,
            }),
            ...projectEntryHover(),
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
            }}
            onClick={() => setShowMore(true)}
          >
            <Box sx={{ flex: '1 1 auto' }}>
              <Heading variant="h3">See {hiddenProjects.length} More</Heading>
            </Box>
            <Box>
              <Icon.DownChevron />
            </Box>
          </Flex>
        </Inset>
      )}
    </Box>
  );
};

const ProjectEntry = ({ project, ...props }) => (
  <Link to={`/projects/${project.id}`}>
    <Inset
      {...props}
      sx={{
        ...projectEntryHover(),
      }}
    >
      <Flex>
        <Box sx={{ flex: '1 1 auto' }}>
          <Heading variant="h3">{project.name}.</Heading>
        </Box>
        <Box>
          <Flex
            sx={{
              alignItems: 'center',
            }}
          >
            <Text variant="h3">{project.duration}</Text>
            <Icon.RightChevron ml={4} />
          </Flex>
        </Box>
      </Flex>
    </Inset>
  </Link>
);
