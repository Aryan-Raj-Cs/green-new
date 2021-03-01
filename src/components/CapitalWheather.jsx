import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/country.css";
function Country() {
  const { capital } = useParams();
  const [data, setData] = React.useState();
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if (count < 2)
      fetch(
        `http://api.weatherstack.com/current?access_key=972cf62dea853934306aba2b30bed895&query=` +
          capital
      ).then((result) =>
        result.json().then((dat) => {
          setData(dat);
          setCount(count + 1);
        })
      );
  }, [count, capital]);
  return (
    <>
      {data && (
        <div class="parent">
          <div class="child">
            <div class="card">
              <div class="card-image">
                <img src={data.current.weather_icons} alt="img not found" />
              </div>
              <div class="card-content">
                <h4>{capital}</h4>
                <p>Temprature: {data.current.temperature} degree celcuis</p>
                <p>Wind Speed :{data.current.wind_speed} km/h </p>
                <p>Precip :{data.current.precip}</p>
                <p>Humidity :{data.current.humidity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Country;
