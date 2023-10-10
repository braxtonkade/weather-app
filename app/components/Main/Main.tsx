import SearchResult from "@/app/types/SearchResult";
import Day from "../Day/Day";
import { useEffect, useState } from "react";
import classes from "./Main.module.css";
import DayWeatherData from "@/app/types/DayWeatherData";

interface Props {
  city: SearchResult | null;
}

function Main({ city }: Props) {
  const [sevenDay, setSevenDay] = useState<DayWeatherData[]>();

  useEffect(() => {
    async function fetchWeatherData(lat: string, long: string) {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`
      );

      const data = await response.json();
      const dailyData = data.daily;
      const dailyWeatherDetails = [];

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      for (let i = 0; i < dailyData.time.length; i++) {
        const date = new Date(dailyData.time[i] + "T00:00:00Z");
        let day = {
          date: `${days[date.getUTCDay()]}, ${date.getUTCDate()} ${
            months[date.getUTCMonth()]
          } ${date.getUTCFullYear()}`,
          high: Math.round(dailyData.temperature_2m_max[i]),
          low: Math.round(dailyData.temperature_2m_min[i]),
          weatherCode: dailyData.weathercode[i],
        };
        dailyWeatherDetails.push(day);
      }
      setSevenDay(dailyWeatherDetails);
    }

    if (city) {
      fetchWeatherData(city.lat, city.long);
    }
  }, [city]);

  return (
    <div className={classes.container}>
      <ul>
        {sevenDay &&
          sevenDay.map((day) => <Day key={day.date} dailyData={day} />)}
      </ul>
    </div>
  );
}

export default Main;
