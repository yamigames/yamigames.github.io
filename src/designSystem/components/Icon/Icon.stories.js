/** @jsx jsx */

import { Icon } from './';
import { Box, jsx } from 'theme-ui';

export default {
  title: 'Icon',
  component: Icon,
};

const icons = [
  Icon.LeftChevron,
  Icon.RightChevron,
  Icon.UpChevron,
  Icon.DownChevron,
  Icon.Cross,
  Icon.Play,
  Icon.Twitter,
];

export const AllIcons = () =>
  icons.map(Icon => (
    <Box>
      <code>{Icon.name}</code>
      <Icon />
    </Box>
  ));

export const LeftChevron = () => <Icon.LeftChevron />;

export const RightChevron = () => <Icon.RightChevron />;

export const UpChevron = () => <Icon.UpChevron />;

export const DownChevron = () => <Icon.DownChevron />;

export const Cross = () => <Icon.Cross />;

export const Play = () => <Icon.Play />;

export const Twitter = () => <Icon.Twitter />;
