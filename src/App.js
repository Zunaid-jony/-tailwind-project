import React from "react";
import Hero from "./componets/Hero";
import MailSection from "./componets/MailSection";
import Navbar from './componets/Navbar';
import Tuqnology from './componets/Tuqnology';
import Home from "./componets/Home";

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>
      <div className=" bg-white ml-auto mr-auto"style={{  minHeight: '100vh' }}>
      <Tuqnology></Tuqnology>
      <Home></Home>
      <br></br>
      <br></br>
      <br></br>

      </div>
      {/* <Hero></Hero> */}
     
      
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      {/* <MailSection></MailSection> */}
      
    </div>
  );
}

export default App;
