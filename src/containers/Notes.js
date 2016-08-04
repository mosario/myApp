import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNotes } from '../actions/notes'

class Notes extends Component {
	constructor(){
		super();
		this.state = {
			progress: true,
			loading: 'Загрузка.'
		}
		
		function tick(){
			let { loading, progress } = this.state
			this.setState({
				loading: loading.length < 11 ? loading += '.' : 'Загрузка.'
			})
			if(progress == true)
				setTimeout(tick.bind(this), 2000)
		}
		setTimeout(tick.bind(this), 1000)
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			progress: nextProps.state.fetching,
			text: nextProps.state.text
		})
	}

	handleChange(e){
		const { dispatch } = this.props

		this.setState({text: e.target.value})
		dispatch(addNotes(e.target.value))
	}

	render(){
		const { progress, text } = this.state

		return(
			<div>
				<p>
					<textarea rows={10} cols={30}
						disabled={progress == true ? 'disabled' : ''}
						value={progress == true ? this.state.loading : text}
						onChange={(e) => this.handleChange(e)} />
				</p>
			</div>
		);
	}
}
const mapStateToProps = (state, dispatch) => {
  return {
    state: state.notes,
    dispatch: dispatch
  }
}

export default connect(mapStateToProps)(Notes)