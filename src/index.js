import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'

let store = configureStore(window.__PRELOADED_STATE__)

console.log(window, window.__PRELOADED_STATE__)

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)