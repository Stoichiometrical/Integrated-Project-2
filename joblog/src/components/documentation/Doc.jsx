import "./doc.scss"
import Navbar from "../navbar/Navbar";

export default function DocumentationTemplate({title,api_name,api_desc,data_retrieve,data_visualisation}){
    return(
        <>
            <div className="doc-container">
                <Navbar/>
                <div className="tem-title"></div>
                <div className="api-sect">
                    <div className="api-name">API : {api_name}</div>
                    <div className="desc">
                        {api_desc}
                    </div>
                </div>

                <div className="data-desc-sect">
                    <div className="data-header">How data was retrieved</div>
                    <div className="desc">
                        {data_retrieve}
                    </div>
                </div>

                <div className="data-desc-sect">
                    <div className="data-header">How data was visualised</div>
                    <div className="desc bottom">
                        {data_visualisation}
                    </div>
                </div>


            </div>
        </>
    )
}