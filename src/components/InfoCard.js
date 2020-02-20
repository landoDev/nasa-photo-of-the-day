import React from "react"
import styled from "styled-components";

const InfoContainer = styled.div`
    h2{
        font-size: 3rem;
        font-family: 'Share Tech Mono', monospace;
        text-decoration: underline;
        color: white;
    }
    p{
        font-size: 1.5rem;
        font-family: 'Share Tech Mono', monospace;
        color: white;
        padding: 0 5% 5% 5%;
    }
`;

export default function InfoCard(props){
    return(
        <InfoContainer>
            <h2 className="title">{props.title}</h2>
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
        </InfoContainer>
    )
}