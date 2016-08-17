import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Data from './data';
import '../css/index.css';

export default class Tab extends Component {

	componentDidMount() {
	 	console.log("hello")     
	}

	onSelected() {
		this.props.selected(index);
	}

	getTitleClass(index){
		return index === this.state.currentIndex ? "tab-tit active" : 'tab-tit';
	}

	getBoxClass(index) {
		console.log("yes")
		return index === this.state.currentIndex ? 'tab-box-content active' : 'tab-box-content';
	}

	render(){	
		return(
			<div calssName="wrap">
				<div className = "tab-header">
					<ul>
					{
						Data.tabData.map(function(item,index){
							return(
								<li key={index} onClick={this.onSelected.bind(this,index)} 
								className={this.getTitleClass(index)}>{item.tit}</li>
							)
						}, this)	
					}
					</ul>
				</div>
				<div className="tab-box">
					{
						Data.tabData.map(function(item,index){
							return(
								<div className={this.getBoxClass(index)} key={index}>{item.content}</div>
							)
						}, this)	
					}
				</div>
			</div>
		)

	}
}















