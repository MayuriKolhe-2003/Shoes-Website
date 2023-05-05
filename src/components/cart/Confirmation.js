import React from 'react'

const Confirmation = () => {
	return (
		<>
			<section className="order_details mt-5">
				<div className="container mt-5">
					<h3 className="title_confirmation p-5">Thank you. Your order has been received.</h3>
					<div className="row order_d_inner">
						<div className="col-lg-4">
							<div className="details_item">
								<h4>Order Info</h4>
								<ul className="list">
									<li><span>Order number</span> : 60235</li>
									<li><span>Date</span> : Los Angeles</li>
									<li><span>Total</span> : USD 2210</li>
									<li><span>Payment method</span> : Check payments</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="details_item">
								<h4>Billing Address</h4>
								<ul className="list">
									<li><span>Street</span> : 56/8</li>
									<li><span>City</span> : Los Angeles</li>
									<li><span>Country</span> : United States</li>
									<li><span>Postcode </span> : 36952</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="details_item">
								<h4>Shipping Address</h4>
								<ul className="list">
									<li><span>Street</span> : 56/8</li>
									<li><span>City</span> : Los Angeles</li>
									<li><span>Country</span> : United States</li>
									<li><span>Postcode </span> : 36952</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row mt-5 pt-3 d-flex">
						<div className="col-md-6 d-flex">
							<div className="cart-detail cart-total bg-light  p-4">
								<h3 className="billing-heading mb-4">Order Summary</h3>
								<p className="d-flex">
									<span>Subtotal</span>
									<span>$20.60</span>
								</p>
								<p className="d-flex">
									<span>Delivery</span>
									<span>$0.00</span>
								</p>
								<p className="d-flex">
									<span>Discount</span>
									<span>$3.00</span>
								</p>
								<hr />
								<p className="d-flex total-price">
									<span>Total</span>
									<span>$17.60</span>
								</p>
							</div>
						</div>
					</div>
					</div>
			</section>
		</>
	)
}

export default Confirmation
