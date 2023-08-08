import { useState } from 'react';
import "./jsearch.scss"



const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState([]);
    const [responseCount, setResponseCount] = useState(0);
    const[loading,setLoading] = useState(false)

    const handleSearch = async () => {
        setLoading(true)
        const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
        const totalJobs = [];
        const totalPages = 4;

        for (let i = 1; i <= totalPages; i++) {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'cef447cfe7mshe41b1b3f641f232p1e8a5cjsnf61aded1cef6',
                    'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
                },
                body: JSON.stringify({
                    search_terms: searchTerm,
                    location: location,
                    page: i.toString()
                })
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result)
                totalJobs.push(...result);
            } catch (error) {
                console.error(error);
            }
        }

        setJobs(totalJobs);
        setResponseCount(totalJobs.length);
        setLoading(false)
    }

    return (
        <div className="search-container">
            <div className="s-sect">
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search Jobs" className="search-text" />
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" className="search-btn"/>
            <button onClick={handleSearch}>Search</button>
            </div>
            <h2 className="total">Total Positions Available in {location}: {responseCount}</h2>
            { loading ?
                (
                    <div>
                        <div style={{fontSize:"32px",fontWeight:"bold",textAlign:"center",color:"white"}}>Getting Jobs.........</div>
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif" style={{width:"300px",height:"200px",marginLeft:"40%"}} />
                    </div>
                ): (
                    jobs && jobs.map((job, index) => (
                        <div key={index} className="job-comp">
                            <h2>{job.job_title}</h2>
                            <p>Company : {job.company_name}</p>
                            <p>Location : {job.job_location}</p>
                            <a href={job.job_url}>Apply</a>
                            <hr/>

                        </div>
                    ))
                )
            }

        </div>
    );
}

export default Search;



