
import React, { useEffect } from "react";
import {getInput} from "../URIForm";
import {useLocation} from 'react-router-dom';
import GetAPIData from "../getAPIData";

function Results(props)
{
    
    let ours;
    
    useEffect(

        ()=>{ ours=getInput().toString();console.log("ours attempt: " +ours);}
    );
    const location = useLocation();
    console.log("supposed state ");
return (
    <div>
        <h1>on results page now.</h1>
        <h2>Input:{location.state.info}</h2>
        <h3> Putting data into API: </h3>
        <GetAPIData d2={location.state.info} />
    </div>
)


}


export default Results;
