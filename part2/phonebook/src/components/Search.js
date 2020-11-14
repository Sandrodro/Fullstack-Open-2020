import React, { useState } from "react";

const Search = ({ newSearch, handleSearch }) => {
    return (
        <p>Filter shown with <input
            onChange={handleSearch}
            value={newSearch} /></p>
    )
}

export default Search;