import React from 'react';
import { border } from '../../../designSystem';
import { Inset } from '../../../designSystem/components/Inset';
import { Overview } from './Overview';

export default {
  title: 'Project.Overview',
  component: Overview,
};

export const Default = () => (
  <Inset
    sx={{
      ...border({
        all: true,
      }),
    }}
  >
    <Overview
      goal="Ship a unified navigation experience across many existing tools."
      roles={['Product Lead', 'Vision & Strategy', 'Systems Design']}
      team={['4-6 People', 'Design, Eng. Research']}
    >
      Learning to work in a variety of spaces and mediums allows one to grow and
      appreciate voices different than their own. Understanding alternate
      viewpoints and another’s worldview can be found at the core of becoming a
      more open person.
    </Overview>
  </Inset>
);
