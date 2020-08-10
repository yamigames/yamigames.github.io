/** @jsx jsx */

import { Flex, Grid, jsx } from 'theme-ui';
import { border } from '../../lib/borders';
import { Inset } from '../Inset';

export const TwoUpSideBySide = ({ left, right, ...props }) => (
  <Inset {...props}>
    <Grid columns="1fr 1fr" gap={4}>
      {[
        {
          key: 'left',
          image: left,
        },
        {
          key: 'right',
          image: right,
        },
      ].map(({ key, image }) => (
        <Flex
          {...{ key }}
          sx={{
            ...border({
              all: true,
            }),
          }}
        >
          {image}
        </Flex>
      ))}
    </Grid>
  </Inset>
);
