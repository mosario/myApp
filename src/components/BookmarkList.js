import React, { Component, PropTypes } from 'react'
import SvgIcons from './SvgIcons'

import './Bookmark/bookmark.css'

export default class BookmarkList extends Component {
  render(){

    const { data, fetching } = this.props.state
    const { deleteClick } = this.props
    
    return (
      <div>
        <p>{fetching.insert ? 'Загрузка' : ''}</p>
        <p>{fetching.select ? 'Загружаем данные из базы' : ''}</p>
        <ul className='bookmark'>
          {Object.keys(data).map(e => 
            <li key={e}>
              <span className='favicon'>
                <img height='16' width='16' src={'https://www.google.com/s2/favicons?domain='+data[e].href} />
              </span>
              <a href={data[e].href} target='_blank'>{data[e].text}</a>
              <span className='delete'>
                <SvgIcons 
                  icon='delete' 
                  size={24} 
                  cursor='pointer'
                  onClick={() => deleteClick(data[e].id, data)} />
              </span>
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