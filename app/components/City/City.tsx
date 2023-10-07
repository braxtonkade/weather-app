import SearchResult from "@/app/types/SearchResult";
import classes from "./City.module.css";

interface Props {
  result: SearchResult;
}

function City({ result }: Props) {
  return (
    <div className={classes.city}>
      <button>
        <span>{result.state}</span>
        <span>{result.name}</span>
        {/* <span>{result.}</span> */}
      </button>
    </div>
  );
}

export default City;
