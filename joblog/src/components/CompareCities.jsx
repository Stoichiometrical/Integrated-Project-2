import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CompareCities = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [data, setData] = useState([]);

    const fetchJobs = async (searchTerm, location) => {
        const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
        const totalJobs = [];
        const totalPages = 4;

        for (let i = 1; i <= totalPages; i++) {
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
                    page: i.toString()
                })
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                totalJobs.push(...result);
            } catch (error) {
                console.error(error);
            }
        }
        return totalJobs.length;
    }

    const handleSearch = async () => {
        const count1 = await fetchJobs(jobTitle, location1);
        const count2 = await fetchJobs(jobTitle, location2);
        setData([
            { location: location1, jobs: count1 },
            { location: location2, jobs: count2 }
        ]);
    }

    return (
        <div>
            <h1>Want to move to a new ciy but no sure if its the right career move?</h1>
            <h3>Compare the Career Oppotunity in your current city and the one you want to move to.You can also compare between two potential cities</h3>



            <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="Job Title" />
            <input type="text" value={location1} onChange={e => setLocation1(e.target.value)} placeholder="Location 1" />
            <input type="text" value={location2} onChange={e => setLocation2(e.target.value)} placeholder="Location 2" />
            <button onClick={handleSearch}>Search</button>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default CompareCities;
