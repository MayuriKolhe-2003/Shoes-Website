import React from 'react'
import { BrowserRouter as Router, Routes, Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
      <>
          <Navbar />
          <Router>
            <Route exact path="/"><Hero /></Route>
          </Router>
      </>
    )
  }


  export default App