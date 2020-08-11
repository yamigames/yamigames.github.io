/** @jsx jsx */

import { Flex, Grid, jsx } from 'theme-ui';
import { border } from '../../lib/borders';

export const TwoUpSideBySide = ({ left, right, ...props }) => (
  <Grid {...props} columns="1fr 1fr" gap={4}>
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
);
