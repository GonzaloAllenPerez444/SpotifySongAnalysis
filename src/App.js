import React, { useState, SetStateAction, useEffect } from "react";
import Instructions from "./Instructions";
import {URIForm, sendData} from './URIForm';
import GetAPIData from "./getAPIData";
import Results from "./pages/results"
import { useNavigate, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './header';
import results from './pages/results';



const App = () => {

    
  let officialData;
  
  
  return (
      <div>
          
          < Header />
      

          <Instructions />
          

          
           <URIForm id="form1"  />

         
          
          
      </div>

  )


}

export default App;