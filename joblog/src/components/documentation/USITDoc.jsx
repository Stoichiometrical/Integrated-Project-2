import "./doc.scss"
import DocumentationTemplate from "./Doc";

export default function ItJobsDoc(){
    return(
        <>

            <DocumentationTemplate
                title=" US IT Jobs Salary Trends"
                api_name="USAJOBS.GOV API"
                api_desc="The USAJOBS.GOV API is the api for the official usa jobs government website.It contains data about different jobs in the USA and returns several attributes like job title, renumeration,job publication dates ,job codes and job departments.In this website we used the job search endpoint of the api to be able to retrive job data based on a job title.The api can end point is 'https://data.usajobs.gov/api/search?JobCategoryCode=2210&LocationName=Washington, DC'"
                data_retrieve="To be able to use the API, you first have to sign up to the website and recieve an api key via email.Once you have the API key , you can proceed to sending a get request to the endpoint and getting the required data.In our case we use the fetch API, along with the headers containiing API key and email address.The api returns a json format data with several objects, the object with the relevant data is called SearchItems so we extract that only and save it to our state variable.We can then select the publication dates from our state variable as well as the minimum salary range and store them in appropriate arrays.These arrays will be used to plot the graph "
                data_visualisation="To run the visualisation make sure you have react-plotlyjs installed.The arrays with dates and salaries are put into a timeseries object .The object is then passed on as a parameter to plotly's Plot function which will the display the data on the graph.Plotly comes with inbuilt interactiveness so our plot can be easily zoomed, reset or be hovered over with a tool tip."

            />
        </>
    )
}