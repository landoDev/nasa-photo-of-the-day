import React from "react"

export default function InfoCard(props){
    return(
        <div className="info-container">
            <h2 className="title">{props.title}</h2>
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
        </div>
    )
}