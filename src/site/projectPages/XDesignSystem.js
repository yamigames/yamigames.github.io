/** @jsx jsx */

import { Box, Grid, Image, jsx } from 'theme-ui';
import { Caption } from '../../designSystem/components/Caption';
import { Copy } from '../../designSystem/components/Copy';
import { PhotoLayout } from '../../designSystem/components/PhotoLayout';
import { Project } from '../components/Project';
import { ProjectPage } from '../components/ProjectPage';

const XDesignSystem = ({ ...props }) => (
  <ProjectPage
    {...props}
    overview={
      <Project.Overview
        goal="Ship a unified navigation experience across many existing tools."
        roles={['Product Lead', 'Vision & Strategy', 'Systems Design']}
        team={['4-6 People', 'Design, Eng. Research']}
      >
        Learning to work in a variety of spaces and mediums allows one to grow
        and appreciate voices different than their own. Understanding alternate
        viewpoints and another’s worldview can be found at the core of becoming
        a more open person.
      </Project.Overview>
    }
    body={
      <Project.Body>
        <Copy headline="Approach">
          Learning to work in a variety of spaces and mediums allows one to grow
          and appreciate voices different than their own. Understanding
          alternate viewpoints and another’s worldview can be found at the core
          of becoming a more open person.
        </Copy>
        <Box p={1} />
        <Copy>
          Communication isn't a constant stream, but something sporadic. Seeing
          it visually mapped creates interesting and random forms as it moves.
          The map created is reminiscent of stars. Over time the map scrolls,
          showing the ever-continuing stream of data that is moving through the
          system.
        </Copy>
        <Box p={3} />
        <PhotoLayout.TwoUpStaggered
          left={
            <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
          }
          right={
            <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
          }
        />
        <Box p={3} />
        <Copy headline="Validation">
          Learning to work in a variety of spaces and mediums allows one to grow
          and appreciate voices different than their own. Understanding
          alternate viewpoints and another’s worldview can be found at the core
          of becoming a more open person.
        </Copy>
        <Box p={1} />
        <Copy>
          Communication isn't a constant stream, but something sporadic. Seeing
          it visually mapped creates interesting and random forms as it moves.
          The map created is reminiscent of stars. Over time the map scrolls,
          showing the ever-continuing stream of data that is moving through the
          system.
        </Copy>
        <Box p={3} />
        <PhotoLayout.OneUp>
          <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        </PhotoLayout.OneUp>
        <Box p={3} />
        <Copy headline="Reflection & Next Steps">
          Learning to work in a variety of spaces and mediums allows one to grow
          and appreciate voices different than their own. Understanding
          alternate viewpoints and another’s worldview can be found at the core
          of becoming a more open person.
        </Copy>
      </Project.Body>
    }
    footer={
      <Box>
        <Copy headline="Wrapup" mb={4}>
          Learning to work in a variety of spaces and mediums allows one to grow
          and appreciate voices different than their own. Understanding
          alternate viewpoints and another’s worldview can be found at the core
          of becoming a more open person.
        </Copy>
        <Grid columns="1fr 1fr">
          <Caption headline="Outcome">
            +X% metrix changed, overall feedback improved
          </Caption>
          <Caption headline="Next">Hand off to new designer.</Caption>
        </Grid>
      </Box>
    }
  />
);

export default XDesignSystem;
