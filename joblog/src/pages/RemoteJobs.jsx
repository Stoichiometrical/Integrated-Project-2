import "./styles.scss"
import Navbar from "../components/navbar/Navbar";
import RemoteJobsVisualization from "../components/remote-jobs/Remote";
import {Link} from "react-router-dom";



export default function RemoteJobs(){

    return(
        <div className="remote-jobs">
            <Navbar/>
            <div className="remo-text">
                <h1 className="r-header">Latest trends in Remote Jobs</h1>
                <div className="r-small">As the future of work becomes more tech oriented, remote jobs have been on the rise.Check out the latest trend in Remote Jobs</div>
            </div>


            <div className="r-body">
                <RemoteJobsVisualization />
            </div>

            <div className="r-doc">
                To learn more about where we got this data and how we got it,check out the documentation  <Link to="/remote-jobs-doc" style={{ textDecoration: "none", color: "white" ,cursor:"pointer"}} >HERE</Link>

            </div>







        </div>
    )



}