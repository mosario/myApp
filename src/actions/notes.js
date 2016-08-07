import axios from 'axios'

export const loadingNotes = () => {
	return (dispatch) => {

		dispatch({
			type: 'LOADING_DB'
		})		

		axios.get('/api/notes/select').then(response => {
			let result = response.data
			Object.keys(result).map(i => {
				console.log('RESULT', result[i])
				dispatch({
					type: 'VIEW_TEXT',
					id: result[i].id,
					text: result[i].text
				});
			});
		}).catch(error => {
			console.log('error', error)
		});
	}
}

export const addNotes = () => {
	return (dispatch) => {

		dispatch({
			type: 'GET_URL_REQUEST'
		})

		axios.get('/api/notes/add').then(response => {
			dispatch({
				type: 'ADD_NOTE',
				id: response.data[0].id,
				text: ''
			})
		}).catch(error => {
			console.log('error', error);
		});
	}
}

export const deleteNotes = (id) => {
	return (dispatch) => {
		axios.get('/api/notes/delete', {
			params: {
				id: id
			}
		}).then(() => {
			axios.get('/api/notes/select').then(response => {
				let result = response.data
				let state = []
				Object.keys(result).map(i => state.push(result[i]));
				dispatch({
						type: 'RELOAD_STATE',
						newState: state
				});
			}).catch(error => {
				console.log('error', error)
			});
		}).catch(error => {
			console.log('error', error);
		});
	}
}

export const updateNotes = (text, id) => {
	return (dispatch) => {

		dispatch({
			type: 'GET_URL_REQUEST',
			text: text
		})

		axios.get('/api/notes/update', {
			params: {
				id: id,
				text: text
			}
		}).then(response => {
			console.log('response', response)
		}).catch(error => {
			console.log('error', error);
		});
	}
}