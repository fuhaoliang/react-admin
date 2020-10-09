import React from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
import './App.css'

import BaseLayout from '@/layouts/baseLayout'

function App() {
  return (
    <BaseLayout>
      {renderRoutes(routes)}
    </BaseLayout>
  );
}

export default App;
