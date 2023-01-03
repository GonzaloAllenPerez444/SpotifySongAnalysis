import React from "react";
import { useNavigate } from "react-router-dom";
import Results from "./pages/results"
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import results from './pages/results';
import ErrorPage from './pages/ErrorPage'


const initialFormData = Object.freeze({uri: "sample"});
export let input1 =" nothing yet chief ";


export function getInput()
    {return input1;}

export const URIForm = (props) => {
    
    let navi = useNavigate();
        
    const [formData, updateFormData] = React.useState(initialFormData);

    
    
    
    const HandleChange = (e) => {
        console.log("e " + e.target.name);
        updateFormData({
          formData,
    
          // Trimming any whitespace
          
          [e.target.name]: e.target.value.trim()
        });
        
      };

    

    return (
        <div id="formDiv">
            
            <form id="form1" onSubmit={()=>{input1=formData.uri; navi("./Results",{state: {info: formData.uri}})}}>
  
                <div className="uriform">
                <label htmlFor="uri2" className="form-label">SONG URI</label>
                <input type="text" className="form-control" id="uri-input" onChange={HandleChange} name="uri" />
                
                

                <button type="submit" className="submitButton">
                    <h3 id="submission" >ANALYZE</h3>
                </button>
                </div>
            </form>
        
        </div>



    )


}

export default input1;