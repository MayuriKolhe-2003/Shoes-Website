import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'


const ProductImage = (props) => {
	const shoe = props.shoe;
	//console.log(shoe);
	
  return (
    <>
    <div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">
						<div className="single-prd-item">
							<img className="img-fluid" src={shoe.img} alt="" style={{height:"600px",width:"500px"}}/>
						</div>

				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>{shoe.name}</h3>
						<h2>{shoe.price}</h2>
						<ul className="list">
							<li><a className="active" href="#"><span>Category</span> : {shoe.category}</a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p>{shoe.description}</p>
						<div className="product_count">
							<label htmlFor="qty">Quantity:</label>
							<input type="number" name="qty"  value="1" title="Quantity:" className="input-text qty" onChange=""/>

						</div>
						<div className="card_area d-flex align-items-center">
							<a className="primary-btn" href="#">Add to Cart</a>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"><AiOutlineHeart /></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default ProductImage
