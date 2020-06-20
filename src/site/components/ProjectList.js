/** @jsx jsx */

import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, jsx } from 'theme-ui';
import { border } from '../../designSystem';

export const ProjectList = ({ projects = [], projectsToDisplay, ...props }) => {
  const [showMore, setShowMore] = useState(false);

  const shownProjects = showMore ? projects : take(projectsToDisplay, projects);
  const hiddenProjects = drop(projectsToDisplay, projects);

  return (
    <Box
      sx={{
        ...border({
          top: true,
        }),
      }}
    >
      {shownProjects.map(project => (
        <ProjectEntry key={project.id} {...{ project }} />
      ))}
      {!showMore && (
        <Box
          p={2}
          sx={{
            ...border({
              bottom: true,
            }),
          }}
          onClick={() => setShowMore(true)}
        >
          See {hiddenProjects.length} More
        </Box>
      )}
    </Box>
  );
};

const ProjectEntry = ({ project, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        ...border({
          bottom: true,
        }),
      }}
    >
      <Link to={`/projects/${project.id}`}>{project.name}</Link>
    </Box>
  );
};

ProjectEntry.defaultProps = {
  p: 2,
};
