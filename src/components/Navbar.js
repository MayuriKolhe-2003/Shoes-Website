import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlineHeart,AiFillCloseCircle } from "react-icons/ai"


const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand " to="/"><img style={{width:"100px",height:"65px"}} src="logo1.jpg" alt="logo" /></Link>
          <button className="btn btn-danger navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
          >
            <AiFillCloseCircle />
          </button>
          <div className="offcanvas offcanvas-start-lg bg-light" tabIndex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header d-flex d-lg-none">
              <h5 className="offcanvas-title " id="offcanvasExampleLabel">MyShoes Website</h5>
              <a 
                className="text-reset p-0"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0 text-center">
            <ul className="navbar-nav w-100 justify-content-center ms-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="/mens">Mens</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/womens">Womens</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all-product">Sale</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-auto w-25 justify-content-end">
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
