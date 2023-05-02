import React from 'react'
import products from '../data/products.json'
import WishListcard from './AllProductsComponents/WishlistCard'

const Wishlist = () => {
    return (
        <div className='container mt-5 pt-5'>
             <div class="col col-md-12">
                    <div class="row mx-2">
                        {
                            products.map((obj) => {
                                return (
                                    <div class="container mt-4 col-6 col-md-3">
                                        <WishListcard name={obj.name} price={obj.price} img={obj.img} categ="Men's Shoe" onSale={obj.onSale} salePrice={obj.salePrice} type={obj.type}/>
                                    </div>
                                )
                            })
                        }
                        </div>
                        </div>
        </div>
    )
}

export default Wishlist
