
import React, { useEffect } from "react";
import {getInput} from "../URIForm";
import {useLocation} from 'react-router-dom';
import GetAPIData from "../getAPIData";

function Results(props)
{
    
    let ours;
    
    //gets the form input from the previous form
    useEffect(

        ()=>{ ours=getInput().toString()}
    );
    const location = useLocation();
    
return (
    <div>
        
        
        
        <GetAPIData d2={location.state.info} />
    </div>
)


}


export default Results;
