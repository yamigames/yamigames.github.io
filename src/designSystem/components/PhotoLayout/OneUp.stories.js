/** @jsx jsx */

import { Box, Image, jsx } from 'theme-ui';
import { border } from '../../../designSystem';
import { OneUp } from './OneUp';

export default {
  title: 'PhotoLayout.OneUp',
  component: OneUp,
};

export const Default = () => (
  <Box
    sx={{
      maxWidth: '50%',
      ...border({
        all: true,
      }),
    }}
  >
    <OneUp>
      <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
    </OneUp>
  </Box>
);
