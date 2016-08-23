
import Tab from '../components/tabApp';
import * as actions from '../actions/actions';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
	console.log("当前的state是：",state);

	return{
		currentIndex: state
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Tab)