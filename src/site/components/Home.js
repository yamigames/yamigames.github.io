/** @jsx jsx */

import { Box, jsx } from 'theme-ui';
import { border } from '../../designSystem';
import { Spacer } from '../../designSystem/components/Spacer';
import { Bio } from './Bio';
import { ProjectList } from './ProjectList';

export const Home = ({ projects = [], projectsToDisplay, ...props }) => {
  return (
    <Box {...props}>
      <Bio p={2} />
      <Spacer />
      Selected Work
      <ProjectList
        sx={{
          ...border({
            top: true,
          }),
        }}
        {...{ projects, projectsToDisplay }}
      />
      <Spacer />
    </Box>
  );
};
