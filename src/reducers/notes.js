const initialState = {
	text: '',
	fetching: {
		select: false
	}
}

const notes = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_URL_REQUEST':
			return {
				text: action.text
			}

		case 'LOADING_DB':
			return {
				text: '',
				fetching: {
					select: true
				}
			}
		case 'VIEW_TEXT':
			return {
				text: action.text,
				fetching: {
					select: false
				}
			}
		default: 
			return state
	}
}

export default notes