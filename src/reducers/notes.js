const initialState = {
	data: [],
	fetching: {
		select: false
	}
}

const notes = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_URL_REQUEST':
			return {
				data: state.data
			}

		case 'ADD_NOTE':
			return {
				data: [
					...state.data, {
						id: action.id,
						text: action.text
					}
				]
			}

		case 'LOADING_DB':
			return {
				data: [ ...state.data],
				fetching: {
					select: true
				}
			}

		case 'VIEW_TEXT':
			return {
				data: [
					...state.data, {
						id: action.id,
						text: action.text
					}
				],
				fetching: {
					select: false
				}
			}

		case 'RELOAD_STATE':
			return {
				data: action.newState,
				fetching: {
					select: false
				}
			}

		default: 
			return state
	}
}

export default notes