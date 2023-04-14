import React from "react";
import heroImage from "../image/Group 77.png"
import "./components_css/Hero.css"

export default function Hero(){
    return(
        <div className= {"Hero--component"}>

            <div className={"img-container"}>
                <img
                    className="Hero--img"
                    src={heroImage}
                    alt="heroImage"
                />
            </div>


            <h1 className={"Hero--h1"}>Online Experiences</h1>
            <p className={"Hero--p"}>Join unique interactive activities led by one-of-
                a-kind hosts—all without leaving home.
            </p>
        </div>

    )
}