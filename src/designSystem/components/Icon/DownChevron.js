/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const DownChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M2.322 7.578l9.778 8.8 9.778-8.8"
        stroke={theme.colors.primary}
        strokeWidth="6"
      />
    </Icon>
  );
};
