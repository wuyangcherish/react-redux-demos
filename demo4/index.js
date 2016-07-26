import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/counter';
import counter from './reducers';

//创建store
const store = createStore(counter);
const appEl = document.getElementById("app");

function render(){
	ReactDOM.render(
		<Counter value={store.getState()}
			onIncrement = {()=> store.dispatch({type: "INCREMENT"})}
			onDecrement = {()=> store.dispatch({type: "DECREMENT"})}
 		/>,
 		appEl
	)
}

render();
store.subscribe(render)