/** @jsx jsx */

import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';

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
        <Box
          p={4}
          sx={{
            ...border({
              top: true,
            }),
          }}
          onClick={() => setShowMore(true)}
        >
          <Heading variant="h3">See {hiddenProjects.length} More</Heading>
        </Box>
      )}
    </Box>
  );
};

const ProjectEntry = ({ project, ...props }) => {
  return (
    <Box {...props}>
      <Heading variant="h3">
        <Link
          to={`/projects/${project.id}`}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {project.name}
        </Link>
      </Heading>
    </Box>
  );
};

ProjectEntry.defaultProps = {
  p: 4,
};
