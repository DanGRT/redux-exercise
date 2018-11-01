function searchResults(state = [], action){
  switch(action.type){
    case 'RECEIVE_RESULTS':
      return action.searchResults
    default:
      return state
  }
}

export default searchResults
