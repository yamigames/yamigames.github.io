/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, jsx, ThemeProvider } from 'theme-ui';
import { border } from '../../designSystem';
import { theme } from '../theme';
import { SCROLL_CONTAINER } from './BackToTopButton';
import { Home } from './Home';
import { Project } from './Project';
import { Sidebar } from './Sidebar';

const projects = [
  {
    id: 'xdesign-system',
    name: 'xDesign System',
    duration: '2020',
  },
  {
    id: 'avatars-for-two-billion',
    name: 'Avatars for Two Billion',
    duration: '2018',
  },
  {
    id: 'sharing-expression',
    name: 'Sharing Expression',
    duration: '2017',
  },
  {
    id: 'fb-design-wallpapers',
    name: 'fb.design Wallpapers',
    duration: '2017',
  },
  {
    id: '30-days-2-years',
    name: '30 days/2 Years',
    duration: '2017',
  },
  {
    id: 'the-intermission',
    name: 'The Intermission',
    duration: '2016',
  },
  {
    id: 'facebook-developers',
    name: 'Facebook Developers',
    duration: '2015',
  },
  {
    id: 'format-custom-pages',
    name: 'Format Custom Pages',
    duration: '2014',
  },
  {
    id: 'social-fashion-with-lookbook',
    name: 'Social Fashion with LOOKBOOK',
    duration: '2012',
  },
  {
    id: 'design-and-print',
    name: 'Design & Print',
    duration: '2011-2016',
  },
];

export const App = () => (
  <ThemeProvider {...{ theme }}>
    <Router>
      <Box
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
              right: [null, true],
            }),
          }}
        />
        <Box
          id={SCROLL_CONTAINER}
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
      </Box>
    </Router>
  </ThemeProvider>
);
