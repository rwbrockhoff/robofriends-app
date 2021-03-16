import React from "react";

const SearchBox = ({searchInput, handleInput}) => {
    return (
        <div className="tc">
        <input 
        className="pa3 ma3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search Robots..." 
        onChange={handleInput}
        value={searchInput}
        /> 
        </div>
    )
}

export default SearchBox;