import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import InfoCard from "./InfoCard";
import axios from "axios";
import styled from "styled-components";

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;
    margin: 0 auto;
    max-width: 50%;
    border: 5px solid black;

`;

export default function PhotoCard (){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data);
            setData(response.data)
        })
        .catch(error => {
            console.log("Houston, we have a problem: ", error)
        })
    }, [])
    if (!data) return <h3>Loading...</h3>;
    return(
        
        // <div className="photo-card">
        <CardDiv>
            <Photo url={data.url}/>
            <InfoCard title={data.title} date={data.date} explanation={data.explanation} />
        </CardDiv>
        // </div>

    );

}