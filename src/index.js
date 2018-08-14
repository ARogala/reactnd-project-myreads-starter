import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
//set up browser router on the app to keep your UI in sync with the URL
//this allows the use of Route and Link in the app.js file
ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')
);
