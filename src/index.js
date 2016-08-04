import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'
import { loadingBookmarks } from './actions/bookmark'
import { loadingNotes } from './actions/notes'

let store = configureStore()
store.dispatch(loadingNotes())
store.dispatch(loadingBookmarks())

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)