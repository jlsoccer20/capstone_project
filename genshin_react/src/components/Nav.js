import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="d-flex align-items-center">
            <ul className="nav my-4">
                <li className="nav-item">
                    <Link to='/characters' className="nav-link">Characters</Link>
                </li>
                <li className="nav-item">
                    <Link to='/collection' className="nav-link">Collection</Link>
                </li>
            </ul>
            
                <div className="d-flex flex-grow-1 justify-content-end">
                    <Link to='/characters/add' className="btn btn-primary">Add Character</Link>
                </div>
        </div>
    );
}

export default Nav;