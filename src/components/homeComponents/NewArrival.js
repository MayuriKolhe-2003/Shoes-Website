import React from 'react'
import products from '../../data/products.json'
import {AiOutlineStar} from 'react-icons/ai'

const NewArrival = () => {
	//const shoes = products.shoes;
  return (
    <>
    <section className='section bg-light'>
    <div className="container">
				<div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">New Shoes Arrival</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div className="container">
    		<div className="row">
    			{products.map((item,index)=>{
					return(
						<div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex" key={index}>
    				<div className="product d-flex flex-column">
    					<a href={`single-product/${item.id}`} className="img-prod"><img className="img-fluid" src={item.img} alt="Colorlib Template" />
    						<div className="overlay"></div>
    					</a>
    					<div className="text py-3 pb-4 px-3">
    						<div className="d-flex">
    							<div className="cat">
		    						<span>{item.category}</span>
		    					</div>
		    					<div className="rating">
	    							<p className="text-right mb-0">
	    								<span className="ion-ios-star-outline"><AiOutlineStar /></span>
	    								<span className="ion-ios-star-outline"><AiOutlineStar /></span>
	    								<span className="ion-ios-star-outline"><AiOutlineStar /></span>
	    								<span className="ion-ios-star-outline"><AiOutlineStar /></span>
	    								<span className="ion-ios-star-outline"><AiOutlineStar /></span>
	    							</p>
	    						</div>
	    					</div>
    						<h3><a href={item.url}></a>{item.name}</h3>
    						<div className="pricing">
	    						<p className="price"><span>{item.price}</span></p>
	    					</div>
	    					<p className="bottom-area d-flex px-3">
    							<a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
    							<a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div>
					)
				})}
    			
    			</div>
    		</div>
    </section>

    </>
  )
}

export default NewArrival
