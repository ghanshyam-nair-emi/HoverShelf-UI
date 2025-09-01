import "./SearchBar.css";

import React, { useState } from "react";

const SearchBar = ({ handleSearchInputClick }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {};

    return (
        <div className="search-bar" >
            <div className="search-bar-logo" aria-hidden="true">
                <SearchIcon />
            </div>

            <input
                type="text"
                className="search-text-input"
                placeholder="Search our data, reports, trends or ask a question"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                aria-label="Search"
                onClick={handleSearchInputClick}
            />

            <button
                type="button"
                className="search-button"
                onClick={handleSearch}
                aria-label="Go to next"
            >
                <NextIcon />
            </button>
        </div>
    );
};

// Magnifying glass
const SearchIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

// Next arrow icon
const NextIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default SearchBar;
