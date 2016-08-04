import React from 'react'
import AddBookmarks from '../containers/AddBookmarks'
import List from '../containers/List'
import Notes from '../containers/Notes'

const App = () => (
  <div>
	<Notes />
	<AddBookmarks />
    <List />
  </div>
)

export default App