import JobDataComponent from "./components/JobDataComponent";
import JobSearchBar from "./components/JobBar";
import JobSearchBar2 from "./components/Search";
import CompareCities   from "./components/CompareCities";

export default function App(){
    return(
        <>
            <h1>Want to move to a new ciy but no sure if its the right career move?</h1>
            <h3>Compare the Career Oppotunity in your current city and the one you want to move to.You can also compare between two potential cities</h3>

            {/*Comparing Jobs Between Two Cities*/}
            <CompareCities/>

            {/*<JobSearchBar2/>*/}
        </>
    )
}