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
    id: 'xdesign-system',
    name: 'xDesign System',
    duration: '2020',
    component: React.lazy(() => import('../projectPages/XDesignSystemPage')),
  },
  {
    id: 'avatars-for-two-billion',
    name: 'Avatars for Two Billion',
    duration: '2018',
    component: React.lazy(() =>
      import('../projectPages/AvatarsForTwoBillionPage')
    ),
  },
  {
    id: 'sharing-expression',
    name: 'Sharing Expression',
    duration: '2017',
    component: React.lazy(() =>
      import('../projectPages/SharingExpressionPage')
    ),
  },
  {
    id: 'fb-design-wallpapers',
    name: 'fb.design Wallpapers',
    duration: '2017',
    component: React.lazy(() =>
      import('../projectPages/FbDesignWallpapersPage')
    ),
  },
  {
    id: '30-days-2-years',
    name: '30 days/2 Years',
    duration: '2017',
    component: React.lazy(() =>
      import('../projectPages/ThirtyDaysTwoYearsPage')
    ),
  },
  {
    id: 'the-intermission',
    name: 'The Intermission',
    duration: '2016',
    component: React.lazy(() => import('../projectPages/TheIntermissionPage')),
  },
  {
    id: 'facebook-developers',
    name: 'Facebook Developers',
    duration: '2015',
    component: React.lazy(() =>
      import('../projectPages/FacebookDevelopersPage')
    ),
  },
  {
    id: 'format-custom-pages',
    name: 'Format Custom Pages',
    duration: '2014',
    component: React.lazy(() =>
      import('../projectPages/FormatCustomPagesPage')
    ),
  },
  {
    id: 'social-fashion-with-lookbook',
    name: 'Social Fashion with LOOKBOOK',
    duration: '2012',
    component: React.lazy(() =>
      import('../projectPages/SocialFashionWithLookbookPage')
    ),
  },
  {
    id: 'design-and-print',
    name: 'Design & Print',
    duration: '2011-2016',
    component: React.lazy(() => import('../projectPages/DesignAndPrintPage')),
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
                <Suspense fallback={<Box>Loading project...</Box>}>
                  <project.component />
                </Suspense>
              </Route>
            ))}
          </Switch>
        </Box>
      </Box>
    </Router>
  </ThemeProvider>
);
