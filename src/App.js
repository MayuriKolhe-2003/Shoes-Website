import React from 'react'
import { BrowserRouter as Router, Routes, Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login"
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Checkout from './components/cart/Checkout';
import Confirmation from './components/cart/Confirmation';
import Footer from './components/Footer';

function App() {
    return (
      <>
          <Navbar />
          
            <Routes>
            <Route exact path="/" element={<Hero />}></Route>
            <Route path="/single-product/:id" element={<SingleProduct />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>
            <Route path='/confirmation' element={<Confirmation />}></Route>
            </Routes>
          
          <Footer />
      </>
    )
  }


  export default App