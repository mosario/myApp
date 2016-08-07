import React, { Component } from 'react'
import Tabs from './Tabs'
import Panel from './Tabs/Panel'
import { connect } from 'react-redux'
import { updateNotes } from '../actions/notes'

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

	componentDidMount(){
		this.setState({
			progress: this.props.state.fetching,
			data: this.props.state.data
		})
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			data: nextProps.state.data
		});
	}

	handleChange(index, e){
		const { dispatch } = this.props

		let data = this.state.data
		data[index].text = e.target.value

		this.setState({data: data})
		dispatch(updateNotes(e.target.value, data[index].id))
	}

	_renderTextarea(){
		const { progress, data } = this.state

		return Object.keys(data).map((child, index) => {
				return (
					<Panel label={data[index].id} key={index}>
						<textarea rows={10} cols={30}
							disabled={progress == true ? 'disabled' : ''}
							value={progress == true ? this.state.loading : data[index].text}
							onChange={(e) => this.handleChange(index, e)} />
					</Panel>
				);
		});
	}
	render(){
		const { progress } = this.state
		
		if(progress == true){
			return(
				<div>loading...</div>
			);
		} else {
			return(
				<div>
					<Tabs>
						{this._renderTextarea()}
					</Tabs>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, dispatch) => {
  return {
    state: state.notes,
    dispatch: dispatch
  }
}

export default connect(mapStateToProps)(Notes)