import "./styles.scss"
import TimeTrendsChart from "../components/remote-jobs/SalaryTrends";
import Navbar from "../components/navbar/Navbar";
import {Link} from "react-router-dom";


export default function USTechIndustry(){
    return(

        <div className="us-tech">
            <Navbar/>
          <TimeTrendsChart/>
            <hr/>
            <div  style={{ textAlign: "center",padding:"15px",color:"saddlebrown"}}>
                To learn more about where we got this data and how the visualisations.Check out our documentation <Link to="/us-tech-doc"  style={{ textDecoration: "none", color: "white",fontWeight:"bold"}}>
                HERE
            </Link>
            </div>
        </div>
    )
}