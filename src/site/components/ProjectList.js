/** @jsx jsx */

import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, jsx, Text } from 'theme-ui';
import { border } from '../../designSystem';
import { Icon } from '../../designSystem/components/Icon';

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
  <Flex {...props}>
    <Box sx={{ flex: '1 1 auto' }}>
      <Heading variant="h3">
        <Link
          to={`/projects/${project.id}`}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {project.name}.
        </Link>
      </Heading>
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
);

ProjectEntry.defaultProps = {
  p: 4,
};
