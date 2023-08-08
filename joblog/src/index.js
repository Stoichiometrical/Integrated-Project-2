import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CityComparison from "./pages/CityComparison";
import Home from "./pages/Homepage";
 import Documentation from "./pages/Documentation";
 import AboutUs from "./pages/AboutUs";
 import ReactGA from 'react-ga'
 import RemoteJobs from "./pages/RemoteJobs";
 import RemoteJobsDoc from "./components/documentation/RemoteJobsDoc";
 import ComparePopularityDoc from "./components/documentation/ComparePopularityDoc";
 import USTechIndustry from "./pages/USTechIndustry";
 import ItJobsDoc from "./components/documentation/USITDoc";
 import JobSearch from "./pages/JobSearch";




 ReactGA.initialize('G-YW7BCY2X55');
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/popularity",
        element: <CityComparison/>
    },
    {
        path:"/documentation",
        element: <Documentation/>
    },
    {
        path:"/about",
        element: <AboutUs/>
    },
    {
        path:"/remote",
        element: <RemoteJobs/>
    },
    {
        path:"/remote-jobs-doc",
        element: <RemoteJobsDoc/>
    },
    {
        path:"/compare-pop-doc",
        element: <ComparePopularityDoc/>
    },
    {
        path:"/us-tech",
        element: <USTechIndustry/>
    },
    {
        path:"/us-tech-doc",
        element: <ItJobsDoc/>
    },
    {
        path:"/search",
        element: <JobSearch/>
    }



    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);



