import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"


const Navbar = () => {

  return (
    <>

      <header className="header_area sticky-header ">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">

              <a className="navbar-brand logo_h" href="index.html">
                <img src="https://t4.ftcdn.net/jpg/04/60/99/63/360_F_460996349_bIzl423o41oLdi5hJIgNT3OD8SViuo9i.jpg" alt="logo" style={{ height: "80px" }} />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ms-auto ">
                  <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                  <li className="nav-item "><a className="nav-link" href="index.html">About</a></li>

                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="category.html">Shoes</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-product.html">Sneakers</a></li>
                      <li className="nav-item"><a className="nav-link" href="checkout.html">Running</a></li>
                      <li className="nav-item"><a className="nav-link" href="cart.html">Converse</a></li>
                      <li className="nav-item"><a className="nav-link" href="confirmation.html">Sports Shoes</a></li>
                    </ul>
                  </li>

                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <button className="search"><span className="lnr lnr-magnifier" id="search"><AiOutlineHeart /></span></button>
                  </li>
                  <li className="nav-item">
                    <button className="search"><span className="lnr lnr-magnifier" id="search"><FaShoppingBag /></span></button>
                  </li>
                  <li className="nav-item"><a href="#" className="cart"><span className="ti-bag"><FiSearch /> </span></a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="search_input" id="search_input_box " >
          <div className="container d-none">
            <form className="d-flex justify-content-between">
              <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
              <button type="submit" className="btn"></button>
              <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar
