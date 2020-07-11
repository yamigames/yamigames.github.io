/** @jsx jsx */

import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, jsx, ThemeProvider } from 'theme-ui';
import { border } from '../../designSystem';
import { projects, socialLinks } from '../config';
import { theme } from '../theme';
import { SCROLL_CONTAINER } from './BackToTopButton';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

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
              bottom: [true, false],
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
              <Home
                projects={projects.map(({ project }) => project)}
                projectsToDisplay={5}
                {...{ socialLinks }}
              />
            </Route>
            {projects.map(({ project, ProjectPage }) => (
              <Route key={project.id} path={`/projects/${project.id}`} exact>
                <Suspense fallback={<Box>Loading {project.name}...</Box>}>
                  <ProjectPage {...{ project }} />
                </Suspense>
              </Route>
            ))}
          </Switch>
        </Box>
      </Box>
    </Router>
  </ThemeProvider>
);
