/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';
import { border } from '../../lib/borders';

export const OneUp = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{
      ...border({
        all: true,
      }),
    }}
  >
    {children}
  </Flex>
);
