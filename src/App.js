import React from 'react';
import { renderRoutes } from '@/plugins/react-router-config';
import routes from './routes';
import './App.css'

function App() {
  return (
    <div>
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
