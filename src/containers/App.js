import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return <div>
      <ul>
        <li><Link to='/bookmarks'>Закладки</Link></li>
        <li><Link to='/notes'>Заметки</Link></li>			
      </ul>
      {this.props.children}
    </div>
  }
}