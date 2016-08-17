import {CURRENTINDEX} from '../actions/actions';
import Tab from '../components/index';
import connect from 'react-redux';
import {bindActionCreators} from 'redux';




function mapStateToProps(state) {
	return {
		currentIndex: state.index
	}
}

functon mapDisPatchToProps(dispatch) {
	return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,mapDisPatchToProps)(Tab); 