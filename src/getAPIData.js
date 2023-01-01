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

    console.log("in GETAPIDATA" + input.d2);
    /*
    useEffect( ()=>
    {
        fetch(`/api?URI=${input.d2}`).then(
            response => response.json()
        ).then(response => {setBackendData(response); })

    }, []) */


        // (<p> song's stats: {full.map((key) => {return <li>{key} : {backendData[key]}</li>})} </p> )} </div>


    //make this asynhronous
    let result;
    let [resultString,setResultString]  = useState("Nothing yet");
    
    async function f1(){
    result = await axios.get(`/api?URI=${input.d2}`)//.then(res => res.json()).then(console.log("in normal GetDataAPI, backend data is " + res))
    //resultString = JSON.stringify(result);

    //resultString = JSON.stringify(result);
    setResultString(JSON.stringify(result));
    console.log("attempt " + resultString);

}

    f1();


   
    //console.log(result);
        /*
    async function Fetch2()
    {
        result = axios.get(`/sample?URI=${input.d2}`).then(response=> response.json());
        resultString = JSON.stringify(result)
    } */


    
    return (

        <div> 
            
            {(result === 'undefined')?
            
            (<p>loading</p>) :
            (<h2>Song stats:{resultString}</h2>)} </div>
        
            
           
    )


}





export default GetAPIData;
