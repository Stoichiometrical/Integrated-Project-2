import "./navbar.scss"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(

        <div className="navbar">
            <div className="nav-item"><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></div>
            <div className="nav-item"><Link to="/popularity" style={{textDecoration:"none",color:"white"}}>Visualisations</Link></div>
            <div className="nav-item"><Link to="/documentation" style={{textDecoration:"none",color:"white"}}>Documentation</Link></div>
            <div className="nav-item"><Link to="/about" style={{textDecoration:"none",color:"white"}}>About Us</Link></div>

        </div>
    )
}