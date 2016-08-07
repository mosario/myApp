import React, { Component } from 'react'

export default class Panel extends Component{
  render(){
    return(
      <div>{this.props.children}</div>
    );
  }
}