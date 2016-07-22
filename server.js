import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'

import path from 'path'
import express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import App from './src/components/App'
import { renderToString } from 'react-dom/server'
import { viewBookmark } from './src/actions'
import { selectRow } from './api/selectRow'

var app = express()
var port = 3000

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
	selectRow(result => {
		const store = configureStore()

		const html = renderToString(
			<Provider store={store}>
				<App />
			</Provider>
		)

		Object.keys(result).map(i => {
			console.log('map', result[i])
			store.dispatch(viewBookmark(result[i]))
		})

		const preloadedState = store.getState()
		res.send(renderFullPage(html, preloadedState))
	})
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Yo</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}



var bookmark = require('./bookmark');
app.use('/bookmark', bookmark);

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(handleRender)


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})