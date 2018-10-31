import React from 'react'

function Search({handleChange, searchString}){

  return (
    <form>
    <input type="text" onChange={event => handleChange(event.target.value)}/>
    <h3>{searchString}</h3>
    </form>
  )
}

export default Search
