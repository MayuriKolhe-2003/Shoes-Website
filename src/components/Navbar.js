import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"


const Navbar = () => {

  return (
    <>
      <nav class="navbar  fixed-top navbar-expand-md bg-white justify-content-center">
        <div class="container">
          <Link to="/"><img src='logo.png' class="navbar-brand d-flex me-auto" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-center ms-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/mens">Mens</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/womens">Womens</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/all-product">Kids</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <li className='nav-item'>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping"><FiSearch/></span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
              </li>
              <li className="nav-item">
                <Link to="/wishlist" className="search"><AiOutlineHeart /></Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="search"><FaShoppingBag /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
