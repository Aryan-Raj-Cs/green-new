import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Country from "./components/Country";
import CapitalWheather from "./components/CapitalWheather";

function Appcontainer() {
  return (
    <Router>
      <Route path={"/"} component={Navbar}></Route>
      <Switch>
        <Route exact path={"/"} component={Search}></Route>
        <Route exact path={"/country/:name"} component={Country}></Route>
        <Route
          exact
          path={"/weather/:capital"}
          component={CapitalWheather}
        ></Route>
      </Switch>
    </Router>
  );
}

export default Appcontainer;
