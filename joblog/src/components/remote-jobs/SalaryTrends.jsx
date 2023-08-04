import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const TimeTrendsChart = () => {
    const [timeTrendsData, setTimeTrendsData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const authKey = "Vjm/pw5UqyOvO6hCnBwc/bj9WSIOWVpRTXrxiQupSC8=";
            const host = "data.usajobs.gov";
            const userAgent = "d.gondo@alustudent.com";

            const response = await fetch(
                `https://data.usajobs.gov/api/search?JobCategoryCode=2210&LocationName=Washington, DC`,
                {
                    headers: {
                        Host: host,
                        "User-Agent": userAgent,
                        "Authorization-Key": authKey,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const jobData = await response.json();
            const jobItems = jobData.SearchResult.SearchResultItems;

            // Process the jobData to extract the time trends data
            const jobPositions = {};
            jobItems.forEach((item) => {
                const positionTitle = item.MatchedObjectDescriptor.PositionTitle;
                const publicationStartDate = new Date(item.MatchedObjectDescriptor.PublicationStartDate);
                const publicationEndDate = new Date(item.MatchedObjectDescriptor.PublicationEndDate);
                const salary = item.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange; // Using MinimumRange for simplicity

                if (!jobPositions[positionTitle]) {
                    jobPositions[positionTitle] = {
                        x: [publicationStartDate, publicationEndDate],
                        y: [salary],
                        type: "scatter",
                        mode: "lines+markers",
                        name: positionTitle,
                    };
                } else {
                    jobPositions[positionTitle].x.push(publicationStartDate, publicationEndDate);
                    jobPositions[positionTitle].y.push(salary);
                }
            });

            const timeTrendsData = Object.values(jobPositions);
            setTimeTrendsData(timeTrendsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="trends-container">
            <h1>Time Trends of IT Openings Salary Variation in the US</h1>
            {timeTrendsData ? (

                <Plot
                    data={timeTrendsData}
                    layout={{
                        title: "Job Openings Time Trends",
                        xaxis: {
                            type: "date",
                            title: "Date",
                        },
                        yaxis: {
                            title: "Minimum Salary",
                        },
                    }}
                    style={{ width: "100%", height: "500px" }}
                    config={{ displayModeBar: true }}
                />

            ) : (
                <div>
                    <div style={{fontSize:"32px",fontWeight:"bold",textAlign:"center",color:"white"}}>Getting Job Data.........</div>
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif" style={{width:"300px",height:"200px",marginLeft:"40%"}} />
                </div>
            )}
        </div>
    );
};

export default TimeTrendsChart;







