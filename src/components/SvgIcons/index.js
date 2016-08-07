import React, { Component, PropTypes } from 'react'

export default class SvgIcons extends Component {
	constructor(props){
		super(props);
	}

	_mergeStyles(...args) {
		return Object.assign({}, ...args);
	}

	renderGraphic() {
		switch (this.props.icon) {
			case 'delete':
				return (
					<g><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z'></path></g>
				);
			case 'note-add':
				return (
					<g><path d='M14 2h-8c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.89 2 1.99 2h12.01c1.1 0 2-.9 2-2v-12l-6-6zm2 14h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm-3-7v-5.5l5.5 5.5h-5.5z'></path></g>
				);
			case 'close':
				return (
					<g><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'></path></g>
				);
		}
	}

	render() {
		let styles = {
			fill: 'currentcolor',
			verticalAlign: 'middle',
			cursor: this.props.cursor,
			width: this.props.size,
			height: this.props.size
		};
		return (
			<svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet'
				style={this._mergeStyles(
					styles,
					this.props.style
				)} 
				onClick={() => {this.props.onClick()}} >
				{this.renderGraphic()}
			</svg>
		);
	}
}

SvgIcons.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	style: PropTypes.object
}