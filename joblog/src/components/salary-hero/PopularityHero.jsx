import Navbar from "../navbar/Navbar";
import "./navhero.scss"
import FinalCompareCities from "../compare-cities/FinalCompareCities";


export default function PopularityHero(){
    return(

        <div className="salary-hero" >
            <Navbar/>
            <div className="center">
                <div className="center-title">Considering moving to a new city?</div>
                <div className="center-sm">Want to know which cities cariees the most career potential for your career grow?Compare the popuplarity of your job in the cities you are considering moving to</div>
                <FinalCompareCities/>

            </div>
        </div>


    )
}