export function setSearchString(searchString){
  return {
    type: 'SET_SEARCH_STRING',
    searchString
  }
}

export function receiveResults(searchResults){
  return {
    type: 'RECEIVE_RESULTS',
    searchResults: searchResults.results
  }
}

export function setSearchCategory(searchCategory){
  return {
    type: 'SET_SEARCH_CATEGORY',
    searchCategory
  }
}


export function fetchData(searchString){
  return function(dispatch, getState){
    console.log(getState().searchInput.searchCategory)
    fetch(`https://swapi.co/api/${getState().searchInput.searchCategory}/?search=${getState().searchInput.searchString}`)
    .then(response => response.json())
    .then(results => {
      console.log(results)
      dispatch(receiveResults(results))
      dispatch(setSearchString(''))
    })
  }
}
