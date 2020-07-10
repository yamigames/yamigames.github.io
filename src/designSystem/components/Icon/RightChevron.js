/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const RightChevron = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"
        fill={theme.colors.primary}
      ></path>
    </Icon>
  );
};
