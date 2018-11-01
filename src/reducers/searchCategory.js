function searchCategory(state = 'people', action) {
    switch (action.type) {
        case 'SET_SEARCH_CATEGORY':
            return action.searchCategory;
        default:
            return state;
    }
}

export default searchCategory;
