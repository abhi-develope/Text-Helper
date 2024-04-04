
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState ('light');
   const [alert,setalert] = useState(null)

   const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
      
    })
    setTimeout(() => {
      setalert(null);
    }, 1100);

   }


  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark')
    // console.log("dark mode clicked");
    document.body.style.backgroundColor = '#2e2f31'
    document.body.style.color = 'white'
    showAlert("Dark mode has been enabled", "success")
    
  }else{
    setMode('light')
    console.log("light mode clicked");
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert("light mode has been enabled", "success")
  }
}
  return (
    <>
    <Router>
<Navbar title="TextUtils" aboutText="About TextUtils" mode ={mode} toggleMode = {toggleMode} />
<Alert alert={alert}/>
<div className="container">
      <Routes>
        <Route  path="/about" element={<About/>}>
        
        </Route>
        <Route  path="/"
         element={<TextForm heading="Enter the text to analyse below" showAlert={showAlert}/>}>
        </Route>
      </Routes>
   
      </div>




</Router>
    </>
  );
}

export default App;






















