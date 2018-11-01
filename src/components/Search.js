import React from 'react'

function Search({handleCategory, handleChange, searchString, setSearchString, submitSearch, searchResults}){

  function handleSubmit(event, searchString){
    event.preventDefault()
    submitSearch(searchString)
  }

  function handleCategoryChange(event){
    handleCategory(event.target.value)

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>



    <input type="text" value={searchString.searchString} onChange={event => handleChange(event.target.value)}/>
    <h3>{searchString.searchString}</h3>
    <button type="submit">submit</button>
    <select onChange={handleCategoryChange}>
      <option value="people">people</option>
      <option value="vehicles">vehicles</option>
      <option value="planets">planets</option>
      <option value="films">films</option>
      <option value="species">species</option>
      <option value="starships">starships</option>
  </select>
    </form>
    <ul>
    {searchResults.map(result => {
      return <li>{result.name || result.title}</li>
    })}
    </ul>
    </div>
  )
}

export default Search
