import {change} from '../reducer/reducer';
import {createStore} from 'redux';

let storeConfigure = createStore(change);

export default storeConfigure;