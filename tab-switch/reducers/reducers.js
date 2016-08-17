import {CURRENTINDEX} from '../actions/actions';
import {combineReducers} from 'redux';

function changeIndex(state={currentIndex:0}, action) {
	switch (action.type){
		case 'CURRENTINDEX': 
			return {
				currentIndex: action.index;
			}
		default: 
			return state;
	}
}

const rootReducer = combineReducers({
	changeIndex
}) 

export default rootReducer;