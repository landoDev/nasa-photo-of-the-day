import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import InfoCard from "./InfoCard";
import axios from "axios";

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
    return(
        <div className="photo-card">
            <Photo url={data.url}/>
            <InfoCard title={data.title} date={data.date} explanation={data.explanation} />
        </div>

    );

}