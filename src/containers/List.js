import { connect } from 'react-redux'
import BookmarkList from '../components/BookmarkList'

const mapStateToProps = (state) => {
  return {
    state: state.bookmarks
  }
}

const List = connect(
  mapStateToProps
)(BookmarkList)

export default List