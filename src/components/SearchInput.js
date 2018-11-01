import React from 'react';

const options = ['people', 'vehicles', 'starships', 'films', 'species', 'planets']

function SearchInput({ searchInput, searchCategory, setSearchInput, setSearchCategory, performSearch }) {
    function handleInputChange(event) {
        setSearchInput(event.target.value);
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            performSearch()
        }}>
            <label>
                Search query:
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Search category:
                <select value={searchCategory} onChange={(event) => {
                    setSearchCategory(event.target.value);
                }}>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </label>
        </form>
    )
}

export default SearchInput;
