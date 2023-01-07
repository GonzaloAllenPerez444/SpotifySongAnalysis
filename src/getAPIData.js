
import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import Carousel from "./Carousel"




let result = "none";
const GetAPIData = (input) => {




    const [backendData,setBackendData] = useState([{}]);



    
    
    let [resultString,setResultString]  = useState("Nothing yet");
    let [song, setSong] = useState("Nothing yet")
    let [artist, setArtist] = useState("Nothing yet")
    let [popularity, setPopularity] = useState("Nothing yet")

    let [dance, setDance] = useState("Nothing yet");
    let [energy, setEnergy] = useState("Nothing yet");
    let [speech, setSpeech] = useState("Nothing yet");
    let [valence, setValence] = useState("Nothing yet");

    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`);
    
    setResultString(JSON.stringify(result.data));
    
    if (resultString != "Nothing yet" && resultString != "Error")
        {
            
            let dataArray = JSON.parse(resultString);

            
            setSong( dataArray.SongName);
            
            let aString = dataArray.Artists.join(',');
            
            setArtist(aString);
            setPopularity(dataArray.Popularity);
            setDance(dataArray.stats.danceability)
            setEnergy(dataArray.stats.energy);
            setSpeech(dataArray.stats.speechiness);
            setValence(dataArray.stats.valence);
            

            
        };

}

    f1();

    


    
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
                
                <div id="space" ></div>
                < Carousel SongName={song} Artists={artist} popularity={popularity} dance={dance} energy={energy} speech={speech} valence={valence} />
                </div>))} 
              


              </div>
        
            
           
    )


}





export default GetAPIData;
