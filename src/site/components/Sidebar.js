/** @jsx jsx */

import { Heading, jsx } from 'theme-ui';
import { Inset } from '../../designSystem/components/Inset';

export const Sidebar = ({ ...props }) => (
  <Inset {...props}>
    <Heading variant="h3">Nate Butler</Heading>
  </Inset>
);
