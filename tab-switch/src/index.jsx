
import 'babel-polyfill';
import React, {Component} from  'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';

import storeConfigure from './stores/store';

import Tab from './containers/tabSwitch';

const store = storeConfigure;

render(
	<Provider store={store}>
		<Tab/>
	</Provider>, document.getElementById('root')
)

