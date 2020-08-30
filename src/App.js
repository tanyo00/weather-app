import React from "react";
import cities from "./cities";
import Clock from "./components/Clock";
import {
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [city, setCity] = React.useState("Sofia");
  const [cityData, setCityData] = React.useState(null);
  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f29fd96247cbe48b70305b33b8d9eea4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCityData(data);
      });
  }, [city]);

  return (
    <div className="main-container">
      <InputLabel className="title">Choose a city</InputLabel>
      <Select
        labelId="label"
        className="select"
        value={city}
        placeholder="Enter a city..."
      >
        {cities.map((item, index) => {
          return (
            <MenuItem
              onClick={() => {
                setCity(`${item}`);
              }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>

      {cityData !== null ? (
        <div className="container-data">
          <Clock />
          <h1>{cityData.name}</h1>
          <h3>BG</h3>
          <h5>
            Temperature:{" "}
            <span>{(cityData.main.temp - 273.15).toFixed()} °</span>
          </h5>
          <h5>
            Feels like:{" "}
            <span>{(cityData.main.feels_like - 273.15).toFixed()} °</span>
          </h5>
          <h6>
            Status: <span>{cityData.weather[0].description}</span>
          </h6>
        </div>
      ) : (
        <CircularProgress color="primary" />
      )}
    </div>
  );
}
