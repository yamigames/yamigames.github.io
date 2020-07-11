/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const RightChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M7.7 21.756l8.8-9.778L7.7 2.2"
        stroke={theme.colors.primary}
        strokeWidth="6"
      />
    </Icon>
  );
};
