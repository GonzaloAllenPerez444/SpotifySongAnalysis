import React from "react";
import { useNavigate } from "react-router-dom";
//import GetAPIData from "./getAPIData";
import Results from "./pages/results"
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import {useHistory } from 'react-router-dom';
import results from './pages/results';
import ErrorPage from './pages/ErrorPage'
//import GetAPIDataJSON from "./GetAPIDataJSON";

const initialFormData = Object.freeze({uri: "sample"});
export let input1 =" nothing yet chief ";
export let sendData = "";

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
        console.log("handlechange "+ formData.uri);
      };

    
      const HandleSubmit = (e) => {

        

            /*
            e.preventDefault()
            console.log("in handle submit" + formData.uri);
           
            
            
            //you can now use this info for the expressJS API and beyond
            async function doAPI(e) {
            let response =  GetAPIDataJSON(formData.uri);
            console.log("real shit p2: " +response)

            return Na(response);
        
            }

            doAPI(e); */
            //props.stateChanger(formData.uri);
            
            
            

      }

    return (
        <div>
            
            <form onSubmit={()=>{console.log("formdata.uri : "+ formData.uri);input1=formData.uri;console.log("input1 var " + input1);console.log("input1" + getInput()); navi("./Results",{state: {info: formData.uri}})}}>
  
                <div className="uriform">
                <label htmlFor="uri2" className="form-label">SONG URI</label>
                <input type="text" className="form-control" id="uri-input" onChange={HandleChange} name="uri" />
                </div>
  
                <button type="submit" className="submitButton">ANALYZE</button>
            </form>
        
        </div>



    )


}

export default input1;