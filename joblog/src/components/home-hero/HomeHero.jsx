// import "./home-hero.scss"
// import Navbar from "../navbar/Navbar";
//
// import {Link} from "react-router-dom";
//
//
// export default function HomeHero(){
//
//
//
//     return(
//         <>
//             <div className="home-hero" >
//                 <Navbar/>
//                 <div className="main">
//                     <div className="home-title">JobSpace</div>
//                     <div className="home-subtitle">A data-driven approach to career transition</div>
//                 </div>
//                 <div className="home-explore"><Link to="/popularity" style={{textDecoration:"none",color:"white"}}>Explore Our Services</Link></div>
//
//             </div>
//         </>
//     )
// }
//
//


import "./home-hero.scss";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default function HomeHero() {
    useEffect(() => {
        ReactGA.initialize("G-YW7BCY2X55");
    }, []);

    const handleExploreClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Explore Our Services",
        });
    };

    return (
        <>
            <div className="home-hero">
                <Navbar />
                <div className="main">
                    <div className="home-title">JobSpace</div>
                    <div className="home-subtitle">
                        A data-driven approach to career transition
                    </div>
                </div>
                <div className="home-explore">
                    <Link
                        to="/popularity"
                        style={{ textDecoration: "none", color: "white" }}
                        onClick={handleExploreClick}
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </>
    );
}

