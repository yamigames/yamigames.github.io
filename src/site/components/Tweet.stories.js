import React from 'react';
import { Tweet } from './Tweet';

export default {
  title: 'Tweet',
  component: Tweet,
};

export const Default = () => (
  <Tweet
    tweet={{
      id: '1',
      author: {
        username: 'iamnbutler',
      },
      text: `I'm always surprised when people's process is straightforward and organized. Mine always looks like a hurricane 🌪`,
    }}
  />
);
