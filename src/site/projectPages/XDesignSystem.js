/** @jsx jsx */

import { jsx, Text } from 'theme-ui';
import { Project } from '../components/Project';
import { ProjectPage } from '../components/ProjectPage';

const XDesignSystem = ({ ...props }) => (
  <ProjectPage {...props}>
    <Project.Overview
      goal="Ship a unified navigation experience across many existing tools."
      roles={['Product Lead', 'Vision & Strategy', 'Systems Design']}
      team={['4-6 People', 'Design, Eng. Research']}
    >
      Learning to work in a variety of spaces and mediums allows one to grow and
      appreciate voices different than their own. Understanding alternate
      viewpoints and another’s worldview can be found at the core of becoming a
      more open person.
    </Project.Overview>
    <Project.Body>
      <Text variant="body">
        Learning to work in a variety of spaces and mediums allows one to grow
        and appreciate voices different than their own. Understanding alternate
        viewpoints and another’s worldview can be found at the core of becoming
        a more open person.
      </Text>
    </Project.Body>
  </ProjectPage>
);

export default XDesignSystem;
