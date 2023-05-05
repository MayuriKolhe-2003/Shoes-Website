import React from 'react'
import { Link } from 'react-router-dom'

const Deal = () => {
  return (
    <>
    <section className=" deal " data-aos="zoom-up" data-aos-duration="400">
    	<div className="w-100">
				<div className="row g-0">
					<div className="col-lg-4">
						<div className="deal divider-one img p-5 d-flex align-items-end" style={{backgroundImage: `url('assets/choose-1.jpg')`}}>

    					<div className="text text-center text-white px-2">
								<span className="subheading">Men's Shoes</span>
    						<h2>Men's Collection</h2>
    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    						<p><Link to="/mens" className="btn btn-black px-3 py-2">Shop now</Link></p>
    					</div>
    				</div>
					</div>
					<div className="col-lg-8">
    				<div className="row no-gutters deal divider-two align-items-stretch">
    					<div className="col-md-12">
	    					<div className="deal full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{backgroundImage: `url('assets/choose-2.jpg')`}}>
	    						<div className="col-md-7 d-flex align-items-center">
	    							<div className="text text-white px-5">
	    								<span className="subheading">Women's Shoes</span>
			    						<h2>Women's Collection</h2>
			    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
			    						<p><Link to="/womens" className="btn btn-black px-3 py-2">Shop now</Link></p>
			    					</div>
	    						</div>
	    					</div>
	    				</div>
    					<div className="col-md-12">
    						<div className="row no-gutters">
    							<div className="col-md-6">
		    						<div className="deal wrap img align-self-stretch bg-light d-flex align-items-center" >
		    							<div className="text text-center px-5">
		    								<span className="subheading">Summer Sale</span>
				    						<h2>Extra 50% Off</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<p><Link to="/sale" className="btn btn-black px-3 py-2">Shop now</Link></p>
				    					</div>
		    						</div>
	    						</div>
	    						<div className="col-md-6">
		    						<div className="deal wrap img align-self-stretch d-flex align-items-center" style={{backgroundImage: `url('assets/choose-3.jpg')`}}>
		    							<div className="text text-center text-white px-5">
		    								<span className="subheading">Shoes</span>
				    						<h2>Best Sellers</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<p><Link to="/best-deals" className="btn btn-black px-3 py-2">Shop now</Link></p>
				    					</div>
		    						</div>
	    						</div>
	    					</div>
    					</div>
    				</div>
    			</div>
  			</div>
    	</div>
    </section>
    </>
  )
}

export default Deal
