import React, { Component } from 'react'
import SvgIcons from '../components/SvgIcons'
import { connect } from 'react-redux'
import { addBookMark } from '../actions/bookmark'

import '../components/Bookmark/bookmark.css'


class AddBookmarks extends Component {
  render(){
    let input
    const { dispatch } = this.props
    return (
      <div className='bookmark_form'>
        <form onSubmit={e => {
            e.preventDefault()
            if(!input.value.trim()) {
              return
            }
            dispatch(addBookMark(input.value))
            input.value = ''
          }}>
          <input placeholder='Введите ссылку' type='text' ref={node => {input = node}} />
          <button className='bookmark_form__btn-add' type='submit'>
            <SvgIcons 
              icon='add' 
              size={24} />
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(AddBookmarks)