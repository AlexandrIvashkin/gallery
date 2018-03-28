import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./bootstrap/lightbox/ekko-lightbox.css";
import "./bootstrap/lightbox/ekko-lightbox.min.js";
import "./bootstrap/jqueryUi/jquery-ui.min.js";
import "./bootstrap/jqueryUi/jquery-ui.css";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './components/redux/reducer.js';

import App from "./components/app.js";

let store = createStore(reducers)

reactDom.render(

	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
