
import 'babel-polyfill';

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Counter from './container/container';

import {render} from 'react-dom';

import storeConfigure from './store/counterStore';

const store = storeConfigure;

render(
	<Provider store={store}>
		<Counter/>
	</Provider>,
	document.getElementById('root')
)