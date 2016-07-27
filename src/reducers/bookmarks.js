const initialState = {
	data: [],
	fetching: {
		select: false,
		insert: false
	}
}

const bookmarks = (state = initialState, action) => {
	switch (action.type) {
		case 'RELOAD_STATE':
			return {
				data: action.newState,
				fetching: {
					select: false,
					insert: false
				}
			}

		case 'LOADING_DB':
			return {
				data: [
					...state.data
				],
				fetching: {
					select: true
				}
			}

		case 'VIEW_BOOKMARK':
			return {
				data: [
					...state.data, {
						id: action.id,
						text: action.title,
						href: action.href
					}
				],
				fetching: {
					select: false
				}
			}

		case 'GET_URL_REQUEST':
			return {
				data: state.data,
				fetching: {
					insert: true
				}
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
				fetching: {
					insert: false
				}
			}

		default: 
			return state
	}
}

export default bookmarks