import React, { useState, SetStateAction, useEffect } from "react";
import Instructions from "./Instructions";
import {URIForm, sendData} from './URIForm';
//import GetAPIDATA and GetAPIDATAJSON
import GetAPIData from "./getAPIData";

import Results from "./pages/results"
import { useNavigate, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './header';
import results from './pages/results';
import ErrorPage from './pages/ErrorPage';


const App = () => {

    
  let officialData;
  //note that before we were calling formchange for state reasons, so if somthing doesn't work out refer back to it.
  
  return (
      <div>
          
          < Header />
      

          <Instructions />
          

          
           <URIForm id="form1"  />

         
          
          
      </div>

  )


}

export default App;