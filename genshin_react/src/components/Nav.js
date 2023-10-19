import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="d-flex align-items-center">
            <ul className="nav my-4">

                <li className="nav-item">
                    <Link to='/home' className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                </li>

                <li className="nav-item">
                    <Link to='/banner' className="nav-link">Banner</Link>
                </li>

                <li className="nav-item">
                    <Link to='/characters' className="nav-link">All Characters</Link>
                </li>

                <li className="nav-item">
                    <Link to='/collection' className="nav-link">My Collection</Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact' className="nav-link">Contact</Link>
                </li>

                {/* <li className="nav-item">
                    <Link to='/language' className="nav-link">Language</Link>
                </li> */}

            </ul>
            
                <div className="d-flex flex-grow-1 justify-content-end">
                    <Link to='/wish' className="btn btn-primary">Make a Wish!</Link>
                </div>
        </div>
    );
}

export default Nav;