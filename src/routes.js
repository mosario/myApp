import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './components/Home'
import Bookmark from './components/Bookmark'
import Note from './containers/Notes'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/bookmarks' component={Bookmark} />
      <Route path='/notes' component={Note} />
    </Route>
    <Route path='*' component={App} />
  </div>
)