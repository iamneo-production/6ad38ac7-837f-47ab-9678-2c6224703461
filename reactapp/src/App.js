import adminprofile from './admin-side/adminprofile';
import adminnavbar from './admin-side/adminnavbar';
import admindashboard from './admin-side/admindashboard';
import adminaddrooms from './admin-side/adminaddrooms';

import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
          
            <Router>
            
                <adminnavbar/>
                <Routes>
                    <Route exact path="/adminprofile" element={<adminprofile/>}></Route>
                    <Route exact path="/admindashboard" element={<admindashboard/>}></Route>
                    <Route exact path="/adminaddrooms" element={<adminaddrooms/>}></Route>

                </Routes>

        </Router>
    </>
  )
}

export default App;
