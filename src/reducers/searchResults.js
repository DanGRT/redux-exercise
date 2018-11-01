function searchResults(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_RESULTS':
            return action.results;
        default:
            return state;
    }
}

export default searchResults
