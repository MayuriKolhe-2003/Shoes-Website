import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"


const Navbar = () => {

  return (
    <>

      <header class="header_area sticky-header ">
        <div class="main_menu">
          <nav class="navbar navbar-expand-lg navbar-light main_box">
            <div class="container">

              <a class="navbar-brand logo_h" href="index.html">
                <img src="https://t4.ftcdn.net/jpg/04/60/99/63/360_F_460996349_bIzl423o41oLdi5hJIgNT3OD8SViuo9i.jpg" alt="logo" style={{ height: "80px" }} />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul class="nav navbar-nav menu_nav ms-auto ">
                  <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                  <li class="nav-item "><a class="nav-link" href="index.html">About</a></li>

                  <li class="nav-item submenu dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shop</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item"><a class="nav-link" href="category.html">Shoes</a></li>
                      <li class="nav-item"><a class="nav-link" href="single-product.html">Sneakers</a></li>
                      <li class="nav-item"><a class="nav-link" href="checkout.html">Running</a></li>
                      <li class="nav-item"><a class="nav-link" href="cart.html">Converse</a></li>
                      <li class="nav-item"><a class="nav-link" href="confirmation.html">Sports Shoes</a></li>
                    </ul>
                  </li>

                  <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <button class="search"><span class="lnr lnr-magnifier" id="search"><AiOutlineHeart /></span></button>
                  </li>
                  <li class="nav-item">
                    <button class="search"><span class="lnr lnr-magnifier" id="search"><FaShoppingBag /></span></button>
                  </li>
                  <li class="nav-item"><a href="#" class="cart"><span class="ti-bag"><FiSearch /> </span></a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="search_input" id="search_input_box " >
          <div class="container d-none">
            <form class="d-flex justify-content-between">
              <input type="text" class="form-control" id="search_input" placeholder="Search Here" />
              <button type="submit" class="btn"></button>
              <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar
