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
    
    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`);
    
    setResultString(JSON.stringify(result.data));
    

}

    f1();

    if (resultString != "Nothing yet" && resultString != "Error")
        {
            let dataArray = JSON.parse(resultString);
    console.log("dataArray is " + dataArray)
        };

        
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

            (<h2>Song stats:{resultString}</h2>))} 
              


              </div>
        
            
           
    )


}





export default GetAPIData;
