{/*
	* 
	*
	*
	* 
*/}

import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

{/*创建action*/}

var actionsCreator = function(){
return{
		type:'AN_ACTIO'
	}
}
console.log("action 的值",actionsCreator());

{/*
	redux 提供了一种方法是createStore 这个用来实例化 reducer 函数
	createStore 里面只接受一个能够改变应用状态的函数
*/}


{/*

import {createStore} from 'redux';
var store_0 = createStore(()=>{})
console.log("store 是：",store_0 )

*/}

{/*
	这里的store 返回的是一个对象: Object {}
	里面有 dispatch getState subscribe 等方法
	每当一个函数发生的时候，redux 都能调用这个函数

*/}




{/*
	reducer 纯函数 用来更新state

	* 往 createStore 里面传reducer的时候就是给redux绑定action 处理函数的过程

*/}


import {createStore, combineReducers} from 'redux';

var reducer_1 = function(...args){
	console.log("Reducer was called with args...", args);
}

var store_1 = createStore(reducer_1);

{/*
	* args: [undefined, type: "@@redux/INIT"]
	*
	* 但是我们并没有调用 dispatch????? 
	* 因为在初始化应用 state 的时候 redux dispatch 一个初始化的action{{type:"@@redux/INIT"}}
	*
	* 初始化应用的时候 state 还没有被初始化，因此它的值是： 'undefined'
*/}


{/*如何从 redux 实例中读取 state
	*
	*  getState()
	*
*/}

var reducer_2 = function(state, action){
	console.log('reducer_2 was called with this state', state, "action is ", action)

}

var store_2  = createStore(reducer_2);


var reducer_3 = function(state={}, action){
	console.log("reducer_3 was called with this state", state, 'action', action)
}

var store_3 = createStore(reducer_3);

{/*
	*
	* 由上面的我们可以看到在初始化的时候 state传入了默认值{}
	* 然后在初始化之后的state 就从 undefined 变成了 {} 
	*
	* 调用 reducer 只是为了响应一个 拍发过来的action
	* 
*/}

var reducer_4 = function(state={}, action){
	console.log("reducer_4 was called with this state", state, 'action', action)

	switch(action.type){
		case "SAY_SOMETHING":
			return {
				...state,
				message: action.value
			}
		default:
			return state;
	}
}

var store_4 = createStore(reducer_4);

{/*
	*
	* 1. switch 用来判断触发的是哪一个action的状态
	*
	* 2. ...state，message: action.value 是用来更新state 里面的message状态的
	* 	也可以用 Object.assign({},state,message: action.value)的方式合并
	*
	* 
*/}

//actions
var setNameActions = function(name){
	return{
		type: 'ADD_NAME',
		name: name
	}

}

var userReducer = function(state={'name':'Kara'}, action){
	switch(action.type){
		case "ADD_NAME":
			return {
				...state, name: action.name
			}
		default:
			return state
	}
}

var  itemReducer = function(state=[],action){
	switch(action.type) {
		default:
			return state
	}
}


var reducer_5 = combineReducers({
	user: userReducer,
	items: itemReducer
})

var store_5 = createStore(reducer_5);

console.log("store_5 state after initialization:", store_5.getState())

{/*触发一下*/}

store_5.dispatch(setNameActions("Cherish"));

console.log("reducer_5 触发之后的state系:", store_5.getState())


{/* 
	*上面是将reducer 合并的例子
	*
	* 上面的例子中，，触发了actions 的 ‘ADD_NAME’ 
	*
	* 能调用dispatch 永远都是 store 
	* 
*/}

{/*
	* 上述的这种更新是立即显示的 但是如果要延迟显示呢？
	*
	* 这就用到了中间件了 middleware
	*
	*applyMiddleware 接收一个或者多个中间件，返回一个供 Redux createStore 调用的函数
	*当最后这个函数被调用时，它会产生一个 Store 的增强器， 
	*用来将所有的中间件应用到 Store 的dispatch上
	*
	*
	* 
*/}

import { applyMiddleware } from 'redux';

var thunkMiddleWare = function({dispatch, getState}){
	console.log("进入中间件")
	return function(next){
		console.log("args next is",next);
		return function(action){
			console.log("arg action is", action);
			return typeof action  === 'function' ?
					action(dispatch, getState): next(action)
		}
	}
}

const finalCreateStore = applyMiddleware(thunkMiddleWare)(createStore);

var reducer_6 = combineReducers({
	speak: function(state={}, action){
		console.log("speak was called with state", state, "and action is", action);

		switch(action.type) {
			case "SAY":
				return {
					...state, message: action.message
				}
			default:
				return state
		}
	}
})

const store_6 = finalCreateStore(reducer_6);


var sayncSayActions = function(message){
	return function(dispatch){
		setTimeout(function(){
			console.log(new Date(), 'dispatch action now');
			dispatch({
				type:'SAY',
				message
			})
		},2000)
	}
}

console.log("Runnig our saync action createor :", new Date());

store_6.dispatch(sayncSayActions("你好吗？"))


{/*
	*
	* 接下来是有关订阅 state 的更新的内容
	*
	* subscribe 不太适合于react 的demo 具体原因我是看网上这么说的 哈哈~ 以后看到具体原因再补充吧
	*
	* react ： 如何读取 store  里面的state 以及如何进行 action 的分发 
	*
	*
	*Provider && Connect
	*
	* 
	*
	* 
*/}

































