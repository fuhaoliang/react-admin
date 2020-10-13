import React from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from '@/plugins/react-router-config';
import { handlerRouterExist } from '@/utils/router-utils';

const RootLayout = ({ route, history }) => {
  const isExistRouter = handlerRouterExist(history.location.pathname);

  return (
    <div>
      {!isExistRouter ? <Redirect to="/b"></Redirect> : null}
      {renderRoutes(route.routes)}
    </div>
  );
};

export default RootLayout;
