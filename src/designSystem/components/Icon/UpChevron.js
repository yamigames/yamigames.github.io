/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const UpChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z"
        fill={theme.colors.primary}
      ></path>
    </Icon>
  );
};
