import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import './compare-cities.scss';

const FinalCompareCities = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchJobs = async (city) => {
        let totalJobs = 0;
        let page = 1;
        while (totalJobs < 100) {
            const url = `https://jsearch.p.rapidapi.com/search?query=${jobTitle}%20in%20${city}&page=${page}&num_pages=1`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
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
        setIsLoading(true);
        const city1Count = await fetchJobs(city1);
        const city2Count = await fetchJobs(city2);
        setData([
            { city: city1, jobs: city1Count },
            { city: city2, jobs: city2Count },
        ]);
        setIsLoading(false);
    };

    return (
        <div className="compare-popularity">
            <input type="text" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)} className="input" />
            <div className="cities">
                <input type="text" placeholder="City 1" onChange={(e) => setCity1(e.target.value)} className="input" />
                <input type="text" placeholder="City 2" onChange={(e) => setCity2(e.target.value)} className="input" />
            </div>
            <button onClick={handleClick}>Compare Cities</button>

            {isLoading ? (
                <div>
                    <h3>Please be patient it will take up to 45 seconds but we assure you the best results</h3>
                    <br/>
                    {/*<img src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" alt="Loading" style={{width :"400px",height :"100px"}}/>*/}
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif" style={{width:"300px",height:"200px",marginLeft:"40%"}} />
                    </div>
            ) : (
                <div className="bar" style={{marginTop:"2%"}}>
                <BarChart width={600} height={300} data={data}  >
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="jobs" fill="#8884d8" barSize={30} />
                </BarChart>
                </div>
            )}
        </div>
    );
};

export default FinalCompareCities;
