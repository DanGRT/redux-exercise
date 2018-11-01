import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput'
import { setSearchInput, setSearchCategory, performSearch } from '../actions';

function mapStateToProps(state) {
    return {
        searchInput: state.searchInput,
        searchCategory: state.searchCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSearchInput: (searchInput) => {
            dispatch(setSearchInput(searchInput))
        },
        setSearchCategory: (searchCategory) => {
            dispatch(setSearchCategory(searchCategory))
        },
        performSearch: (searchInput) => {
            dispatch(performSearch(searchInput))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
