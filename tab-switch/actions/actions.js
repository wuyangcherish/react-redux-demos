import CURRENTINDEX from '../constants/ActionTypes';

export function selected(index) {
	return{
		type: 'CURRENTINDEX',
		current:index
	}
}