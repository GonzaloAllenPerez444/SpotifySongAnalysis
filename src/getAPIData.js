//import express from "express";
//import { response } from "express";
//import { response } from "express";
import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
///const express = require('express');
console.log("express loaded in here sucessfully");


let result = "none";
const GetAPIData = (input) => {




    const [backendData,setBackendData] = useState([{}]);



    
    
    let [resultString,setResultString]  = useState("Nothing yet");
    
    let [song, setSong] = useState("Nothing yet")


    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`);
    
    setResultString(JSON.stringify(result.data));
    
    if (resultString != "Nothing yet" && resultString != "Error")
        {
            
            let dataArray = JSON.parse(resultString);

            
            setSong( dataArray.SongName);
            
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
                </div>))} 
              


              </div>
        
            
           
    )


}





export default GetAPIData;
