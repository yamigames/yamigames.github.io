/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';
import { Inset } from '../Inset';

export const FourUpGrid = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  ...props
}) => (
  <Inset {...props}>
    <Grid
      columns="1fr 1fr"
      gap={4}
      children={[topLeft, topRight, bottomLeft, bottomRight]}
    />
  </Inset>
);
