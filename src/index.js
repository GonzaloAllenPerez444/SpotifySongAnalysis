import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../public/index.css';
import { useNavigate, BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Results from './pages/results';


const root = document.getElementById('root');



const Start = () => {

    return (
      
      <div>
        <Router>
        <Routes>
                  <Route path="/" element={< App />} />
                  <Route path="/please" element={<h1>please</h1>} />
                  <Route path="/Results" element={< Results />} />
                  <Route path="*" element={<h1> This isn't a valid page </h1>} />
                  
        </Routes>
      
      </Router>
      
      </div>)
  
  }
  
  const root1 = ReactDOM.createRoot(root)
  root1.render(< Start />);

