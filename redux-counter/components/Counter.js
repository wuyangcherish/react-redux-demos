import React , {PropTypes} from 'react';

export default class Counter extends React.Component{
	static PropTypes={
		increment: PropTypes.func.isRequired,
		incrementIfOdd: PropTypes.func.isRequired,
		decrement: PropTypes.func.isRequired,
		counter: PropTypes.number.isRequired
	}
}


render() {
	const {increment, incrementIfOdd, decrement, counter} = this.props;

	return(
		<p>
			Clicked: {counter} times
			{' '}
			<button onCLick={increment}>+</button>
			{' '}
			<button onCLick={decrement}>-</button>
			{' '}
			<button onClick={incrementIfOdd}>Increment if Odd</button>
		</p>
	)
}