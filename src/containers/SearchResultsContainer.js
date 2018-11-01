import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        results: state.searchResults
    }
}

export default connect(mapStateToProps)(SearchResults)
