import * as React from 'react';
import img from "./img.jpeg"
import "./teamcard.scss"

export default function TeamCard({img,name,desc}) {
    return (
        <div className="card" >
            <div className="image-container">
                <img src={img} alt="Card Image"  className="img" />
            </div>
            <div className="text-container">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>


);
}
