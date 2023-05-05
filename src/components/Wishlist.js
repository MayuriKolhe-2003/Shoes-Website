import React, { useState } from 'react'
import products from '../data/products.json'
import WishListcard from './AllProductsComponents/WishlistCard'
import { wishListItems } from './AllProductsComponents/Card'
import data from '../data/products.json';
import {AiFillCloseCircle} from 'react-icons/ai'

const Wishlist = () => {
    var wishList = [];
    var newl = [];
    
    //console.log(wishListItems);
    for(var i=0;i<wishListItems.length;i++)
    {
        wishList.push(data[wishListItems[i]]);
    }
    const [wishListProducts, setwishListProducts] = useState(wishList);
	//console.log(wishListProducts);
    
    const deleteFromWishList = (id)=>{
        for( var i = 0; i < wishListItems.length; i++){ 
            if ( wishListItems[i] === id) { 
                wishListItems.splice(i, 1); 
            }
        }
        wishList = [];
        for(var i=0;i<wishListItems.length;i++)
        {
            wishList.push(data[wishListItems[i]]);
        }
        setwishListProducts(wishList);
        console.log(wishListProducts);
    }

    

    return (
        <div className='container mt-5 pt-5'>
             <div class="col col-md-12">
                    <div class="row mx-2">
                    <h1 class="text-center">Wishlisted Products</h1>
                        {
                            wishListProducts.length == 0 ?
                            <h2 className='p-4 text-muted'>WishList is empty !</h2>
                            :wishListProducts.map((obj) => {
                                return (
                                    <div class="container mt-4 col-6 col-md-3" key={obj.id}>
                                        <div class="card shadow-sm border border-0">
            <div class="main-shoe container card-body">
                <div class="card-bg text-center wishlist-card">
                    <AiFillCloseCircle className='circle' onClick={()=> deleteFromWishList(obj.id) }/>
                    <img src={obj.img} class="shoe-all-imag img-fluid" />
                    <button className='bg-dark text-light p-2'>Move To Bag</button>
                </div>
                <div className=' text p-2 text-center'>
                    <p class="text-danger mb-0">In Stock</p>
                    <h5 class="card-title mb-2">{obj.name}</h5>
                    {
                        obj.onSale
                            ? <p class="card-text fw-medium mt-2">MRP : <span class="text-muted text-decoration-line-through">{obj.price}</span> {obj.salePrice}</p>
                            : <p class="card-text fw-medium mt-2">MRP : {obj.price}</p>
                    }
                </div>

                
            </div>
        </div>
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
