import React, { Component, PropTypes } from 'react'

export default class BookmarkList extends Component {
  render(){
    const { data, fetching } = this.props.state
    console.log(this.props, data, fetching, typeof data)
    return (
      <div>
        <p>{fetching ? 'Загрузка' : ''}</p>
        <ul>
          {Object.keys(data).map(e => 
            <li key={e}><a href={data[e].href} target='_blank'>{data[e].text}</a></li>
          )}        
        </ul>
      </div>
    );
  }
}

BookmarkList.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  fetching: PropTypes.string.isRequired
}