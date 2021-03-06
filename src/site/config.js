import { lazy } from 'react';

export const socialLinks = [
  {
    service: 'Instagram',
    url: 'https://www.instagram.com/iamnbutler/',
    showInSidebar: false,
  },
  {
    service: 'Twitter',
    url: 'https://twitter.com/iamnbutler',
    showInSidebar: true,
  },
  {
    service: 'Dribbble',
    url: 'https://dribbble.com/iamnbutler',
    showInSidebar: false,
  },
  {
    service: 'Github',
    url: 'https://github.com/iamnbutler',
    showInSidebar: true,
  },
  {
    service: 'Inspo',
    url: 'https://goo.gl/photos/qeTYKqGErL45REbW7',
    showInSidebar: false,
  },
];

export const contactLinks = [
  {
    service: 'LinkedIn',
    url: 'https://www.linkedin.com/in/imnate/',
  },
  {
    service: 'Email',
    url: 'mailto:iamnbutler@gmail.com',
  },
];

export const projects = [
  {
    project: {
      id: 'xdesign-system',
      name: 'xDesign System',
      duration: '2020',
    },
    ProjectPage: lazy(() => import('./projectPages/XDesignSystem')),
  },
  {
    project: {
      id: 'facebook-avatars',
      name: 'Facebook Avatars',
      duration: '2018',
    },
    ProjectPage: lazy(() => import('./projectPages/AvatarsForTwoBillion')),
  },
  {
    project: {
      id: 'feed-expression',
      name: 'News Feed Expression',
      duration: '2017',
    },
    ProjectPage: lazy(() => import('./projectPages/SharingExpression')),
  },
  {
    project: {
      id: 'fb-wallpapers',
      name: 'Facebook.design',
      duration: '2017',
    },
    ProjectPage: lazy(() => import('./projectPages/FbDesignWallpapers')),
  },
  {
    project: {
      id: 'learning-3d',
      name: '30 days/2 Years',
      duration: '2017',
    },
    ProjectPage: lazy(() => import('./projectPages/ThirtyDaysTwoYears')),
  },
  {
    project: {
      id: 'the-intermission',
      name: 'The Intermission',
      duration: '2016',
    },
    ProjectPage: lazy(() => import('./projectPages/TheIntermission')),
  },
  {
    project: {
      id: 'facebook-developers',
      name: 'Facebook Developers',
      duration: '2015',
    },
    ProjectPage: lazy(() => import('./projectPages/FacebookDevelopers')),
  },
  {
    project: {
      id: 'format-custom-pages',
      name: 'Format Custom Pages',
      duration: '2014',
    },
    ProjectPage: lazy(() => import('./projectPages/FormatCustomPages')),
  },
  {
    project: {
      id: 'social-fashion-with-lookbook',
      name: 'Social Fashion with LOOKBOOK',
      duration: '2012',
    },
    ProjectPage: lazy(() => import('./projectPages/SocialFashionWithLookbook')),
  },
  {
    project: {
      id: 'design-and-print',
      name: 'Design & Print',
      duration: '2011-2016',
    },
    ProjectPage: lazy(() => import('./projectPages/DesignAndPrint')),
  },
];
