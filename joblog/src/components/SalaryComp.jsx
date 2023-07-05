import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const SalarySearch = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [data, setData] = useState([]);

    const fetchSalary = async (city) => {
        const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(city)}&radius=100`;
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
            return result.data[0].median_salary;
        } catch (error) {
            console.error(error);
            return 0;
        }
    };

    const handleClick = async () => {
        const city1Salary = await fetchSalary(city1);
        const city2Salary = await fetchSalary(city2);
        setData([
            { city: city1, salary: city1Salary },
            { city: city2, salary: city2Salary }
        ]);
    };

    return (
        <div>
            <h1 style={{textAlign:'center'}}> Which city pays the most for your dream job?</h1>
            <input type="text" placeholder="Job Title" onChange={e => setJobTitle(e.target.value)} />
            <input type="text" placeholder="City 1" onChange={e => setCity1(e.target.value)} />
            <input type="text" placeholder="City 2" onChange={e => setCity2(e.target.value)} />
            <button onClick={handleClick}>Fetch Data</button>

            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="city" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar dataKey="salary" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default SalarySearch;
