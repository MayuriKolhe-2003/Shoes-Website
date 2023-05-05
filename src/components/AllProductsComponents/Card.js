import React, { useState } from 'react';
import './AllProdstyles.css';
import { BsFillCartPlusFill,BsFillBagPlusFill ,BsFillCartCheckFill,BsFillBagCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var wishListItems = [];
var itemid = [];

 function Card(props) {
    const [inCart, setInCart] = useState(<BsFillCartPlusFill />);
    const [inWish, setInWish] = useState(<BsFillBagPlusFill />);

    const notifyCart = () => {
        toast.success('Added to cart !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const notifyWish = () => {
        toast.success('Added to Wishlist !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    let isWish = false;
    function changeid(){
            notifyCart();
            itemid.push(props.id);
            setInCart(<BsFillCartCheckFill />);
            //console.log(itemid);
        
    }

    const AddToWishlist = () =>{
        notifyWish();
        wishListItems.push(props.id);
        setInWish(<BsFillBagCheckFill />);

        //console.log(wishListItems);
    }

    return (

        <div className="card shadow-sm border border-0">
            <div className="main-shoe container card-body">
            
                <div className="card-bg">
                    <img src={props.img} className="shoe-all-imag img-fluid" ></img>
                    <div class="all-icons d-flex justify-content-between">
                        <i class="fs-4 ms-2 pb-2"  onClick={() => changeid()}>{inCart}</i> 
                        <i class="fs-4 me-2"onClick={()=>{AddToWishlist()}}>{inWish}</i>
                        
                    </div>
                    <ToastContainer />


                </div>

                <p className="text-success mb-0">In Stock </p>
                <h5 className="card-title mb-2">{props.name}</h5>
                <h6 className="card-subtitle text-body-secondary text-muted fw-light">{props.type == 'male' ? "Men's Shoe" : "Women's Shoe"}</h6>
                {
                    props.onSale
                        ? <p className="card-text fw-medium mt-2">MRP : <span className="text-muted text-decoration-line-through">${props.price}</span> ${props.salePrice}
                        <Link to={`single-product/${props.id}`}><span className='text-muted ms-3'>See More</span></Link>
                        </p>
                        : <p className="card-text fw-medium mt-2">MRP : ${props.price}
                         <Link to={`single-product/${props.id}`}><span className='text-muted ms-3'>See More</span></Link>
                        </p>
                }
                
                
            </div>
        </div>
    );
}

export{Card,wishListItems,itemid};