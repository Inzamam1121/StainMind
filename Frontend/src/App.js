import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ReactSession } from 'react-client-session';


import Navbar from './components/Navbar';
import Home from './components/Home'
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';
import Service from "./components/Service";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Story from "./components/Story";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AlertState from "./Alert/AlertState";
import Alert from "./components/Alert";


const ProtectedURL = (activeIndex, handleActiveIndexChange) => {
  
  return (
    <>
      <AlertState>
        {activeIndex !== -1 && (
          <Navbar
            activeIndex={activeIndex} // Pass activeIndex as props
            onActiveIndexChange={handleActiveIndexChange} // Pass handleActiveIndexChange as props
          />
        )}
        <Alert/>

        <Routes>
          {/* <Route path = "/" element = {<Home />} />  */}
          <Route path="/" element={<Home navbarChange={handleActiveIndexChange} />} />
          <Route path="*" element={<Home navbarChange={handleActiveIndexChange} />} />
          <Route path="/service" element={<Service navbarChange={handleActiveIndexChange} />} />
          <Route path="/partner" element={<Partners navbarChange={handleActiveIndexChange} />} />
          <Route path="/story" element={<Story navbarChange={handleActiveIndexChange} />} />
          <Route path="/about-us" element={<About navbarChange={handleActiveIndexChange} />} />
          <Route path="/contact-us" element={<Contact navbarChange={handleActiveIndexChange} />} />

        </Routes>

        {activeIndex !== -1 && <Footer />}
      </AlertState>

    </>
  )
}


function App() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex as state
  const handleActiveIndexChange = (index) => {
    setActiveIndex(index);
  };


  return (
    ReactSession.setStoreType("localStorage"),
    <div className="App">

      {ProtectedURL(activeIndex, handleActiveIndexChange)}

    </div>


  );
}

export default App;
