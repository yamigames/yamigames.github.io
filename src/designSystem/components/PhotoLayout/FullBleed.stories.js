/** @jsx jsx */

import { Box, Image, jsx } from 'theme-ui';
import { border } from '../../../designSystem';
import { FullBleed } from './FullBleed';

export default {
  title: 'PhotoLayout.FullBleed',
  component: FullBleed,
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
    <FullBleed>
      <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
    </FullBleed>
  </Box>
);
