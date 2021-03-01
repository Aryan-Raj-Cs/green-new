import React from "react";
// import "../css/search.css";
// import "../css/button.css";
import { useHistory } from "react-router-dom";
const Search = () => {
  const [country, setCountry] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    if (country) {
      history.push("/country/" + country);
    }
    e.preventDefault();
  };

  const handleUser = (e) => {
    setCountry(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <div className="input-field inline">
          <input type="text" value={country} onChange={handleUser} />
          <label> Search User</label>
          <span
            className="helper-text"
            data-error="wrong"
            data-success="right"
            style={{ color: "red" }}
          ></span>
        </div>

        <button
          className="btn  waves-light button"
          type="submit"
          name="action"
          disabled={country.length > 0 ? false : true}
        >
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default Search;
