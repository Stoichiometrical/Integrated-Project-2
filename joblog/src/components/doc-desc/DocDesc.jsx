import "./doc-desc.scss"
import {Link} from "react-router-dom";

export default function DocDesc(){

    return(
        <div className="doc-desc">
            <div className="d-head">Can you trust us ?</div>

            <div className="d-body">
                <div className="d-bg"></div>
                <div className="d-desc">
                    <div className="d-text">
                        For enhanced transparency and furthur exploration ,we have included documentation for all the data and APIs we used in this site.Check out the Documentation pages to see how the data was obtained and transformed to each appropriate visualisation
                        <p>To know more about us and our team,visit our about page and read our team bios.Dont forget to leave a message for us in our contact form</p>
                          <Link to="/about"  className="doc-link">ABOUT US</Link>
                    </div>
                </div>


            </div>


        </div>
    )


}