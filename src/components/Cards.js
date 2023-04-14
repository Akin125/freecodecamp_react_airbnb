import React from "react";
import star from "../image/Star 1.png"
import "./components_css/Cards.css"

export default function Cards(props){
    let textDisplay;
    if(props.openSpot === 0){
        textDisplay = "SOLD OUT"
    }else if  (props.location === "Online") {
        textDisplay = "ONLINE"
    }
    return(
        <div className={"Card--container"}>
            {textDisplay  && <div className={"card--badge"}>
                {textDisplay}
            </div>}
            <img
            className={"main--Image"}
                src={props.img}
                alt={"pic"}
            />

            <div className={"card--stats"}>
                <img src={star} alt={"star"} className={"card-star card"}/>
                <span className={"rating card"}>{props.rating}</span>
                <span className={"reviewCount card gray"}>({props.reviewCount}) • </span>
                <span className={"location card gray"}>
                    <p>{props.location}</p>
                </span>
            </div>

            <p>
                {props.title}
            </p>

            <p>
               <span className={"bold--price"}>From ${props.price} </span> / person
            </p>

        </div>
    )
}
