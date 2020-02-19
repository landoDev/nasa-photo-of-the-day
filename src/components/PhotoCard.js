import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import InfoCard from "./InfoCard";
import axios from "axios";

export default function PhotoCard (){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod")
        .then(response => {
            console.log(response);
            // setData(response)
        })
        .catch(error => {
            console.log("Houston, we have a problem: ", error)
        })
    })
    // return(
    //     <Photo />
    //     <InfoCard />
    // );

}