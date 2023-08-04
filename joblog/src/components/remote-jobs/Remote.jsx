import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import "./remote.scss"

const RemoteJobsVisualization = () => {
    const [remoteJobs, setRemoteJobs] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch("https://remotive.io/api/remote-jobs")
            .then((response) => response.json())
            .then((data) => {
                setRemoteJobs(data.jobs);
            })
            .catch((error) => {
                console.error("Error fetching remote jobs:", error);
            });
    }, []);

    // Data transformation for visualization
    const jobCategories = remoteJobs.reduce((categories, job) => {
        const category = job.category;
        categories[category] = (categories[category] || 0) + 1;
        return categories;
    }, {});

    const data = [
        {
            x: Object.keys(jobCategories),
            y: Object.values(jobCategories),
            type: "bar",
        },
    ];

    return (
        <div className="r-popularity">
            <h2>Remote Jobs By Popularity</h2>
            <div className="rpop-small">The graph below is interactive, feel free to play around with zooming in,zooming out or reseting the axes to better visualise the data per your preferences.If the graphs are not showing initially ,zoom in.The interactive controls will show when you hover over the graph</div>
           <div className="pop-viz">
               <Plot
                   data={data}
                   layout={{ title: "Remote Jobs by Category", width: 600, height: 400 }}
               />
           </div>

        </div>
    );
};

export default RemoteJobsVisualization;
