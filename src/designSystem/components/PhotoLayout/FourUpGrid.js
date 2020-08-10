/** @jsx jsx */

import { Flex, Grid, jsx } from 'theme-ui';
import { border } from '../../';
import { Inset } from '../Inset';

export const FourUpGrid = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  ...props
}) => (
  <Inset {...props}>
    <Grid columns="1fr 1fr" gap={4}>
      {[
        {
          key: 'top-left',
          image: topLeft,
        },
        {
          key: 'top-right',
          image: topRight,
        },
        {
          key: 'bottom-left',
          image: bottomLeft,
        },
        {
          key: 'bottom-right',
          image: bottomRight,
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
