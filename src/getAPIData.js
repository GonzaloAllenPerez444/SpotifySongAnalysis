//import express from "express";
//import { response } from "express";
//import { response } from "express";
import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
///const express = require('express');
console.log("express loaded in here sucessfully");


const GetAPIData = (input) => {




    const [backendData,setBackendData] = useState([{}]);



    
    let result;
    let [resultString,setResultString]  = useState("Nothing yet");
    
    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`);
    
    setResultString(JSON.stringify(result.data));
    

}

    f1();



    
    return (

        <div> 
            
            {(result === 'undefined')?
            
            (<p>loading</p>) :
            (<h2>Song stats:{resultString}</h2>)} </div>
        
            
           
    )


}





export default GetAPIData;
