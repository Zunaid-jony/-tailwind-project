import React from "react";
import Hero from "./componets/Hero";
import MailSection from "./componets/MailSection";
import Navbar from './componets/Navbar';
import Tuqnology from './componets/Tuqnology';

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>
      <Hero></Hero>
      <Tuqnology></Tuqnology>
      <MailSection></MailSection>
      
    </div>
  );
}

export default App;
