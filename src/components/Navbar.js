import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"


const Navbar = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg  fixed-top bg-white">

        <Link to="/"><img src="logo.jpg" class="navbar-brand" /></Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Mens</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Womens</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Sale</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ms-auto navbar-right">
            <li className="nav-item">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="ms-3 h-100" id="btnGroupAddon2"><FiSearch /></div>
                </div>
                <input class="form-control py-2 border-0" type="search" placeholder="Search" />
              </div>
            </li>
            <li className="nav-item">
              <Link to="/wishlist" className="search"><span className="lnr lnr-magnifier" id="search"><AiOutlineHeart /></span></Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="search"><span className="lnr lnr-magnifier" id="search"><FaShoppingBag /></span></Link>
            </li>


          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar;
