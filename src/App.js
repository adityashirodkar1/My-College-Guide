// import logo from './logo.svg';
// import './App.css';

import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import Donation from "./components/Donation";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path='/sponsors' element={<Sponsors/>} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path='/events' element={<Events/>} />
      </Routes>
      <Routes>
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
      <Routes>
        <Route path='/donation' element={<Donation/>} />
      </Routes>
    </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
