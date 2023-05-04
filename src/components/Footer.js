import React from 'react'
import {AiFillHome,AiFillPhone} from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (

        <>


            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#000" }}
            >

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3 p-5">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Shoe Company</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: " 60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                We are a shoe company committed to creating stylish and comfortable footwear that meets the needs of our customers.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white">Mens</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Womens</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Kids</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Latest Products</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff ", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Terms and Conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Contact Us</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p><AiFillHome /> PICT, PUNE 411013, India</p>
                                <p><FaEnvelope /> abc@xyz.com</p>
                                <p><AiFillPhone /> +91 1234567890</p>
                                <p><AiFillPhone /> +91 1234567890</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center fw-light text-muted p-3"style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                    © 2023 Copyright : 
                    <a className="text-white" href="#"> abcd.com</a>
                </div>

            </footer>

        </>

    )
}

export default Footer
