import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
	constructor(props) {
	super(props);
		this.state = {
			important: false,
			like: false
		}
		this.onImportant = this.onImportant.bind(this);
		this.onLike = this.onLike.bind(this);
	}

	onImportant() {
		this.setState(({important}) => ({
			important: !important
		}));
	}

	onLike() {
		this.setState(({like}) => ({
			like: !like
		}));
	}

	render() {

	const {label} = this.props;
	const {important, like} = this.state;

	let classNames = 'app-list-item d-flex justify-content-between';

	if (important) {
		classNames += ' important';
	}

	if (like) {
		classNames += ' like';
	}
		
		return (
			<div className={classNames}>
				<span 
					className="app-list-item-label"
					onClick={this.onLike}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button
						className="btn-star btn-sm"
						type="button"
						onClick={this.onImportant}>
						<i className="fa fa-star"></i>
					</button>
					<button
						className="btn-trash btn-sm"
						type="button">
						<i className="fa fa-trash"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</div>
		)
	}
}