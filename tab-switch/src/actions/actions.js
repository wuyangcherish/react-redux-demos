import {CURRENTINDEX} from '../constants/ActionTypes';

export function selected(index) {
	console.log("传进来的indexshi :",index)
	return{
		type: CURRENTINDEX,
		index
	}
}