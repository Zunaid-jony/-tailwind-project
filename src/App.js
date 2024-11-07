import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Resources from "./componets/Resources";
import Footer from "./componets/Footer";


function App() {
  return (
    <div className="App bg-white ml-auto mr-auto" style={{  minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
         
          {/* অন্যান্য রুট এখানে যুক্ত করতে পারেন */}
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

// export default App;
