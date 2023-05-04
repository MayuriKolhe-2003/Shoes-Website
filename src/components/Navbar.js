import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"


const Navbar = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <Link class="navbar-brand " to="/"><img style={{width:"100px",height:"65px"}} src="logo.png" alt="logo" /></Link>
          <button class="btn btn-danger navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
          >
            <img style={{width:"100px",height:"65px"}} src="logo.png" alt="logo" />
          </button>
          <div class="offcanvas offcanvas-start-lg bg-light" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header d-flex d-lg-none">
              <h5 class="offcanvas-title " id="offcanvasExampleLabel">MyShoes Website</h5>
              <a href="javascript:void(0) "
                class="text-reset p-0"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  class="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
            <div class="offcanvas-body p-lg-0">
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
              <li className="nav-item i">
                <Link to="/wishlist" className="search"><AiOutlineHeart /></Link>
              </li>
              <li className="nav-item i">
                <Link to="/cart" className="search"><FaShoppingBag /></Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
