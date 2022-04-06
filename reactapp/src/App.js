import React from 'react';
import "./App.css";

import Login from './component/Login';
import Signup from './component/Signup';
import {BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';


function App(){
    return  (
      <div >
        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate to="/signup" />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            
          </Routes>
        </Router>
        
      </div>
  
    );
}

    
export default App;