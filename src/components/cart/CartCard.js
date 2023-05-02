import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import data from '../../data/products.json'

export default function CartCard() {

	var currPrice = 0;
	var subtot = 0;
	for (var i = 0;i<data.length;i++){
		currPrice = currPrice + data[i].salePrice;
		subtot = subtot + data[i].price;
	}

	const [cartItms, setCartItms] = useState(data);
	const [totalPrice,setTotalPrice] = useState(currPrice);
	const [subPrice, setSubPrice] = useState(subtot);

	function deleteitm(id, slprice, price) {
		setCartItms(cartItms.filter((obj) => {
			return (
				obj.id !== id
			)
		}))
		setTotalPrice(totalPrice - slprice)
		setSubPrice(subPrice - price)
		console.log(totalPrice);
	}

	

	return (
		<div>
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

									{
										cartItms.length === 0 ?
											<h2 class="text-muted pt-3">Cart is empty</h2> :
											cartItms.map((prod) => {
												return (
													<tbody>
														<tr class="text-center">
															<td class="product-remove"><div onClick={() => deleteitm(prod.id,prod.salePrice,prod.price)}><span class="ion-ios-close"><AiOutlineClose /></span></div></td>

															<td class="image-prod"><div class="img" style={{ backgroundImage: `url(assets/product-8.png)` }}></div></td>

															<td class="product-name">
																<h3>{prod.name}</h3>
																<p>Far far away, behind the word mountains, far from the countries</p>
															</td>

															<td class="price">${prod.price}</td>

															<td class="quantity">
																<div class="input-group mb-3">
																	<input type="number" name="quantity" class="quantity form-control input-number" value='1' min="1" max="100" />
																</div>
															</td>

															<td class="total">${prod.price}</td>
														</tr>
													</tbody>
												)
											})
									}

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
									<span>${subPrice}</span>
								</p>
								<p class="d-flex">
									<span>Discount</span>
									<span>${subPrice - totalPrice}</span>
								</p>
								<hr />
								<p class="d-flex total-price">
									<span>Total</span>
									<span>${totalPrice}</span>
								</p>

							</div>
							<p class="text-center"><a href="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
