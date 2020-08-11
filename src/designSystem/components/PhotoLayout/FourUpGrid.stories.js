/** @jsx jsx */

import { Box, Image, jsx } from 'theme-ui';
import { FourUpGrid } from './FourUpGrid';

export default {
  title: 'PhotoLayout.FourUpGrid',
  component: FourUpGrid,
};

export const Default = () => (
  <Box
    sx={{
      maxWidth: '50%',
    }}
  >
    <FourUpGrid
      topLeft={
        <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      }
      topRight={
        <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      }
      bottomLeft={
        <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      }
      bottomRight={
        <Image src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      }
    />
  </Box>
);
