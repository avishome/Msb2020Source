import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind/tailwind-theme.css';
import './components/home_component.css';
import * as serviceWorker from './serviceWorker';
//import Home from './components/index'
import DataContext from './services/contextData'

ReactDOM.render(
  <React.StrictMode>
    <DataContext />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
