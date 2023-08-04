import "./services.scss"
import {Link} from "react-router-dom";

export default function Services(){


    return(


        <div className="services">
            <div className="services-header">Services</div>
            <div className="services-body">
                <Service
                    title="Salary Comparison"
                    text="Discover Your Perfect Match! Our Job Popularity Comparison Page helps you find the best city for your dream job. Input your desired position and preferred cities to uncover insights into job demand and popularity. Make informed decisions for a rewarding career and a brighter future. Start your journey now!"
                    link="/popularity"
                />

                <Service
                    title="Remote Jobs Popularity"
                    text="Unlock the world of remote work with our Remote Jobs Popularity Page! Discover the hottest industries offering remote opportunities and make a seamless transition to a location-independent career. Explore in-demand remote positions and find your perfect match, wherever you are. Embrace flexibility and embrace the future of work today!"
                    link="/remote"
                />

                <Service
                    title="Salary Trends for US IT Jobs"
                    text="Dive into the world of IT salaries with our IT Salary Variation Page! Explore the dynamic shifts in salary trends for diverse IT positions in the US, comparing data from September 2022 to 2023. Stay ahead of the curve and gain valuable insights to guide your career decisions in the fast-evolving IT landscape"
                    link="/us-tech"
                />
            </div>


        </div>
    )


}

export function Service({title,text,link}){
    return(
        <div className="service-c">
        <div className="white-bg"></div>
        <div className="service">
            <div className="s-title">{title}</div>
            <div className="s-text">{text}</div>
            <Link to={link} className="link">EXPLORE</Link>
        </div>
        </div>
    )
}