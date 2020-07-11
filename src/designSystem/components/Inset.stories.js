import React from 'react';
import { Box, Text } from 'theme-ui';
import { Inset } from './Inset';

export default {
  title: 'Inset',
  component: Inset,
};

export const Default = () => (
  <Inset>
    <Box bg="primary" p={2}>
      <Text color="white">Hello, world</Text>
    </Box>
  </Inset>
);
