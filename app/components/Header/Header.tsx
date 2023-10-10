"use client";

import classes from "./Header.module.css";
import CitySearch from "../CitySearch/CitySearch";
import { useState } from "react";
import SearchResult from "../../types/SearchResult";
import SearchResults from "../SearchResults/SearchResults";

interface Props {
  onCitySelect: (result: SearchResult) => void;
}

function Header({ onCitySelect }: Props) {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  function handleSearchResults(results: SearchResult[]) {
    setSearchResults(results);
  }

  function handleCitySelect(city: SearchResult) {
    onCitySelect(city);
    setSearchResults(null);
  }

  return (
    <>
      <header className={classes.container}>
        <img src="/assets/images/icons8-sun.svg" alt="test" />
        <CitySearch onSearch={handleSearchResults} />
      </header>
      {searchResults && (
        <SearchResults
          results={searchResults}
          onCitySelect={handleCitySelect}
        />
      )}
    </>
  );
}

export default Header;
