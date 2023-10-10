import SearchResult from "@/app/types/SearchResult";
import classes from "./SearchResult.module.css";
import City from "../City/City";

interface Props {
  results: SearchResult[];
  onCitySelect: (city: SearchResult) => void;
}

function SearchResults({ results, onCitySelect }: Props) {
  return (
    <div className={classes.container}>
      <h3>Search Results: </h3>
      <ul>
        {results.map((result) => (
          <City key={result.id} result={result} onClick={onCitySelect} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
