import React from 'react';
import './AllProdstyles.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBagHeart } from 'react-icons/bs'

var itemid = null
function Card(props) {

    return (

        <div class="card shadow-sm border border-0">
            <div class="main-shoe container card-body">
                <div class="card-bg">
                    <img src={props.img} class="shoe-all-imag img-fluid" alt="imag"></img>
                    <div class="all-icons d-flex justify-content-between">
                        <i onClick={() => itemid = props.id} class="fs-4 ps-2 pb-2"><AiOutlineShoppingCart /></i>
                        <i class="fs-4 pe-2"><BsBagHeart /></i>
                    </div>

                </div>

                <p class="text-success mb-0">In Stock</p>
                <h5 class="card-title mb-2">{props.name}</h5>
                <h6 class="card-subtitle text-body-secondary text-muted fw-light">{props.type === 'male' ? "Men's Shoe" : "Women's Shoe"}</h6>
                {
                    props.onSale
                        ? <p class="card-text fw-medium mt-2">MRP : <span class="text-muted text-decoration-line-through">{props.price}</span> {props.salePrice}</p>
                        : <p class="card-text fw-medium mt-2">MRP : {props.price}</p>
                }
            </div>
        </div>
    );
}

export {Card, itemid}