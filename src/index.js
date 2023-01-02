import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../public/index.css';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from './pages/results';
import ErrorPage from './pages/ErrorPage';

const root = document.getElementById('root');



const Start = () => {

    return (
      
      <div>
        <Router>
        <Routes>
                  <Route path="/" element={< App />} />
                  <Route path="/Results" element={< Results />} />
                  <Route path="/*" element={< ErrorPage />} />
                  
              </Routes>
      
      </Router>
      
      </div>)
  
  }
  
  const root1 = ReactDOM.createRoot(root)
  root1.render(< Start />);

