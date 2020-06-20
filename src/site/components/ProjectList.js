/** @jsx jsx */

import drop from 'ramda/src/drop';
import take from 'ramda/src/take';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, jsx } from 'theme-ui';

export const ProjectList = ({ projects = [], projectsToDisplay, ...props }) => {
  const [showMore, setShowMore] = useState(false);

  const shownProjects = showMore ? projects : take(projectsToDisplay, projects);
  const hiddenProjects = drop(projectsToDisplay, projects);

  return (
    <Box
      sx={{
        borderTop: 'solid',
        borderWidth: 8,
        borderColor: 'primary',
      }}
    >
      {shownProjects.map(project => (
        <ProjectEntry key={project.id} {...{ project }} />
      ))}
      {!showMore && (
        <Box
          p={2}
          sx={{
            borderBottom: 'solid',
            borderWidth: 8,
            borderColor: 'primary',
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
        borderBottom: 'solid',
        borderWidth: 8,
        borderColor: 'primary',
      }}
    >
      <Link to={`/projects/${project.id}`}>{project.name}</Link>
    </Box>
  );
};

ProjectEntry.defaultProps = {
  p: 2,
};
