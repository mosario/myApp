import React, { Component } from 'react'
import AddBookmarks from '../../containers/AddBookmarks'
import List from '../../containers/List'

export default class Bookmark extends Component{
  render(){
    return(
      <div>
        <AddBookmarks />
        <List />
      </div>
    );
  }
}