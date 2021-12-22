import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// components
import Anime from "./components/Anime";
import CharacterContainer from "./components/CharacterContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
         <Route exact path="/" element={<Anime />} />
         <Route path="/characters" element={<CharacterContainer />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/contact" element={<Contact />}/>
         <Route path="/banner" element={<Banner />}/>

         </Routes>
       </div>
     </Router>
    );
  }
}

export default App;