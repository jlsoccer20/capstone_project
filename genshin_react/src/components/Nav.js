import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBar">
      <ul className="navBar">
        <img
          className="icon"
          src={process.env.PUBLIC_URL + "/primogemIcon.png"}
          alt="primogem"
        ></img>
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            <h5>Home</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <h5>About</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/characters" className="nav-link">
            <h5>Characters</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/collection" className="nav-link">
            <h5>Collection</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/wish" className="nav-link">
            <h5>Wish</h5>
          </Link>
        </li>

        {/* <li className="nav-item">
                    <Link to='/banner' className="nav-link">Banner</Link>
                </li> */}

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <h5>Contact</h5>
          </Link>
        </li>

        {/* <li className="nav-item">
                    <Link to='/language' className="nav-link">Language</Link>
                </li> */}

        <img
          className="icon"
          src={process.env.PUBLIC_URL + "/primogemIcon.png"}
          alt="primogem"
        ></img>
      </ul>
    </div>
  );
}

export default Nav;
