import { connect } from 'react-redux'
import BookmarkList from '../components/BookmarkList'
import { deleteRow } from '../actions/bookmark'

const mapStateToProps = (state) => {
  return {
    state: state.bookmarks
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteClick: (id, state) => {
			dispatch(deleteRow(id, state))
		}
	}
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList)

export default List