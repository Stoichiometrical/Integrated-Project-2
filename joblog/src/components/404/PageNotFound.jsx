import {Link} from "react-router-dom";

export default function PageNotFound(){


    return(
        <>
             <Link to="/">  <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="Page Not Found" style={{ width:"100%",height:"100vh",backgroundSize:"cover"}}/></Link>
        </>
    )
}