
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null)
   } ,1000)

  }
 
  const toggleMode=()=>{
    if (mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","success")

    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="rgb(6 4 19)"
      showAlert("Dark Mode Enabled","success")



    }
  }
  return (
  <>
  <Router>
   <Navbar name="TextUtils" mode={mode}  changeMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container' >
   <Routes>
          <Route path="/About" element={<About />}/>
            
       
          
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>} />

          
    </Routes> 
   
   </div>
   </Router>
   </> 
    
  );
}

export default App;
