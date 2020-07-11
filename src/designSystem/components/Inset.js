/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

export const Inset = ({ ...props }) => <Box {...props} />;

Inset.defaultProps = {
  p: 4,
};
