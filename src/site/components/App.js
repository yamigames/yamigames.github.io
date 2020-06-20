/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, jsx, ThemeProvider } from 'theme-ui';
import { border } from '../../designSystem';
import { theme } from '../theme';
import { Home } from './Home';
import { Project } from './Project';
import { Sidebar } from './Sidebar';

const projects = [
  {
    id: 'xdesign-system',
    name: 'xDesign System',
  },
  {
    id: 'avatars-for-two-billion',
    name: 'Avatars for Two Billion',
  },
  {
    id: 'sharing-expression',
    name: 'Sharing Expression',
  },
  {
    id: 'fb-design-wallpapers',
    name: 'fb.design Wallpapers',
  },
  {
    id: '30-days-2-years',
    name: '30 days/2 Years',
  },
  {
    id: 'the-intermission',
    name: 'The Intermission',
  },
  {
    id: 'facebook-developers',
    name: 'Facebook Developers',
  },
  {
    id: 'format-custom-pages',
    name: 'Format Custom Pages',
  },
  {
    id: 'social-fashion-with-lookbook',
    name: 'Social Fashion with LOOKBOOK',
  },
  {
    id: 'design-and-print',
    name: 'Design & Print',
  },
];

export const App = () => (
  <ThemeProvider {...{ theme }}>
    <Router>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['auto', '33% 1fr'],
          height: '100vh',
          ...border({
            all: true,
          }),
        }}
      >
        <Sidebar
          sx={{
            ...border({
              right: true,
            }),
          }}
        />
        <Box
          sx={{
            overflowY: 'scroll',
          }}
        >
          <Switch>
            <Route path="/" exact>
              <Home {...{ projects }} projectsToDisplay={5} />
            </Route>
            {projects.map(project => (
              <Route key={project.id} path={`/projects/${project.id}`} exact>
                <Project {...{ project }} />
              </Route>
            ))}
          </Switch>
        </Box>
      </div>
    </Router>
  </ThemeProvider>
);
