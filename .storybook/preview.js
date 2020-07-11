import { addDecorator, addParameters } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-ui';
import { theme } from '../src/site/theme';

addDecorator(withThemeProvider);

addParameters({
  themeUi: {
    themes: [{ theme, name: 'Default' }],
  },
});
