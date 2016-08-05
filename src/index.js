import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'

import configureStore from './store/configureStore'
import { loadingBookmarks } from './actions/bookmark'
import { loadingNotes } from './actions/notes'

let store = configureStore()
store.dispatch(loadingNotes())
store.dispatch(loadingBookmarks())

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
  document.getElementById('root')
)