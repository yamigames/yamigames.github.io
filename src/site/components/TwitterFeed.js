/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';
import { Inset } from '../../designSystem/components/Inset';
import { Tweet } from './Tweet';

export const TwitterFeed = ({ tweets = [], ...props }) => (
  <Inset
    {...props}
    sx={{
      overflowX: 'auto',
    }}
  >
    <Flex>
      {tweets.map(tweet => (
        <Inset
          key={tweet.id}
          sx={{
            flex: '1 0 50%',
          }}
        >
          <Tweet {...{ tweet }} />
        </Inset>
      ))}
    </Flex>
  </Inset>
);
