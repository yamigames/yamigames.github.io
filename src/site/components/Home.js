/** @jsx jsx */

import { Box, jsx } from 'theme-ui';
import { Spacer } from '../../designSystem/components/Spacer';
import { Bio } from './Bio';
import { ProjectList } from './ProjectList';

export const Home = ({ projects = [], projectsToDisplay, ...props }) => {
  return (
    <Box {...props}>
      <Bio p={2} />
      <Spacer />
      Selected Work
      <ProjectList {...{ projects, projectsToDisplay }} />
    </Box>
  );
};
