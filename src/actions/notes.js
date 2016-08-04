import axios from 'axios'

export const loadingNotes = () => {
	return (dispatch) => {

		dispatch({
			type: 'LOADING_DB'
		})		

		axios.get('/api/notes/select').then(response => {
			console.log('response', response)
			let result = response.data
			console.log('result', result)
			Object.keys(result).map(i => {
				setTimeout(() => {
					dispatch({
						type: 'VIEW_TEXT',
						id: result[i].id,
						text: result[i].text
					});
				}, 5000)
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