/** @jsx jsx */

import { Image, jsx } from 'theme-ui';
import { Copy } from '../../designSystem/components/Copy';
import { PhotoLayout } from '../../designSystem/components/PhotoLayout';
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
      <Copy headline="Approach">
        Learning to work in a variety of spaces and mediums allows one to grow
        and appreciate voices different than their own. Understanding alternate
        viewpoints and another’s worldview can be found at the core of becoming
        a more open person.
      </Copy>
      <Copy>
        Communication isn't a constant stream, but something sporadic. Seeing it
        visually mapped creates interesting and random forms as it moves. The
        map created is reminiscent of stars. Over time the map scrolls, showing
        the ever-continuing stream of data that is moving through the system.
      </Copy>
      <PhotoLayout.TwoUpStaggered
        left={
          <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        }
        right={
          <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        }
      />
      <Copy headline="Validation">
        Learning to work in a variety of spaces and mediums allows one to grow
        and appreciate voices different than their own. Understanding alternate
        viewpoints and another’s worldview can be found at the core of becoming
        a more open person.
      </Copy>
      <Copy>
        Communication isn't a constant stream, but something sporadic. Seeing it
        visually mapped creates interesting and random forms as it moves. The
        map created is reminiscent of stars. Over time the map scrolls, showing
        the ever-continuing stream of data that is moving through the system.
      </Copy>
      <PhotoLayout.OneUp>
        <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      </PhotoLayout.OneUp>
      <Copy headline="Reflection & Next Steps">
        Learning to work in a variety of spaces and mediums allows one to grow
        and appreciate voices different than their own. Understanding alternate
        viewpoints and another’s worldview can be found at the core of becoming
        a more open person.
      </Copy>
    </Project.Body>
  </ProjectPage>
);

export default XDesignSystem;
