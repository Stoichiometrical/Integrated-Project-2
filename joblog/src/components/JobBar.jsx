import React, { useState, useEffect } from 'react';

const JobSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState([]);

    // const handleSearch = async () => {
    //     const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
    //             'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    //         },
    //         body: JSON.stringify({
    //             search_terms: searchTerm,
    //             location: location,
    //             page: '1'
    //         })
    //     };
    //
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         setJobs(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const handleSearch = async () => {
        console.log("Search button clicked");  // Debug log

        const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
            },
            body: JSON.stringify({
                search_terms: searchTerm,
                location: location,
                page: '1'
            })
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(response.status);
            const result = await response.json();
            console.log("Received response", result);  // Debug log
            setJobs(result);
        } catch (error) {
            console.error("An error occurred", error);  // Debug log
        }
    }


    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search Jobs" />
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
            <button onClick={handleSearch}>Search</button>

            {jobs && jobs.map((job, index) => (
                <div key={index}>
                    <h2>{job.title}</h2>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                </div>
            ))}
        </div>
    );
}

export default JobSearchBar;
