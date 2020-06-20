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
          gridTemplateColumns: ['auto', '256px 1fr'],
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
