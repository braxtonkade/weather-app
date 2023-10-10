import SearchResult from "@/app/types/SearchResult";
import classes from "./City.module.css";

interface Props {
  result: SearchResult;
  onClick: (result: SearchResult) => void;
}

function City({ result, onClick }: Props) {
  return (
    <div className={classes.city}>
      <button onClick={() => onClick(result)}>
        <span>{result.name}</span>
        <span>{result.state}</span>
      </button>
    </div>
  );
}

export default City;
