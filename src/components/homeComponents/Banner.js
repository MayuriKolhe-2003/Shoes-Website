import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section class="home" id="home">

<div class="slide-container active">
    <div class="slide row">
        <div class="col-md-5 content">
            <span>nike red shoes</span>
            <h3>nike metcon shoes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
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
