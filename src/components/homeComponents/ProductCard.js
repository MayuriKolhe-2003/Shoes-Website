import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
const ProductCard = ({product}) => {
    return (

        <div className=" product-card d-flex" >
            <div className="product d-flex flex-column">
        <a href={`single-product/${product.id}`} className="img-prod"><img className="img-fluid" src={product.img}/>
            <div className="overlay"></div>
        </a>
        <div className="text py-3 pb-4 px-3">
            <div className="d-flex">
                <div className="cat">
                    <span>{product.category}</span>
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
            <h3><a href={product.url}></a>{product.name}</h3>
            <div className="pricing">
                <p className="price"><span>{product.price}</span></p>
            </div>
            <p className="bottom-area d-flex px-3">
                <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a>
            </p>
        </div>
    </div>
        </div>
    )
}

export default ProductCard
