/** @jsx jsx */

import { Box, Heading, jsx } from 'theme-ui';
import { border } from '../../designSystem';
import { Spacer } from '../../designSystem/components/Spacer';
import { Bio } from './Bio';
import { ProjectList } from './ProjectList';

export const Home = ({ projects = [], projectsToDisplay, ...props }) => {
  return (
    <Box {...props}>
      <Bio p={2} />
      <Spacer />
      <Heading variant="h2" p={4}>
        Selected Work
      </Heading>
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
