"use client";

import classes from "./Header.module.css";
import CitySearch from "../CitySearch/CitySearch";
import { useState } from "react";
import SearchResult from "../../types/SearchResult";
import SearchResults from "../SearchResults/SearchResults";

function Header() {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  function handleSearchResults(results: SearchResult[]) {
    setSearchResults(results);
  }

  return (
    <>
      <header className={classes.container}>
        <img src="/assets/images/icons8-sun.svg" alt="test" />
        <CitySearch onSearch={handleSearchResults} />
      </header>
      {searchResults && <SearchResults results={searchResults} />}
    </>
  );
}

export default Header;
