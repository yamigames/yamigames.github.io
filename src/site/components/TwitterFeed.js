/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';
import { Tweet } from './Tweet';

export const TwitterFeed = ({ tweets = [], ...props }) => (
  <Flex
    {...props}
    sx={{
      overflowX: 'auto',
    }}
  >
    {tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        mr={4}
        sx={{
            flex: '1 0 50%'
        }}
        {...{ tweet }}
      />
    ))}
  </Flex>
);

TwitterFeed.defaultProps = {
  p: 4,
};
