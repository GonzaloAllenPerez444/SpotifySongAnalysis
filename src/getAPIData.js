
import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import Carousel from "./Carousel"

console.log("express loaded in here sucessfully");


let result = "none";
const GetAPIData = (input) => {




    const [backendData,setBackendData] = useState([{}]);



    
    
    let [resultString,setResultString]  = useState("Nothing yet");
    
    let [song, setSong] = useState("Nothing yet")
    let [artist, setArtist] = useState("Nothing yet")
    let [popularity, setPopularity] = useState("Nothing yet")

    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`);
    
    setResultString(JSON.stringify(result.data));
    
    if (resultString != "Nothing yet" && resultString != "Error")
        {
            
            let dataArray = JSON.parse(resultString);

            
            setSong( dataArray.SongName);
            console.log(dataArray.Artists);
            let aString = dataArray.Artists.join(',');
            
            setArtist(aString);
            setPopularity(dataArray.Popularity);
            
        };

}

    f1();

    


    console.log("resultString is " + resultString.substring(1,6))
    return (

        <div> 
            
            {(result == "none")?
            
            (
            <div className="loading">
                <h3 id="loadingText">LOADING</h3>
                <div id="spin" className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div> </div>

            ) :
            (
            (resultString.substring(1,6) == "Error")? (<h2>Something went wrong. Make sure your URI looks like "spotify:track:xxxxxxxxxx"</h2>):

            (<div>
                <h2>Song stats:{resultString}</h2> 
                <p></p>
                <h3> TITLE IS {song}</h3>
                <div id="space" ></div>
                < Carousel SongName={song} Artists={artist} popularity={popularity}/>
                </div>))} 
              


              </div>
        
            
           
    )


}





export default GetAPIData;
