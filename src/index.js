import React from 'react';
import ReactDOM from 'react-dom';
import './utils/rem'
import './index.css';
import './styles/index.scss'
import './styles/reset.scss'
import App from './App';
import Index from './view/index/index'
import RouterList from './router/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
// import Router from './router/index'
ReactDOM.render(RouterList, document.getElementById('root'));
registerServiceWorker();
