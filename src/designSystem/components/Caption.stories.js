import React from 'react';
import { Caption } from './Caption';

export default {
  title: 'Caption',
  component: Caption,
};

export const Default = () => (
  <Caption>Ship a unified experience across many existing tools.</Caption>
);

export const WithHeadline = () => (
  <Caption headline="Goal">
    Ship a unified experience across many existing tools.
  </Caption>
);
