/** @jsx jsx */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, jsx, ThemeProvider } from 'theme-ui';
import { border } from '../../designSystem';
import { theme } from '../theme';
import { SCROLL_CONTAINER } from './BackToTopButton';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

const projects = [
  {
    project: {
      id: 'xdesign-system',
      name: 'xDesign System',
      duration: '2020',
    },
    ProjectPage: React.lazy(() => import('../projectPages/XDesignSystem')),
  },
  {
    project: {
      id: 'avatars-for-two-billion',
      name: 'Avatars for Two Billion',
      duration: '2018',
    },
    ProjectPage: React.lazy(() =>
      import('../projectPages/AvatarsForTwoBillion')
    ),
  },
  {
    project: {
      id: 'sharing-expression',
      name: 'Sharing Expression',
      duration: '2017',
    },
    ProjectPage: React.lazy(() => import('../projectPages/SharingExpression')),
  },
  {
    project: {
      id: 'fb-design-wallpapers',
      name: 'fb.design Wallpapers',
      duration: '2017',
    },
    ProjectPage: React.lazy(() => import('../projectPages/FbDesignWallpapers')),
  },
  {
    project: {
      id: '30-days-2-years',
      name: '30 days/2 Years',
      duration: '2017',
    },
    ProjectPage: React.lazy(() => import('../projectPages/ThirtyDaysTwoYears')),
  },
  {
    project: {
      id: 'the-intermission',
      name: 'The Intermission',
      duration: '2016',
    },
    ProjectPage: React.lazy(() => import('../projectPages/TheIntermission')),
  },
  {
    project: {
      id: 'facebook-developers',
      name: 'Facebook Developers',
      duration: '2015',
    },
    ProjectPage: React.lazy(() => import('../projectPages/FacebookDevelopers')),
  },
  {
    project: {
      id: 'format-custom-pages',
      name: 'Format Custom Pages',
      duration: '2014',
    },
    ProjectPage: React.lazy(() => import('../projectPages/FormatCustomPages')),
  },
  {
    project: {
      id: 'social-fashion-with-lookbook',
      name: 'Social Fashion with LOOKBOOK',
      duration: '2012',
    },
    ProjectPage: React.lazy(() =>
      import('../projectPages/SocialFashionWithLookbook')
    ),
  },
  {
    project: {
      id: 'design-and-print',
      name: 'Design & Print',
      duration: '2011-2016',
    },
    ProjectPage: React.lazy(() => import('../projectPages/DesignAndPrint')),
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
              bottom: [true, null],
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
