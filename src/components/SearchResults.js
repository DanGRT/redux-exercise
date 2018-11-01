import React from 'react';

function SearchResults({ results }) {
    return (
        <ul>
            {results.map(result => (
                <li key={result.name}>{result.name}</li>
            ))}
        </ul>
    )
}

export default SearchResults
