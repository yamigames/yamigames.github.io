/** @jsx jsx */

import { lighten } from '@theme-ui/color';
import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Icon } from '../../designSystem/components/Icon';

const projectEntryHover = () => ({
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: lighten('primary', 0.25),
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
        <Flex
          p={4}
          sx={{
            ...border({
              top: true,
            }),
            ...projectEntryHover(),
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
      )}
    </Box>
  );
};

const ProjectEntry = ({ project, ...props }) => (
  <Link
    to={`/projects/${project.id}`}
    sx={{
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    <Flex
      {...props}
      sx={{
        ...projectEntryHover(),
      }}
    >
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
  </Link>
);

ProjectEntry.defaultProps = {
  p: 4,
};
