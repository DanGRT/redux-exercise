export function setSearchInput(searchInput) {
    return {
        type: 'SET_SEARCH_INPUT',
        searchInput
    }
}

export function setSearchCategory(searchCategory) {
    return {
        type: 'SET_SEARCH_CATEGORY',
        searchCategory
    }
}

export function receiveResults(results) {
    return {
        type: 'RECEIVE_RESULTS',
        results
    }
}

export function performSearch() {
    return function(dispatch, getState) {
        const { searchInput, searchCategory } = getState();
        fetch(`https://swapi.co/api/${searchCategory}/?search=${searchInput}`)
            .then(response => response.json())
            .then(result => {
                dispatch(receiveResults(result.results))
                dispatch(setSearchInput(''))
            })
    }
}
