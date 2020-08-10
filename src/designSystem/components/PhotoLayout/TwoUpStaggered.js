/** @jsx jsx */

import { Flex, Grid, jsx } from 'theme-ui';
import { border } from '../../lib/borders';
import { Inset } from '../Inset';

export const TwoUpStaggered = ({ left, right, ...props }) => (
  <Inset {...props}>
    <Grid>
      <Flex
        sx={{
          ...border({
            all: true,
          }),
          gridColumn: '2 / span 2',
          gridRow: '2 / span 2',
        }}
      >
        {left}
      </Flex>
      <Flex
        sx={{
          ...border({
            all: true,
          }),
          gridColumn: '1 / span 2',
          gridRow: '1 / span 2',
        }}
      >
        {right}
      </Flex>
    </Grid>
  </Inset>
);
