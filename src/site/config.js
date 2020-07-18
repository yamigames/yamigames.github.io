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
    // TODO(Nate): Insert real link.
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
      id: 'avatars-for-two-billion',
      name: 'Avatars for Two Billion',
      duration: '2018',
    },
    ProjectPage: lazy(() => import('./projectPages/AvatarsForTwoBillion')),
  },
  {
    project: {
      id: 'sharing-expression',
      name: 'Sharing Expression',
      duration: '2017',
    },
    ProjectPage: lazy(() => import('./projectPages/SharingExpression')),
  },
  {
    project: {
      id: 'fb-design-wallpapers',
      name: 'fb.design Wallpapers',
      duration: '2017',
    },
    ProjectPage: lazy(() => import('./projectPages/FbDesignWallpapers')),
  },
  {
    project: {
      id: '30-days-2-years',
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
