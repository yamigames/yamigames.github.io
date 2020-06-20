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
    <Box>
      {shownProjects.map(project => (
        <Box key={project.id} {...props}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </Box>
      ))}
      {!showMore && (
        <Box onClick={() => setShowMore(true)}>
          See {hiddenProjects.length} More
        </Box>
      )}
    </Box>
  );
};
