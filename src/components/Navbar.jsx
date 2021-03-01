import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper navstyle">
        <span className="brand logostyle">
          <Link to="/">Country Search</Link>
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
