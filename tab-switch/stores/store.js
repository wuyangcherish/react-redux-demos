import {createStore} from 'redux';
import rootReducer from '../reducers/reducers';

export default function tabStore(){
	return createStore(rootReducer)
}