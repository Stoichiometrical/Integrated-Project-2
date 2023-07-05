import React, { useEffect, useState } from 'react';

const JobDataComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://indeed12.p.rapidapi.com/job/b762b8d1132bd276';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                    'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>{data.job_title}</h1>
                <h2>Company: {data.company.name}</h2>
                <img src={data.company.logo_url} alt={data.company.name} />
                <p>Location: {data.location}</p>
                <p>Creation Date: {data.creation_date}</p>
                <p>Description: <div dangerouslySetInnerHTML={{ __html: data.description }} /></p>
                <a href={data.indeed_final_url}>View Job</a>
            </div>
        );
    }
};

export default JobDataComponent;
