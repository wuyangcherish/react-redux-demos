import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Data from './data';
import '../css/index.css';


export default class Tab extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	getTitleClass(index){
		return index === this.props.currentIndex ? "tab-tit active" : 'tab-tit';
	}

	handleClick(index){
		this.props.selected(index)
	}

	getBoxClass(index) {
		return index === this.props.currentIndex ? 'tab-box-content active' : 'tab-box-content';
	}

	render(){	
		return(
			<div calssName="wrap">
				<div className = "tab-header">
					<ul>
					{
						Data.tabData.map(function(item,index){
							return(
								<li key={index} onClick={this.handleClick.bind(this,index)}
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















