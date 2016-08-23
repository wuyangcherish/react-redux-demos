
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {increment, decrement} from '../action/action';


import Counter from '../component/component';

function mapStateToProps(state){
	return{
		propsValue : state
	}
}


function mapDispatchToProps(dispatch){
	return {
		onIncrement: bindActionCreators(increment, dispatch),
		onDecrement: bindActionCreators(decrement, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);