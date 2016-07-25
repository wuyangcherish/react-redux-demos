require("react");
var redux = require('redux');
require("react-redux");

function counter(state, action){
	if(typeof state === 'undefined') {
		return 0;
	}

	//分情况
	switch(action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

//store
var store = redux.createStore(counter);
var value = document.getElementById("value");

function render(){
	value.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);

document.getElementById("increment").addEventListener('click', function(){
	store.dispatch({type: 'INCREMENT'});
})

document.getElementById('decrement').addEventListener('click', function(){
	store.dispatch({type: 'DECREMENT'});
})


