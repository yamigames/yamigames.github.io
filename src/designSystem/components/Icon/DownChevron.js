/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const DownChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z"
        fill={theme.colors.primary}
      ></path>
    </Icon>
  );
};
