import React from 'react'
import Description from './Description'
import Specification from './Specification'
import Reviews from './Reviews'
import Comments from './Comments'

const ProductDesc = (props) => {
	const shoe = props.shoe;
  return (
    <>
    <section className="product_description_area">
		<div className="container">
            {/* NAV TABS SECTION*/}
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link" id="desc-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="sepec-tab" data-toggle="tab" href="#specfication" role="tab" aria-controls="specfication"
					 aria-selected="false">Specification</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="comment-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments"
					 aria-selected="false">Comments</a>
				</li>
				<li className="nav-item">
					<a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</a>
				</li>
			</ul>

			<div className="tab-content" id="myTabContent">
				<Description />
                <Specification />
                <Reviews />
                <Comments />
			
				
				
			</div>
		</div>
	</section>

	<section className="related-product-area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="section-title">
						<h1>Deals of the Week</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src="img/r1.jpg" alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src="img/r2.jpg" alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src="img/r3.jpg" alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src="img/r11.jpg" alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="ctg-right">
						<a href="#" target="_blank">
							<img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt=""/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

    </>
  )
}

export default ProductDesc
