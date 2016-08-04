import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import notes from './notes'

const rootReducer = combineReducers({
	bookmarks,
	notes
})

export default rootReducer