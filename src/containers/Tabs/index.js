import React, { Component } from 'react'
import SvgIcons from '../../components/SvgIcons'
import { connect } from 'react-redux'
import { addNotes, deleteNotes } from '../../actions/notes'

import './tabs.css'

class Tabs extends Component {
  constructor(){
    super();
    this.state = {
      selected: 0
    }
  }

  handleClick(index, event){
    event.preventDefault();
    this.setState({selected: index});
  }

  addNote(){
    const { dispatch } = this.props
    dispatch(addNotes())
  }

  deleteTabs(id, data){
    const { dispatch } = this.props
    dispatch(deleteNotes(id, data))
  }

  _renderLi(){
    function labels(child, index){
      let activeClass = (this.state.selected == index ? 'active' : '')
      return (
        <li key={index}
          className={activeClass}
          onClick={this.handleClick.bind(this, index)}>
          <a href='#'>
            {child.props.label}
          </a>
          <span className='close'>
            <SvgIcons 
              icon='close' 
              size={18} 
              cursor='pointer'
              onClick={() => this.deleteTabs(child.props.label, this.props.children)} />
          </span>
        </li>
      )
    }
    return (
      <ul className='tabs'>
        {this.props.children.map(labels.bind(this))}
        <li className='note-add'>
          <SvgIcons 
            icon='note-add' 
            size={24} 
            cursor='pointer'
            onClick={() => this.addNote()} />
        </li>
      </ul>
    )
  }
  render(){
    return(
      <div>
        {this._renderLi()}
        {this.props.children[this.state.selected].props.children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapDispatchToProps)(Tabs)