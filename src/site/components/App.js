/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { jsx, Box, ThemeProvider } from 'theme-ui';
import { theme } from '../theme';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

export const App = () => (
  <ThemeProvider {...{ theme }}>
    <Router>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['auto', '33% 1fr'],
          height: '100vh',
          border: 'solid',
          borderWidth: 8,
          borderColor: 'primary',
        }}
      >
        <Sidebar
          sx={{
            borderRight: 'solid',
            borderWidth: 8,
            borderColor: 'primary',
          }}
        />
        <Box
          sx={{
            overflowY: 'scroll',
          }}
        >
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  </ThemeProvider>
);
