import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import data from '../../data/products.json'
import { itemid } from '../AllProductsComponents/Card';


export default function CartCard() {

	// ----------------------------- Dynamic Cart Functionality -------------------------------------------

	var newdata = []
	

	for (var i = 0; i < itemid.length; i++) {
		newdata.push(data[itemid[i]])
	}

	const [cartItms, setCartItms] = useState(newdata);
	var currPrice = 0;
	var subtot = 0;

	for (var i = 0; i < cartItms.length; i++) {
		currPrice = currPrice + cartItms[i].salePrice
		subtot = subtot + cartItms[i].price
	}

	//------------------------------------ Price Functionality -----------------------------------------

	const [totalPrice, setTotalPrice] = useState(currPrice);
	const [subPrice, setSubPrice] = useState(subtot);

	//------------------------------------ Delete Functionality -----------------------------------------

	function deleteitm(id, slprice, price) {
		for (var i = 0; i < itemid.length; i++) {
			if (itemid[i] === id) {
				itemid.splice(i, 1);
			}
		}
		newdata = [];
		for (var i = 0; i < itemid.length; i++) {
			newdata.push(data[itemid[i]]);
		}
		setCartItms(newdata);
		setTotalPrice(totalPrice - slprice)
		setSubPrice(subPrice - price)
	}

	return (
		<div>
			<section className="cart mt-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="cart-list">
								<table className="table">
									<thead className="thead-primary">
										<tr className="text-center">
											<th>&nbsp;</th>
											<th>&nbsp;</th>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>


									{/* //------------------------------------ Card Render ----------------------------------------- */}
									{
										cartItms.length === 0 ?
											<tr className="text-muted p-3">Cart is empty</tr> :
											cartItms.map((prod) => {
												return (
													<tbody key={prod.id}>
														<tr className="text-center">
															<td className="product-remove"><div onClick={() => deleteitm(prod.id, prod.salePrice, prod.price)}><span className="ion-ios-close"><AiOutlineClose /></span></div></td>

															<td className="image-prod"><div className="img" style={{ backgroundImage: `url(assets/product-8.png)` }}></div></td>

															<td className="product-name">
																<h3>{prod.name}</h3>
															</td>

															<td className="price"><span className='text-muted text-decoration-line-through'> ${prod.price} </span> ${prod.salePrice} </td>

															<td className="quantity">
																<div className="input-group mb-3">
																	<input type="number" name="quantity" className="quantity form-control input-number" value='1' min="1" max="100" />
																</div>
															</td>

															<td className="total">${prod.price}</td>
														</tr>
													</tbody>
												)
											})
									}

								</table>
							</div>
						</div>
					</div>

					{/* ----------------------- Checkout Price --------------------------------- */}

					<div className="row justify-content-start">
						<div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
							<div className="cart-total mb-3">
								<h3>Cart Totals</h3>
								<p className="d-flex">
									<span>Subtotal</span>
									<span>${subPrice}</span>
								</p>
								<p className="d-flex">
									<span>Discount</span>
									<span>${subPrice - totalPrice}</span>
								</p>
								<hr />
								<p className="d-flex total-price">
									<span>Total</span>
									<span>${totalPrice}</span>
								</p>

							</div>
							<p className="text-center"><a href="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}