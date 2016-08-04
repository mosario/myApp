import axios from 'axios'

export const deleteRow = (id, state) => {
	return (dispatch) => {

		axios.get('/api/bookmark/delete', {
			params: {
				id: id
			}
		}).then(() => {

			let newState = [];

			Object.keys(state)
				.filter(i => (state[i].id != id))
				.map(e => (newState.push(state[e])))

			dispatch({
				type: 'RELOAD_STATE',
				newState: newState
			});

		}).catch(error => {
			console.log('error', error);
		});
	}
}

export const loadingBookmarks = () => {
	return (dispatch) => {

		dispatch({
			type: 'LOADING_DB'
		})		

		axios.get('/api/bookmark/select').then(response => {
			let result = response.data
			Object.keys(result).map(i => {				
				dispatch({
					type: 'VIEW_BOOKMARK',
					id: result[i].id,
					title: result[i].title,
					href: result[i].url
				});
			});		
		}).catch(error => {
			console.log('error', error)
		});
	}
}

export const viewBookmark = (obj) => {
	return {
		type: 'VIEW_BOOKMARK',
		id: obj.id,
		title: obj.title,
		href: obj.url
	}
}


export const addBookMark = (text) => {
	return (dispatch) => {

		dispatch({
			type: 'GET_URL_REQUEST'
		})

		axios.get('/api/bookmark/insert', {
			params: {
				url: text
			}
		}).then(response => {
			dispatch({
				type: 'GET_URL_SUCCESS',
				id: response.data.id,
				text: response.data.title,
				href: text
			})
		}).catch(error => {
			console.log('error', error);
		});
	}
}