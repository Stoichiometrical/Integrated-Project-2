import "./doc.scss"
import DocumentationTemplate from "./Doc";

export default function ComparePopularityDoc(){
    return(
        <>
            <DocumentationTemplate
                title="Job Popularity  Comparison Documentation"
                api_name="JSearch"
                api_desc="JSearch is an API that provides job search functionality. It allows users to search for job listings based on specific criteria, such as job title and city. The API returns a list of job results that match the search criteria, including information like job title, company, location, and more.The api is available at https://rapidapi.com/jsearch"
                data_retrieve="The data is retrieved by making asynchronous requests to the JSearch API using the fetchJobs function. The fetchJobs function takes a city as a parameter and fetches job data for the specified city. It makes multiple requests to the API, iterating over the pages of results until a maximum of 100 jobs is reached or there are no more jobs available. The total number of jobs fetched for each city is then returned and stored in the component state.We used this approach because of the api limit that only returns 25 objects per query, so by trying to get only a maximum of 100 we can pass the API limit whilst also making a reasonable comparison between two cities since having more than 100 open positions at a time would mean the position is quite popular in the city and achieves the goal of our user(compare job popularity in two cities)"
                data_visualisation="The data retrieved for City 1 and City 2 is visualized using a BarChart component from the Recharts library. The BarChart component is rendered with a width of 600 and a height of 300. The data passed to the BarChart component is an array of objects, where each object represents a city and its corresponding job count. The XAxis component displays the city names, and the YAxis component represents the job count. The Tooltip component provides additional information on each bar when hovered over. The CartesianGrid component adds a grid background to the chart. Finally, the Bar component renders the bars based on the job count, with a fill color of #8884d8 and a bar size of 30."


            />

        </>
    )
}

