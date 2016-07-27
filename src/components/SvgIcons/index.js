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