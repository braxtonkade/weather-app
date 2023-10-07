"use client";
import { useEffect, useState } from "react";
import classes from "./CitySearch.module.css";
import SearchResult from "@/app/types/SearchResult";

interface Props {
  onSearch: (results: SearchResult[]) => void;
}

function CitySearch({ onSearch }: Props) {
  const [city, setCity] = useState("");

  useEffect(() => {
    // async function fetchCity(city: string) {
    //   const response = await fetch(
    //     `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    //   );

    //   const data = await response.json();

    //   const searchResults = [];

    //   for (let key of data.results) {
    //     const city = {
    //       id: key.id,
    //       name: key.name,
    //       country: key.country,
    //       timezone: key.timezone,
    //     };
    //     searchResults.push(city);
    //   }

    //   onSearch(searchResults);
    // }
    async function fetchCity(city: string) {
      const response = await fetch(
        `http://api.geonames.org/searchJSON?name=${city}&name_startsWith=${city}&country=US&fuzzy=0.5&maxRows=3&username=braxtondalton`
      );

      const data = await response.json();

      console.log(data.geonames);
      const searchResults = [];

      for (let key of data.geonames) {
        const city = {
          id: key.geonameId,
          name: key.name,
          state: key.adminName1,
        };
        searchResults.push(city);
      }

      onSearch(searchResults);
    }

    if (city.length > 2) {
      fetchCity(city);
    } else {
      setCity("");
    }
  }, [city]);

  return (
    <div className={classes.search}>
      <label htmlFor="citySearch">Search for your city...</label>
      <input
        type="text"
        name="citySearch"
        id="citySearch"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default CitySearch;
