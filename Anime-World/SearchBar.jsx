import React from "react";


const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>

                <input
                    type="text"
                    placeholder="Search your favourite anime..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default SearchBar;