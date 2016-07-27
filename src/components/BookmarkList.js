import React, { Component, PropTypes } from 'react'
import SvgIcons from './SvgIcons'

export default class BookmarkList extends Component {
  render(){

    const { data, fetching } = this.props.state
    const { deleteClick } = this.props
    
    return (
      <div>
        <p>{fetching.insert ? 'Загрузка' : ''}</p>
        <p>{fetching.select ? 'Загружаем данные из базы' : ''}</p>
        <ul>
          {Object.keys(data).map(e => 
            <li key={e}>
              <a href={data[e].href} target='_blank'>{data[e].text}</a>
              <SvgIcons 
                icon='delete' 
                size={24} 
                cursor='pointer'
                onClick={() => deleteClick(data[e].id, data)} />
            </li>
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