let initialState = {
  searchString: '',
  searchCategory: 'people'
}

function searchInput(state = initialState, action){
  switch (action.type) {
    case 'SET_SEARCH_STRING':
      return Object.assign({}, state, {searchString: action.searchString})
    case 'SET_SEARCH_CATEGORY':
      return Object.assign({}, state, {searchCategory: action.searchCategory})
    default:
      return state
  }
}



export default searchInput;
