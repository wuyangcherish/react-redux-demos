import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

// component
class Counter extends Component {
	render() {
		const {value, onIncreaseClick, onDecreaseClick} = this.props
		return (
			<div>
				<span>{value}</span>
				<button onClick={onIncreaseClick}>Increase</button>
				<button onClick={onDecreaseClick}>Decrease</button>
			</div>
		)
	}
}

// 变量不可用时候 显示一个警告
Counter.PropTypes = {
	value: PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired,
	onDecreaseClick: PropTypes.func.isRequired
}

//action
const increaseAction = {type: 'increase'}
const decreaseAction = {type: 'decrease'}

//reducer:
function counter(state = {count:0}, action){
	const count = state.count
	switch (action.type){
		case 'increase':
			return {count: count+1}
		case 'decrease':
			return {count: count-1}
		default:
			return state
	}
}

//store
const store = createStore(counter);


//Map redux state to Component props
function mapStateToProps(state){
	return {
		value: state.count
	}
}

//map redux actions to Component props
function mapDispatchToProps(dispatch){
	return {
		onIncreaseClick:()=> dispatch(increaseAction),
		onDecreaseClick:()=> dispatch(decreaseAction)
	}
}

const App = connect(mapStateToProps,mapDispatchToProps)(Counter)


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
)

/**
 * 首先是 onclick -> dispatch -> 调用 dispatch -> 
 * -> 符合type 的reducer开始执行 -> 最后改变元素 
 * PropTypes.func.isRequired： 来确保如果props没有提供则会显示一个警告
 */




