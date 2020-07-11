/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const UpChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M21.878 16.378l-9.778-8.8-9.778 8.8"
        stroke={theme.colors.primary}
        strokeWidth="6"
      />
    </Icon>
  );
};
