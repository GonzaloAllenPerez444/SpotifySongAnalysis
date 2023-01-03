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



    console.log("result is " + result)
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
            (<h2>Song stats:{resultString}</h2>)} </div>
        
            
           
    )


}





export default GetAPIData;
