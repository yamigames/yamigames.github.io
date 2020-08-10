import React from 'react';
import { Copy } from './Copy';

export default {
  title: 'Copy',
  component: Copy,
};

export const Default = () => (
  <Copy>
    Learning to work in a variety of spaces and mediums allows one to grow and
    appreciate voices different than their own. Understanding alternate
    viewpoints and another’s worldview can be found at the core of becoming a
    more open person.
  </Copy>
);

export const WithHeadline = () => (
  <Copy headline="Overview">
    Learning to work in a variety of spaces and mediums allows one to grow and
    appreciate voices different than their own. Understanding alternate
    viewpoints and another’s worldview can be found at the core of becoming a
    more open person.
  </Copy>
);
