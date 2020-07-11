/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const Play = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path d="M5 23.5V.5l15 11.767L5 23.5z" fill={theme.colors.primary} />
    </Icon>
  );
};
