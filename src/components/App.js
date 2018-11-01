import React from 'react';
import SearchInputContainer from '../containers/SearchInputContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>Star Wars Search</h1>
        <SearchInputContainer />
        <SearchResultsContainer />
      </main>
    )
  }
}

export default App;
