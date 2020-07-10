/** @jsx jsx */

import { Box, jsx, useThemeUI } from 'theme-ui';

export const Icon = ({ children, size, ...props }) => (
  <Box {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      {children}
    </svg>
  </Box>
);

Icon.defaultProps = {
  size: 26,
};

const RightChevronIcon = ({ ...props }) => {
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

Icon.RightChevron = RightChevronIcon;
