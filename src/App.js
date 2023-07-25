import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import EventRegister from "./components/EventRegister";
import Committee from "./components/Committee";
import Login from "./components/Login";
import AddEvent from "./components/AddEvent";
import AdminHome from "./components/AdminHome";
import EditEvent from "./components/EditEvent";

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
        <Route path='/' element={paths.includes(path) ? <Navbar /> : null}>
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/eveReg/:id' element={<EventRegister />} />
          <Route path='/committee/:id' element={<Committee />} />         
          <Route path='/committee/events/:id' element={<Events />} />
          <Route path='/login/:com' element={<Login />} />
          <Route path='/admin/event' element={<AddEvent />} />
          <Route path='/admin/:id' element={<AdminHome />} />
          <Route path='/admin/event/:id' element={<EditEvent />} />
        </Route>
      </Routes>
      {paths.includes(path) ? <Footer /> : null}
    </>
  );
}

export default App;
