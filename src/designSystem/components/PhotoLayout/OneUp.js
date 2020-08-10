/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';
import { border } from '../../lib/borders';
import { Inset } from '../Inset';

export const OneUp = ({ children, ...props }) => (
  <Inset {...props}>
    <Flex
      sx={{
        ...border({
          all: true,
        }),
      }}
    >
      {children}
    </Flex>
  </Inset>
);
