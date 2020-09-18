import React from 'react';
import logo from './logo.svg';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router, Link } from 'react-router-dom';
import routes from './routes';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <div>
          <h3>Root</h3>
          <Link to='/a'>AAA</Link> | <Link to='/b'>BBB</Link>
          {renderRoutes(routes)}
        </div>
      </Router>
    </div>
  );
}

export default App;
