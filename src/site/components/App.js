/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { jsx, ThemeProvider } from 'theme-ui';
import { theme } from '../theme';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

export const App = () => (
  <ThemeProvider {...{ theme }}>
    <Router>
      <div
        sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: ['auto', '1fr 256px'],
        }}
      >
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);
