import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import data from '../../data/products.json'

const CartCard = () => {

	const [cartItm, setCartItm] = useState(data);

	function removeitem(id) {
		setCartItm(cartItm.filter((obj) => {
			return (
				obj.id !== id
			)
		}))
	}
	// removeitem(0);
	console.log(cartItm);


	return (
		<>
			<section class="cart mt-5">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="cart-list">
								<table class="table">
									<thead class="thead-primary">
										<tr class="text-center">
											<th>&nbsp;</th>
											<th>&nbsp;</th>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{cartItm.map((prod) => {
											return (

												<tr class="text-center">
													<td class="product-remove"><div><span class="ion-ios-close"><AiOutlineClose /></span></div></td>
													{/* <td class="product-remove"><div><span class="ion-ios-close"><AiOutlineClose /></span></div></td> */}

													<td class="image-prod"><div class="img" style={{ backgroundImage: `url(assets/product-8.png)` }}></div></td>

													<td class="product-name">
														<h3>{prod.name}</h3>
														<p>Far far away, behind the word mountains, far from the countries</p>
													</td>

													<td class="price">{prod.salePrice}</td>

													<td class="quantity">
														<div class="input-group mb-3">
															<input type="number" name="quantity" class="quantity form-control input-number" value='1' min="1" max="100" />
														</div>
													</td>

													<td class="total">{prod.salePrice}</td>
												</tr>
											)
										})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="row justify-content-start">
						<div class="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
							<div class="cart-total mb-3">
								<h3>Cart Totals</h3>
								<p class="d-flex">
									<span>Subtotal</span>
									<span>$20.60</span>
								</p>
								<p class="d-flex">
									<span>Delivery</span>
									<span>$0.00</span>
								</p>
								<p class="d-flex">
									<span>Discount</span>
									<span>$3.00</span>
								</p>
								<hr />
								<p class="d-flex total-price">
									<span>Total</span>
									<span>$17.60</span>
								</p>

							</div>
							<p class="text-center"><a href="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default CartCard
