import "react";
import { createStore } from "redux";
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
let store = createStore(counter);

function addDispatch(){
	return store.dispatch(addType());
}

function subDispatch(){
	return store.dispatch(subType())
}

//render
let addBtn = document.getElementById("increment");
let subBtn = document.getElementById("decrement"); 

addBtn.addEventListener('click',addDispatch);
subBtn.addEventListener('click',subDispatch);

function render(){
	value.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);


