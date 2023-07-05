import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const FinalCompareCities = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [data, setData] = useState([]);

    const fetchJobs = async (city) => {
        let totalJobs = 0;
        let page = 1;
        while (totalJobs < 100) {
            const url = `https://jsearch.p.rapidapi.com/search?query=${jobTitle}%20in%20${city}&page=${page}&num_pages=1`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                totalJobs += result.data.length;
                page += 1;
                // Break the loop if no more jobs are found in the current page
                if (result.data.length === 0) break;
            } catch (error) {
                console.error(error);
                break;
            }
        }
        // Return the number of jobs fetched, capped at 100
        return Math.min(totalJobs, 100);
    };

    const handleClick = async () => {
        const city1Count = await fetchJobs(city1);
        const city2Count = await fetchJobs(city2);
        setData([
            { city: city1, jobs: city1Count },
            { city: city2, jobs: city2Count }
        ]);
    };

    return (
        <div>
            <input type="text" placeholder="Job Title" onChange={e => setJobTitle(e.target.value)} />
            <input type="text" placeholder="City 1" onChange={e => setCity1(e.target.value)} />
            <input type="text" placeholder="City 2" onChange={e => setCity2(e.target.value)} />
            <button onClick={handleClick}>Fetch Data</button>

            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="city" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar dataKey="jobs" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default FinalCompareCities;
