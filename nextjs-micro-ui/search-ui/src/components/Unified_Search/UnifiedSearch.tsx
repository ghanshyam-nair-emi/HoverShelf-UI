import "./UnifiedSearch.css";

import React, { useState } from "react";
import { SavedSearch, Search } from "@mui/icons-material"

import SearchAISuggestion from "../../Data/SearchAISuggestion"
import SearchBar from "../SearchBar/Searchbar"
import SearchTips from "../SearchTips/SearchTips"
import recentSearches from "../../Data/recentSearches"

const UnifiedSearch: React.FC = () => {
  const [searchinputclick , setSearchInputClick] = useState(false);

  const handleSearchInputClick = (bool) => {
    setSearchInputClick(bool);
    console.log("Search input clicked");
  }
  return (
    <div className="unified-search">
      <div className="headermain">
        <h1>Welcome to HoverShelf</h1>
      </div>
      <p></p>
      <SearchBar handleSearchInputClick={handleSearchInputClick} />
      {searchinputclick && <div className="searchSuggestions">
        <ul>
          {SearchAISuggestion.slice(0,3).map((search, index) => (
            <ul key={index}>
              <SearchTips search={search} />
            </ul>
          ))}
        </ul>
      </div>}
    </div>
  );
}
export default UnifiedSearch;