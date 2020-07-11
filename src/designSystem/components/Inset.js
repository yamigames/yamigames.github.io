/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

/**
 * Use `Inset` to consistently inset content.
 */
export const Inset = ({ ...props }) => <Box {...props} />;

Inset.defaultProps = {
  p: 4,
};
