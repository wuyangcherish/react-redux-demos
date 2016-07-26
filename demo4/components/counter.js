//组件
 
import React, {Component, PropTypes} from 'react';

class Counter extends Component {
	//默认：constructor // Operations usually carried out in componentWillMount go here
	constructor(props){
		super(props)
			this.incrementAsync = this.incrementAsync.bind(this)
			this.incrementIfOdd = this.incrementIfOdd.bind(this)
	}

	incrementIfOdd() {
		// 如果对2 取余不为0 --- 奇数
		if(this.props.value %2 !== 0){
			this.props.onIncrement()
		}
	}

	incrementAsync() {
		//自增
		setTimeout(this.props.onIncrement, 1000)
	}

	render() {
		const {value, onIncrement, onDecrement} = this.props
		return (
			<p>
				Clicked: {value} times
				{"  "}
				<button onClick={onIncrement}> + </button>
				{"  "}
				<button onClick={onDecrement}> - </button>
				{"  "}
				<button onClick={this.incrementIfOdd}>increment If Odd </button>
				{"  "}
				<button onClick={this.incrementAsync}>increment Async</button>
			</p>
		)
	}
}


Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default Counter;






















