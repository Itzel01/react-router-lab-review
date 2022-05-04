import { Link } from "react-router-dom";

function Navbar (){
    return (
        <div>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About</Link>
        </div>
    )
}

export default Navbar;