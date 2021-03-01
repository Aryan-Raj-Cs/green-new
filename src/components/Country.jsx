import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import "../css/country.css";
function Country() {
  const history = useHistory();
  const { name } = useParams();
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if (count < 2)
      fetch("https://restcountries.eu/rest/v2/name/" + name).then((result) =>
        result.json().then((value) => {
          if (value.status === 404) {
            console.log(value, "status");
            M.toast({
              html: "Country Not Found!",
              classes: "#d32f2f red darken-2",
            });
            history.push("/");
          } else {
            setData([...value]);
            setCount(count + 1);
            // console.log(data);
          }
        })
      );
  }, [count, history, name]);
  return (
    <>
      {data.map((values) => {
        return (
          <div class="parent">
            <div class="child">
              <div class="card">
                <div class="card-image">
                  <img src={values.flag} alt="img not found" />
                </div>
                <div class="card-content">
                  <h4>{values.name}</h4>
                  <p>Capital: {values.capital}</p>
                  <p>Population : {values.population}</p>
                  <p>Region :{values.region}</p>
                  <p>LatLng :{values.latlng[0] + "-" + values.latlng[1]}</p>
                </div>
                <div class="card-action">
                  <Link to={"/weather/" + values.capital}>
                    Capital Wheather
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Country;
