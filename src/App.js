import Homescreen from "./Homescreen.js"
import "./App.css"
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";
import Services from "./Services.js"
import About from "./About.js"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
       <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
       </Routes>
      
      </div>
      
    </div>
  </Router>
  );
}

export default App;
