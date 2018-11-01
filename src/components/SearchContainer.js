import { connect } from 'react-redux'
import Search from './Search.js'
import {setSearchString, setSearchCategory, fetchData} from '../actions'

const mapStateToProps = state => {
  return {
    searchString: state.searchInput,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: searchString => dispatch(setSearchString(searchString)),
    handleCategory: category => dispatch(setSearchCategory(category)),
    submitSearch: searchString => dispatch(fetchData(searchString))

    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
