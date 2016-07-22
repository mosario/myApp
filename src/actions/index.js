import axios from 'axios'

let nextId = 0

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

		axios.get('/bookmark', {
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
			console.log(error);
		});
	}
}