import "react";
// import Redux from "redux";
var redux = require("redux");
// import redux from "redux";
import "./index.css";
//actions:
function addType(){
	return {type:"INCREMENT"}
}
function subType(){
	return {type:"DECREMENT"}
}

//reducers
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

function addDispatch(){
	return store.dispatch(addType());
}

function subDispatch(){
	return store.dispatch(subType())
}

//render
var addBtn = document.getElementById("increment");
var subBtn = document.getElementById("decrement"); 

addBtn.addEventListener('click',addDispatch);
subBtn.addEventListener('click',subDispatch);

function render(){
	value.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);


