import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='banner-area'>
        <div className='container'>
          <div className="row fullscreen align-items-center ">
            <div className='col-lg-12 p-5'>
              <div className="row ">
                <div className="col-lg-5 col-md-6 order-2 order-lg-1">
                  <div className="banner-content">
                    <h1>Nike New <br />Collection!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <a className="primary-btn mt-5">Shop Now</a>
                  </div>
                </div>

                <div className='col-lg-7 col-md-6 order-1 order-lg-2'>
                <div class="image">
                    <img src="assets/home-shoe-1.png" class="shoe" alt=""/>
                    <img src="assets/just.png" class="text" alt=""/>
                </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>


</>
  )
}

export default Banner
