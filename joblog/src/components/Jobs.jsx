import React, { useState } from 'react';

const JobAndSalaryInfo = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [numJobPosts, setNumJobPosts] = useState(null);
    const [avgSalary, setAvgSalary] = useState(null);

    const getJobPosts = async () => {
        const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
            },
            body: JSON.stringify({
                search_terms: jobTitle,
                location: location,
                page: '1'
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setNumJobPosts(result.length);
        } catch (error) {
            console.error(error);
        }
    };

    const getAverageSalary = async () => {
        const url = `https://job-salary-data.p.rapidapi.com/job-salary?job_title=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}&radius=200`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const avgSalary = (result.min_salary + result.max_salary) / 2;
            setAvgSalary(avgSalary);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearch = async () => {
        await getJobPosts();
        await getAverageSalary();
    }

    return (
        <div>
            <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="Job Title" />
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
            <button onClick={handleSearch}>Search</button>

            {numJobPosts && <p>Number of job posts: {numJobPosts}</p>}
            {avgSalary && <p>Average salary: ${avgSalary.toFixed(2)}</p>}
        </div>
    );
}

export default JobAndSalaryInfo;
