import "./styles.scss"
import Navbar from "../components/navbar/Navbar";
import Search from "../components/job-search/Search";

export default function JobSearch(){
    return(
        <div className="jsearch-cont">
            <Navbar/>
            <h1 className="j-header">Find Your Dream Job In Your Next Location</h1>
             <Search/>

        </div>
    )
}