/** @jsx jsx */

import { Heading, jsx } from 'theme-ui';
import { ProjectPage } from '../components/ProjectPage';

const SocialFashionWithLookbook = ({ ...props }) => (
  <ProjectPage {...props}>
    <Heading variant="h3">Overview</Heading>
  </ProjectPage>
);

export default SocialFashionWithLookbook;
