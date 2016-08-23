
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/counter';

export default class Counter extends Component{
	render(){
		const {onIncrement, onDecrement} = this.props;
		return (
			<div>
				<span className="number">现在的数值是： {this.props.propsValue}</span>
				<button onClick={onIncrement} className="btn">+</button>
				<button onClick={onDecrement} className="btn">-</button>
			</div>
		)
	}
}