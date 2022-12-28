import React, { useState, SetStateAction, useEffect } from "react";
import Instructions from "./Instructions";
import {URIFORM, sendData} from './URIForm';
//import GetAPIDATA and GetAPIDATAJSON
import GetAPIData from "./getAPIData";

import Results from "./pages/results"
import { useNavigate, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import results from './pages/results';
import ErrorPage from './pages/ErrorPage';


const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      This was made from Scratch? Also hello world! WE'RE CLIMBING BABAY!3
      <button onClick={increment}>Increment</button>
      {counter}
    </div>
  );
};

export default App;