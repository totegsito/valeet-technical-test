import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
