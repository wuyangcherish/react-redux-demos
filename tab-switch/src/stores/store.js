import {createStore} from 'redux';
import {changeIndex} from '../reducers/reducers';

let  storeConfigure = createStore(changeIndex);

export default storeConfigure;
