
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constant/actionTypes';

export function change(state=0, action){
	switch(action.type){
		case INCREMENT_COUNTER:
			console.log("add")
			return state +1;
		case DECREMENT_COUNTER:
		console.log("sub")
			return state -1;
		default:
			return state;
	}
}