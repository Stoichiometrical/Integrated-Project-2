import React from 'react';
import ReactDOM from 'react-dom/client';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CityComparison from "./pages/CityComparison";
import SalaryComparison from "./pages/SalaryComparison";
import Home from "./pages/Homepage";
 import App from "./App";
 import Documentation from "./pages/Documentation";
 import AboutUs from "./pages/AboutUs";


 import ReactGA from 'react-ga'



 ReactGA.initialize('G-YW7BCY2X55');
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/salary",
        element: <SalaryComparison/>
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
    }


    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
    // <App/>
);



