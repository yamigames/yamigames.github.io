/** @jsx jsx */

import { Heading, jsx } from 'theme-ui';
import { ProjectPage } from '../components/ProjectPage';

const FacebookDevelopers = ({ ...props }) => (
  <ProjectPage {...props}>
    <Heading variant="h3">Overview</Heading>
  </ProjectPage>
);

export default FacebookDevelopers;
