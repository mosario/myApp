import axios from 'axios'

let nextId = 0

export const loadingDb = () => {
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
				id: nextId++,
				text: response.data,
				href: text
			})
		}).catch(error => {
			console.log('error', error);
		});
	}
}