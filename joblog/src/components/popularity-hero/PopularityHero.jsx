import Navbar from "../navbar/Navbar";
import "./navhero.scss"
import FinalCompareCities from "../compare-cities/FinalCompareCities";
import {Link} from "react-router-dom";


export default function PopularityHero(){
    return(

        <div className="popularity-hero" >
            <Navbar/>
            <div className="center">
                <div className="center-bg">
                    <div className="center-title">Considering moving to a new city?</div>
                    <div className="center-sm">Want to know which cities cariees the most career potential for your career grow?Compare the popuplarity of your job in the cities you are considering moving to</div>

                </div>
                <FinalCompareCities/>

            </div>
            <hr />
            <div className="docu" style={{ textAlign: "center",padding:"15px",color:"saddlebrown"}}>
                To learn more about where we got this data and how the visualisations.Check out our documentation <Link to="/compare-pop-doc"  style={{ textDecoration: "none", color: "white",fontWeight:"bold"}}>
                HERE
            </Link>
            </div>
        </div>


    )
}