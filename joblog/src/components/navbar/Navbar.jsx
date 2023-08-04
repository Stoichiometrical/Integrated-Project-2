import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isVisHovering, setIsVisHovering] = useState(false);
    const [isDocHovering, setIsDocHovering] = useState(false);

    const handleVisMouseEnter = () => {
        setIsVisHovering(true);
    };

    const handleVisMouseLeave = () => {
        setIsVisHovering(false);
    };

    const handleDocMouseEnter = () => {
        setIsDocHovering(true);
    };

    const handleDocMouseLeave = () => {
        setIsDocHovering(false);
    };

    return (
        <div className="navbar">
            <div className="nav-item">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    Home
                </Link>
            </div>
            <div
                className="nav-item"
                onMouseEnter={handleVisMouseEnter}
                onMouseLeave={handleVisMouseLeave}
            >
                <Link to="/popularity" style={{ textDecoration: "none", color: "white" }}>
                    Visualisations
                </Link>
                {isVisHovering && (
                    <div className="vis">
                        <Link to="/popularity" className="nav-hover">
                            Compare Popularity
                        </Link>
                        <Link to="/remote" className="nav-hover">
                            Remote Jobs
                        </Link>
                        <Link to="/us-tech" className="nav-hover">
                           US IT Jobs Salary Trends
                        </Link>
                    </div>
                )}
            </div>
            <div
                className="nav-item"
                onMouseEnter={handleDocMouseEnter}
                onMouseLeave={handleDocMouseLeave}
            >
                <Link to="/documentation" style={{ textDecoration: "none", color: "white" }}>
                    Documentation
                </Link>
                {isDocHovering && (
                    <div className="doc">
                        <Link to="/compare-pop-doc" className="nav-hover">
                            Compare Popularity Documentation
                        </Link>
                        <Link to="/remote-jobs-doc" className="nav-hover">
                            Remote Jobs Documentation
                        </Link>
                        <Link to="/us-tech-doc" className="nav-hover">
                            US IT Jobs Documentation
                        </Link>
                    </div>
                )}
            </div>
            <div className="nav-item">
                <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
                    Job Search
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                    About Us
                </Link>
            </div>
        </div>
    );
}
