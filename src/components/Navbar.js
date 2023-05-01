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

              <Link className="navbar-brand logo_h" to='/'>
                <img src="https://t4.ftcdn.net/jpg/04/60/99/63/360_F_460996349_bIzl423o41oLdi5hJIgNT3OD8SViuo9i.jpg" alt="logo" style={{ height: "80px" }} />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ms-auto ">
                  <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item "><Link className="nav-link" to="/about">About</Link></li>

                  <li className="nav-item submenu dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shoes</Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><Link className="nav-link" to="/mens">Mens</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/womens">Womens</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <button className="search"><span className="lnr lnr-magnifier" id="search"><AiOutlineHeart /></span></button>
                  </li>
                  <li className="nav-item">
                    <button className="search"><span className="lnr lnr-magnifier" id="search"><FaShoppingBag /></span></button>
                  </li>
                  <li className="nav-item"><Link to="#" className="cart"><span className="ti-bag"><FiSearch /> </span></Link></li>
                  
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
