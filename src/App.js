import React from 'react'
import { BrowserRouter as Router, Routes, Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login"
import SingleProduct from './components/SingleProduct';

function App() {
    return (
      <>
          <Navbar />
          <Router>
            <Routes>
            <Route exact path="/" element={<Hero />}></Route>
            <Route path="/single-product/:id" element={<SingleProduct />}></Route>
            <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Router>
      </>
    )
  }


  export default App