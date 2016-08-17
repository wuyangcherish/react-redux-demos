import React, {Component} from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

import './css/index.css';

{/* constants */}
const BACKTOTOP = 'BACKTOTOP';

{/* actions */}

function backCreator(){
	return{
		type:'BACKTOTOP',
	}
}

{/* reducers */}
function toTop(state,action) {
	switch(action.type) {
		case "BACKTOTOP":
			return window.scrollTo(0,0)
		default:
			return state;
	}
}

{/* store */}

let store = createStore(toTop);

{/* container */}


class BackToTop extends Component {


	render() {
		return(
			<div clasName="wrap">
				<div>我是最顶部的</div>
				<div>我是最顶部的</div>
				<div>我是最顶部的</div>
				<div>我是最顶部的</div>
				<div className="back" onClick={()=>{store.dispatch(backCreator())}}>
					<p>返回顶部</p>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<BackToTop/>, document.getElementById("root"))





















