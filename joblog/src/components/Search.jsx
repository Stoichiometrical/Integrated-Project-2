import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// const JobSearchBar2 = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [location, setLocation] = useState('');
//     const [jobs, setJobs] = useState([]);
//     const [responseCount, setResponseCount] = useState(0);
//
//     const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
//
//     const handleSearch = async () => {
//         const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
//                 'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
//             },
//             body: JSON.stringify({
//                 search_terms: searchTerm,
//                 location: location,
//                 page: '1'
//             })
//         };
//
//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setJobs(result);
//             setResponseCount(result.length);  // set the number of responses
//         } catch (error) {
//             console.error(error);
//         }
//     }
//
//     // Simplify for PieChart, assuming all responses are the same
//     const data = [{ name: 'Jobs.jsx', value: responseCount }];
//
//     return (
//         <div>
//             <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search Jobs.jsx" />
//             <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
//             <button onClick={handleSearch}>Search</button>
//
//             <PieChart width={400} height={400}>
//                 <Pie
//                     dataKey="value"
//                     isAnimationActive={false}
//                     data={data}
//                     cx={200}
//                     cy={200}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     label
//                 >
//                     {data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                 </Pie>
//                 <Tooltip />
//             </PieChart>
//
//             {jobs && jobs.map((job, index) => (
//                 <div key={index}>
//                     <h2>{job.job_title}</h2>
//                     <p>{job.company_name}</p>
//                     <p>{job.job_location}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }



const JobSearchBar2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState([]);
    const [responseCount, setResponseCount] = useState(0);

    const handleSearch = async () => {
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

        setJobs(totalJobs);
        setResponseCount(totalJobs.length);
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search Jobs" />
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
            <button onClick={handleSearch}>Search</button>

            <h2>Total jobs fetched: {responseCount}</h2>

            {jobs && jobs.map((job, index) => (
                <div key={index}>
                    <h2>{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <p>{job.job_location}</p>
                </div>
            ))}
        </div>
    );
}

export default JobSearchBar2;


// export default JobSearchBar2;
