import axios from 'axios'

export const loadingNotes = () => {
	return (dispatch) => {

		dispatch({
			type: 'LOADING_DB'
		})		

		axios.get('/api/notes/select').then(response => {
			console.log('response', response)
			let result = response.data
			Object.keys(result).map(i => {				
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

export const addNotes = (text) => {
	return (dispatch) => {

		dispatch({
			type: 'GET_URL_REQUEST',
			text: text
		})

		axios.get('/api/notes/update', {
			params: {
				text: text
			}
		}).then(response => {
			console.log('response', response)
		}).catch(error => {
			console.log('error', error);
		});
	}
}