import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBookMark } from '../actions'


class AddBookmarks extends Component {
  render(){
    let input
    const { dispatch } = this.props
    return (
      <div>
      <form onSubmit={e => {
          e.preventDefault()
          if(!input.value.trim()) {
            return
          }
          dispatch(addBookMark(input.value))
          input.value = ''
        }}>
        <input ref={node => {input = node}} />
        <button type='submit'>
          Add Todo
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