import "./doc.scss"
import DocumentationTemplate from "./Doc";

export default function RemoteJobsDoc(){
    return(
        <>
            <DocumentationTemplate
                title=" Remote Jobs Prominence"
                api_name="Remotive API"
                api_desc="The data for this visualization is sourced from the Remotive API. The Remotive API provides information about remote job listings in various categories.The API returns a list of remote job objects, where each job object contains the following information:Job title,Job category,Job description,Company name,Company logo URL,Job publication date,Job URL"
                data_retrieve=" To access the Remotive API and fetch remote job data, the application uses the fetch API The data is fetched from the URL 'https://remotive.io/api/remote-jobs'.The data is stored in a remoteJobs state variable , which is then destructured to count the number of jobs for each category"
                data_visualisation="The interactive visualization is created using ReactJS for building the user interface and Plotly for generating the bar chart. The React component fetches data from the Remotive API using the fetch function and then transforms the data to calculate the number of remote jobs in each category. Plotly is used to create the bar chart and display the data in an interactive and visually appealing manner.Plotly provides the Plot component to which we pass two variables ie the data and any details about the layout of the graph.This will determine the way the data appears on the graph"


            />

        </>
    )
}