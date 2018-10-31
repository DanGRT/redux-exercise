import { connect } from 'react-redux'
import Search from './Search.js'
import {setSearchString} from '../actions'

const mapStateToProps = state => {
  return {
    searchString: state.searchString
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: searchString => dispatch(setSearchString(searchString))
    }
}


export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Search)
