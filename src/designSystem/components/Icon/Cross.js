/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';
import { Icon } from './Icon';

export const Cross = ({ ...props }) => {
  const { theme } = useThemeUI();

  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16.243l7.379 7.378 4.242-4.242L16.243 12l7.378-7.379L19.38.38 12 7.757 4.621.38.38 4.62 7.757 12 .38 19.379 4.62 23.62 12 16.243z"
        fill={theme.colors.primary}
      />
    </Icon>
  );
};
