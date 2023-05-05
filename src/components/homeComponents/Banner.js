import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section class="home" id="home">

<div class="slide-container active">
    <div class="slide row">
        <div class="col-md-5 content">
            <span>WELCOME TO,</span>
            <h3>The Shoe Spot</h3>
            <p>Welcome to our shoe website! We are your go-to destination for stylish and comfortable footwear. Whether you're looking for sneakers, sandals, boots, or anything in between, we've got you covered.So why wait? Start browsing our collection now and step up your shoe game today!</p>
            <Link to="/all-product" class="btn primary-btn">Buy Now</Link>
        </div>
        <div class="col-md-6 ms-auto image">
            <img src="assets/home-shoe-1.png" class="shoe" alt=""/>
            <img src="assets/home-text-1.png" class="text" alt=""/>
        </div>
    </div>
</div>
</section>


</>
  )
}

export default Banner
