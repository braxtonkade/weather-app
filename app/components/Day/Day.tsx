import DayWeatherData from "@/app/types/DayWeatherData";
import classes from "./Day.module.css";

interface Props {
  dailyData: DayWeatherData;
}

function Day({ dailyData }: Props) {
  let icon;

  switch (dailyData.weatherCode) {
    case 0:
      icon = "/assets/images/day.svg";
      break;
    case 1:
      icon = "/assets/images/cloudy-day-1.svg";
      break;
    case 2:
      icon = "/assets/images/cloudy-day-2.svg";
      break;
    case 3:
    case 45:
    case 48:
      icon = "/assets/images/cloudy.svg";
      break;
    case 51:
    case 61:
      icon = "/assets/images/rainy-4.svg";
      break;
    case 53:
    case 63:
      icon = "/assets/images/rainy-5.svg";
      break;
    case 55:
    case 65:
      icon = "/assets/images/rainy-6.svg";
      break;
    case 80:
    case 81:
    case 82:
      icon = "/assets/images/rainy-7.svg";
      break;
    case 71:
    case 73:
    case 75:
      icon = "/assets/images/snowy-5.svg";
      break;
  }

  return (
    <div className={classes.container}>
      <div>
        <h3>{dailyData.date}</h3>
        <p>High: {dailyData.high}</p>
        <p>Low: {dailyData.low}</p>
      </div>
      <img src={icon} alt={dailyData.weatherCode.toString()} />
    </div>
  );
}

export default Day;
