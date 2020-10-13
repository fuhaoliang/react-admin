import React from 'react';
import A from '@/containers/A';
import A_1 from '@/containers/A_1';
import dynamic from 'dva/dynamic';
import { app } from './store';

import { MailOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

// layout
import RootLayout from '@/layouts/RootLayout';
import BaseLayout from '@/layouts/baseLayout';

export default [
  {
    component: RootLayout,
    routes: [
      {
        path: '/login',
        exact: true,
        render: () => <div>123456</div>,
      },
      {
        path: '/',
        hide: true,
        exact: true,
        render: () => <Redirect to={'/a/1'} />,
      },
      {
        path: '/',
        component: BaseLayout,
        routes: [
          {
            path: '/a',
            title: 'A页面',
            icon: <MailOutlined />,
            component: A,
            routes: [
              {
                path: '/a/:1',
                title: 'A11页面',
                exact: true,
                component: A_1,
              },
            ],
          },
          {
            path: '/b',
            title: 'B页面',
            icon: <MailOutlined />,
            exact: true,
            component: dynamic({
              app,
              component: () => import(/* webpackChunkName: "B" */ '@/containers/B'),
              models: () => [import(/* webpackChunkName: "B" */ '../src/models/example')],
            }),
          },
        ],
      },
    ],
  },
];
