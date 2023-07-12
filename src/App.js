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
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import EventRegister from "./components/EventRegister";
import Committee from "./components/Committee";
import Description from "./components/Description";

function App() {

  const paths = ['/', '/contact', '/events', 'eveReg'];
  const location = useLocation();
  const path = location.pathname;

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
      <Routes>
        <Route path='/' element = {paths.includes(path) ? <Navbar /> : null}>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/eveReg' element={<EventRegister/>} />
          <Route path='/committee' element={<Committee/>} />
          <Route path='/committee/desc' element={<Description/>} />
          <Route path='/committee/sponsor' element={<Sponsors/>} />
          <Route path='/committee/donation' element={<Donation/>} />
          <Route path='/committee/schedule' element={<Schedule/>} />
        </Route>
      </Routes>
      {paths.includes(path) ? <Footer /> : null}
    </>
  );
}

export default App;
