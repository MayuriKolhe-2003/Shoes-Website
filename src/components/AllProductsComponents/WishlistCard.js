import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'


const WishlistCard = (props) => {
    
    return (
        <div class="card shadow-sm border border-0">
            <div class="main-shoe container card-body">
                <div class="card-bg text-center wishlist-card">
                    <AiFillCloseCircle className='circle' onClick={props.deleteFromWishList(props.id)}/>
                    <img src={props.img} class="shoe-all-imag img-fluid" />
                    <button className='bg-dark text-light p-2'>Move To Bag</button>
                </div>
                <div className='text p-2 text-center'>
                    <p class="text-success mb-0">In Stock</p>
                    <h5 class="card-title mb-2">{props.name}</h5>
                    {
                        props.onSale
                            ? <p class="card-text fw-medium mt-2">MRP : <span class="text-muted text-decoration-line-through">${props.price}</span> ${props.salePrice}</p>
                            : <p class="card-text fw-medium mt-2">MRP : ${props.price}</p>
                    }
                </div>

                
            </div>
        </div>
    )
}

export default WishlistCard
