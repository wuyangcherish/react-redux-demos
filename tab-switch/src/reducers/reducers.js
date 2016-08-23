import { CURRENTINDEX } from '../constants/ActionTypes';

const initialState = 0;

export function changeIndex(state=initialState, action) {
	console.log("action is ",action.type)
	switch (action.type){
		case CURRENTINDEX :
			return action.index;
		default: 
			return state;
	}
}
