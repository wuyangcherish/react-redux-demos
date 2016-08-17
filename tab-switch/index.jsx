import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import tabStore from '../store/store';
import Tab from '../components/index';
import {render} from 'react';

 
const store = tabStore();

render(
	<Provider store={store}>
		<Tab/>
	</Provider>, Document.getElementById('root')
)

