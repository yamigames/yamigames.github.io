/** @jsx jsx */

import { Box, Button, Flex, jsx } from 'theme-ui';
import { border } from '../../designSystem';
import { Icon } from '../../designSystem/components/Icon';

export const SCROLL_CONTAINER = 'scroll-container';

export const BackToTopButton = ({ children, ...props }) => (
  <Button
    {...props}
    sx={{
      ...border({
        all: true,
      }),
    }}
    onClick={() => {
      document.getElementById(SCROLL_CONTAINER).scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }}
  >
    <Flex
      sx={{
        alignItems: 'center',
      }}
    >
      <Box>{children}</Box>
      <Box ml={4}>
        <Icon.UpChevron />
      </Box>
    </Flex>
  </Button>
);
