const initialState = {
	data: [],
	fetching: false
}

const bookmarks = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOKMARK':
			return [
				...state, {
					id: action.id,
					text: action.text,
					href: action.href
				}
			]

		case 'VIEW_BOOKMARK':
			console.log('view', state, action)
			return {
				data: [
					...state.data, {
						id: action.id,
						text: action.title,
						href: action.href
					}
				]
			}

		case 'GET_URL_REQUEST':
			return {
				data: state.data,
				fetching: true
			}

		case 'GET_URL_SUCCESS':
			return {
				data: [
					...state.data, {
						id: action.id,
						text: action.text,
						href: action.href
					}
				],
				fetching: false
			}

		default: 
			return state
	}
}

export default bookmarks