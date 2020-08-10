/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Inset } from '../Inset';
import { FullBleed } from './FullBleed';

export const OneUp = ({ children, ...props }) => (
  <Inset {...props}>
    <FullBleed>{children}</FullBleed>
  </Inset>
);
