import React from 'react';
import { Spacer } from '../../designSystem/components/Spacer';
import { Bio } from './Bio';

export const Home = () => {
  return (
    <div>
      <Bio p={2} />
      <Spacer />
      Selected Work
    </div>
  );
};
