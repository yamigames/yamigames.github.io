/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';
import { Inset } from '../Inset';

export const TwoUpSideBySide = ({ left, right, ...props }) => (
  <Inset {...props}>
    <Grid columns="1fr 1fr" gap={4} children={[left, right]} />
  </Inset>
);
