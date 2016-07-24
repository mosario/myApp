import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'
import { loadingDb } from './actions/bookmark'

let store = configureStore()
store.dispatch(loadingDb())

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)