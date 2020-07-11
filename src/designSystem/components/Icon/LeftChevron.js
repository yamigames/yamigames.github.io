/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const LeftChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M16.5 2.2l-8.8 9.778 8.8 9.778"
        stroke={theme.colors.primary}
        strokeWidth="6"
      />
    </Icon>
  );
};
